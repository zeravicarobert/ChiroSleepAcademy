# Patient Resources

Handouts for patients (not DC-facing CSA course content).

## Files

- **`ca-sdi-patient-resource.html` / `.pdf`** — "How to actually get help with
  your California SDI claim." A one-page, CSA-branded handout for patients on
  California State Disability Insurance who can't reach EDD by phone. Leads with
  the legislator / constituent-services route (contact your CA Assembly Member or
  State Senator's office to open a case with EDD), then covers EDD phone numbers,
  myEDD / SDI Online, tips to beat the hold, and in-person offices.

  Branded as a **Chiropractic Sleep Academy** document, **written by Dr. Robert
  Zeravica, D.C.** — CSA emblem in the masthead and footer, Dr. Z's headshot in
  the author byline, navy/gold palette from the logo. The `.html` is
  self-contained (images embedded as data URIs) so it opens and prints anywhere.

  - Phone numbers and hours verified against edd.ca.gov, July 2026. Re-confirm
    before reprinting — EDD changes these.
  - Not legal advice; not affiliated with or endorsed by EDD. CSA does not
    manage, file, or decide SDI claims.

## `assets/` — build sources

- `ca-sdi-resource.template.html` — the editable template (image slots are the
  tokens `__CSA_MARK__` and `__DRZ_AVATAR__`).
- `csa-mark.png` — CSA emblem (moon + spine), cropped from `site/assets/logo.png`.
- `drz-headshot.png` — Dr. Z's circular headshot, cropped from the CEU seminar flyer.

### Regenerate

Embed the images into the template, then print to PDF with headless Chromium:

```
# 1) inject images
python3 - <<'PY'
import base64
u=lambda p:'data:image/png;base64,'+base64.b64encode(open(p,'rb').read()).decode()
h=open('assets/ca-sdi-resource.template.html').read()
h=h.replace('__CSA_MARK__',u('assets/csa-mark.png')).replace('__DRZ_AVATAR__',u('assets/drz-headshot.png'))
open('ca-sdi-patient-resource.html','w').write(h)
PY
# 2) render PDF
chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=ca-sdi-patient-resource.pdf \
  file://$PWD/ca-sdi-patient-resource.html
```

To swap the photo, replace `assets/drz-headshot.png` (square PNG) and re-run.
