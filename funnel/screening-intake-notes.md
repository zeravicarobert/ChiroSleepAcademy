# Screening Intake Sheet — notes

Robert's screening spreadsheet, formalized (2026-07-16). Template:
`funnel/screening-intake-template.csv`.

## Your columns (kept)
Patient/Case ID · Patient's Doctor · Snores? · Wakes Tired? · Stops Breathing? ·
Mouth Breathing? · Jaw / Head Pain? · Neck / Posture Issues? · Tried CPAP? ·
Tried Appliances?

Good mix — the first four are classic apnea red flags (they overlap STOP-BANG);
the jaw/neck/posture ones are your **structural** cues that mainstream intake
skips. That's the CSA fingerprint.

## A few columns I added (optional)
- **Date Screened** — so you can track over time.
- **Referral Source** — which post/guide/DC sent them (measures what works).
- **Bed Partner Noticed?** — ties to your "wives notice first" angle.
- **Daytime Sleepiness (Epworth 0–24)** — one simple validated number.
- **Screen Result** + **Next Action** — turns the row into a decision, not just data.

Drop any you don't want.

## ⚠️ Where this sheet must live (important)
This is **clinical data**, not marketing data. Snoring, breathing pauses, jaw
pain tied to a named person = health information.

Per your own rule (`funnel/contact-management-recommendation.md`): keep it
**separate** from your outreach/CRM list.
- **Contact + campaign status** → CRM-safe tracker (Layer 1).
- **This screening sheet (symptoms)** → HIPAA-appropriate storage only (your EHR,
  or a Google Workspace with a signed BAA). Not a plain spreadsheet you email
  around, and no full names on anything public.
- Use a **Case ID** (CASE-001), not the patient's name, as the key — then the
  name lives only in your secure system.

## How it feeds the funnel
Screen → if red flags → **HST** → Zoom review → free consult (your S-stages in
`funnel/patient-ecosystem-funnel.md`). "Screen Result" + "Next Action" are the
handoff into the master tracker.
