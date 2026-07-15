# Contact Management & Funnel Software — Recommendation

**Status:** v1 — recommendation, pending Robert's pick
**Drafted:** 2026-07-15
**Purpose:** How to track (a) the email campaign to each patient in the
EDD/SDI database and (b) where each patient sits in the ecosystem funnel
(`funnel/patient-ecosystem-funnel.md`).

---

## The core decision: split into two layers

The most important thing to get right is **not which brand of CRM** — it's
that you keep two kinds of data apart:

| Layer | What's in it | Sensitivity | Where it can live |
|---|---|---|---|
| **1. Outreach / pipeline** | Name, email, phone, which stage they're at, campaign sends, replies | Low (contact info + stage labels) | A normal marketing CRM |
| **2. Clinical outcomes** | AHI, ODI, SpO2, diagnoses, test PDFs | **PHI — protected** | HIPAA-appropriate system only (EHR, or a store under a signed BAA) |

**Why this matters:** these are your *patients*. AHI numbers and diagnoses
are protected health information. Most marketing CRMs and email tools will
**not** sign a Business Associate Agreement (BAA) on their standard/cheap
plans, which means you should not put test results or diagnoses in them.
Names + "this patient is at the Zoom-review stage" is fine. "This patient's
AHI is 22" is not — that goes in Layer 2.

This split is already built into the two templates:
- `patient-tracker-template.csv` = Layer 1 (safe for a CRM)
- `outcomes-tracker-template.csv` = Layer 2 (keep in a HIPAA-appropriate place)

> None of this is legal advice — confirm BAA/HIPAA specifics with your
> compliance person before loading real patient data anywhere.

---

## Recommendation

### Start today (zero cost, zero risk): the CSV templates
Use `patient-tracker-template.csv` in Google Sheets right now to run the
first campaign. It has columns for every stage and every campaign touch.
You can send the emails, log sends/replies, and move people through stages
immediately — no new software, no signup. This is the smallest unit of
progress and it works today.

> Note: your EDD database sheet is owned by `zeravicarobert@gmail.com`
> (CLAUDE.md). I can help you add the tracker columns directly to a copy of
> that sheet, or keep the tracker as a separate linked sheet — your call.

### Then pick a real CRM when volume justifies it

**Top pick — GoHighLevel (GHL).** Best fit for what you're doing:
built-in pipeline stages (drag patients S0→S13), email + SMS campaigns,
booking/calendar, and it's widely used in health/coaching. It can sign a
BAA on the appropriate plan — **confirm that before any PHI touches it**,
and even then keep Layer-2 test results in your EHR. Downside: it's a lot
of tool; there's a learning curve.

**Simplest — ClickFunnels 2.0 (what you already pay for).** You're already
building the site there (CLAUDE.md §6). CF 2.0 has a contacts CRM,
"Opportunities" pipelines, and email built in. If you want one login for
site + funnel + email, this is the least new overhead. Confirm its HIPAA
posture before storing anything beyond contact info + stage.

**If you want a clean, familiar CRM — HubSpot.** Free tier for contacts +
pipelines + basic email is genuinely good and easy. Caveat: HubSpot only
signs a BAA on higher-tier plans, so on the free tier treat it as
**Layer 1 only** — contact + stage, never results.

**Avoid for this use:** Mailchimp and most plain email-blast tools — they
generally won't sign a BAA and aren't built for a clinical pipeline.

### My actual recommendation in one line
**Run the first campaign on the CSV/Google Sheet this week; if it converts,
move Layer 1 into ClickFunnels 2.0 (you already have it) or GoHighLevel —
and keep Layer 2 (AHI/results) in your EHR the whole time.**

---

## Mapping the funnel stages to CRM pipeline stages

Whatever tool you choose, create these pipeline stages (from
`patient-ecosystem-funnel.md`):

1. S0 — Contacted
2. S1 — Engaged
3. S2 — Screened
4. S3 — Sleep Disorder Indicated
5. S4 — HST Ordered
6. S5 — HST Completed
7. S6 — Zoom Review
8. S7 — Early Treatment Offered
9. S8 — VAET Scheduled
10. S9 — VAET Completed
11. S10 — Local DC Referral
12. S11 — Post-3mo Test
13. S12 — Post-VAET Test
14. S13 — 2-Year Tracking

Each patient is one contact/opportunity that moves right as they progress.
Campaign email tracking (open/reply/follow-up) lives on the contact record;
clinical results never do.

---

## What I can do next (say the word)
- Build the tracker columns straight into a copy of your EDD Google Sheet.
- Draft the 2 follow-up emails for non-responders (Stage S0 → S1 nudges).
- Draft the short **consent-to-track** form needed before 2-year tracking.
- Once you pick a CRM, map out the exact stage + automation setup for it.
