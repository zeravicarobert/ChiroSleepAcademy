#!/usr/bin/env python3
"""Build the print-ready HTML version of the VAET initial evaluation form.

Usage:  python3 clinical/build-form.py

Reads  clinical/vaet-initial-evaluation.md
Writes clinical/vaet-initial-evaluation.html

The HTML is a single self-contained file intended to be printed on US Letter
and filled in by hand chairside. Regenerate it whenever the markdown changes.
"""

import pathlib
import re

import markdown

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE / "vaet-initial-evaluation.md"
OUT = HERE / "vaet-initial-evaluation.html"

CSS = """
:root {
  --ink: #14181d;
  --muted: #5a636e;
  --rule: #c9d0d8;
  --rule-soft: #e4e9ee;
  --accent: #1d4e6b;
  --tint: #f4f7f9;
  --warn: #fdf6e8;
  --warn-rule: #d9b45f;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 2.2rem 2rem 4rem;
  font-family: "Source Sans Pro", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.5;
  color: var(--ink);
  background: #fff;
  max-width: 8.5in;
  margin-inline: auto;
}
h1 {
  font-size: 19pt;
  line-height: 1.2;
  margin: 0 0 .35rem;
  color: var(--accent);
  letter-spacing: -.01em;
}
h2 {
  font-size: 13pt;
  margin: 2.1rem 0 .7rem;
  padding: .3rem .55rem;
  background: var(--accent);
  color: #fff;
  border-radius: 3px;
  page-break-after: avoid;
  break-after: avoid;
}
h3 {
  font-size: 11.5pt;
  margin: 1.35rem 0 .45rem;
  color: var(--accent);
  border-bottom: 1.5px solid var(--rule);
  padding-bottom: .18rem;
  page-break-after: avoid;
  break-after: avoid;
}
h4 { font-size: 10.5pt; margin: 1rem 0 .3rem; page-break-after: avoid; }
p { margin: .5rem 0; }
hr { border: 0; border-top: 1px solid var(--rule-soft); margin: 1.5rem 0; }
strong { font-weight: 700; }
em { color: var(--muted); }
code {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 9.5pt;
  background: var(--tint);
  padding: .05rem .28rem;
  border-radius: 2px;
}
pre {
  background: var(--tint);
  border: 1px solid var(--rule-soft);
  border-left: 3px solid var(--accent);
  padding: .55rem .7rem;
  border-radius: 3px;
  overflow-x: auto;
}
pre code { background: none; padding: 0; }
blockquote {
  margin: .9rem 0;
  padding: .6rem .85rem;
  background: var(--warn);
  border-left: 3px solid var(--warn-rule);
  border-radius: 0 3px 3px 0;
  page-break-inside: avoid;
  break-inside: avoid;
}
blockquote > :first-child { margin-top: 0; }
blockquote > :last-child { margin-bottom: 0; }
blockquote h2 {
  background: none;
  color: var(--ink);
  font-size: 11.5pt;
  padding: 0;
  margin: 0 0 .4rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: .6rem 0 1rem;
  font-size: 9.5pt;
  page-break-inside: avoid;
  break-inside: avoid;
}
th, td {
  border: 1px solid var(--rule);
  padding: .3rem .4rem;
  text-align: left;
  vertical-align: top;
}
th { background: var(--tint); font-weight: 700; }
tbody tr:nth-child(even) td { background: #fbfcfd; }
/* blank cells are write-in space — give the pen room */
td:empty { height: 1.6rem; }
ul, ol { margin: .5rem 0; padding-left: 1.3rem; }
li { margin: .22rem 0; }

/* hand-fill affordances */
.box {
  display: inline-block;
  width: .78em;
  height: .78em;
  border: 1.3px solid var(--muted);
  border-radius: 2px;
  margin-right: .18em;
  vertical-align: -.03em;
}
.fill {
  display: inline-block;
  border-bottom: 1px solid var(--muted);
  min-width: 2.4em;
  vertical-align: baseline;
}

@media print {
  body { padding: 0; font-size: 9.5pt; }
  h2 { page-break-before: auto; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  th, blockquote, tbody tr:nth-child(even) td {
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  a { color: inherit; text-decoration: none; }
}
@page { size: letter; margin: 0.6in 0.55in; }
"""


def to_html(md_text: str) -> str:
    # Shield runs of underscores before conversion — python-markdown's emphasis
    # parser chews them into <strong><em> soup otherwise. The run length is
    # carried in the token so the printed rule keeps the width authored in the
    # markdown, then swapped for a real fill rule after conversion.
    fenced = re.sub(r"_{3,}", lambda m: f"@@FILL{len(m.group(0))}@@", md_text)

    html = markdown.markdown(fenced, extensions=["tables", "fenced_code", "sane_lists"])

    # Empty ballot boxes become real drawable squares.
    html = html.replace("☐", '<span class="box"></span>')

    # Fill tokens become sized write-on rules.
    html = re.sub(
        r"@@FILL(\d+)@@",
        lambda m: f'<span class="fill" style="width:{max(2.4, int(m.group(1)) * 0.44):.1f}em"></span>',
        html,
    )
    return html


def main() -> None:
    body = to_html(SRC.read_text(encoding="utf-8"))
    OUT.write_text(
        "<!DOCTYPE html>\n"
        '<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
        "<title>CSA / VAET — New Patient Initial Evaluation &amp; Examination</title>\n"
        f"<style>{CSS}</style>\n</head>\n<body>\n{body}\n</body>\n</html>\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
