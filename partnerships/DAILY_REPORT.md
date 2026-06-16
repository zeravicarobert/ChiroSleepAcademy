# CSA Daily Progress Report — Spec & Prompt

**Purpose:** A consistent daily report on the 8-partnership project (and other
active CSA projects), delivered to **ZeravicaRobert@gmail.com**.

**Delivery reality (read once):**
- This Gmail connector can **draft**, not send. The report is dropped into
  Robert's Gmail Drafts, ready to send/read.
- A session can't run daily on its own (ephemeral container). To make this
  truly hands-off, schedule a **daily session** in Claude Code on the web that
  runs the prompt below.

## The daily prompt (paste into a scheduled session)

> Read `partnerships/8-PARTNERSHIPS.md` and `CLAUDE.md`. Check my Calendar and
> Gmail for anything time-sensitive in the next 48 hours. Then generate the CSA
> Daily Progress Report per `partnerships/DAILY_REPORT.md` and create it as a
> Gmail draft to ZeravicaRobert@gmail.com. Keep it scannable. Then update the
> activity log in `partnerships/8-PARTNERSHIPS.md` if anything moved.

## Report structure (keep it scannable)

1. **Subject:** `CSA Daily — <Day Mon DD, YYYY>`
2. **Top 3 priorities today** — the highest-leverage actions, ranked.
3. **Time-sensitive (next 48h)** — anything from Calendar/Gmail with a clock.
4. **8-partnership pipeline** — one line per node: status + next action.
5. **Waiting on you** — decisions/contacts only Robert can provide.
6. **What I'll do next** — what Claude advances without him.

## Notes
- Stay inside CSA red lines (CLAUDE.md §5) in any drafted outreach.
- One report per day. Don't spawn duplicate drafts — if today's draft exists,
  update rather than add.
