# CSA Patient Ecosystem Funnel

**Status:** v1
**Drafted:** 2026-07-15
**Scope:** Patient-facing funnel for Robert's own patient base (starting
with the CA EDD / SDI patient database). This is **distinct** from the
DC-facing "Heal the Healer First" pathway in `CLAUDE.md` §7–8. Here the
*patient* is the direct customer.

This document defines every stage a patient moves through, what happens at
each stage, what data is captured, and how outcomes are tracked for **2
years from the VAET date**. The companion trackers are:
- `funnel/patient-tracker-template.csv` — contact + campaign + pipeline stage
- `funnel/outcomes-tracker-template.csv` — clinical metrics over time (PHI)

---

## The one-line ecosystem

> Awareness → Screen → Home Sleep Test → Zoom Review → Early Treatment
> Offer (VAET) → Local-DC Referral (3 mo CBP + SOT/AK) → Post-Testing →
> 2-Year Outcome Tracking

---

## Guiding rules

- **Physician reads the test; Dr. Z reads it structurally.** Diagnosing a
  sleep disorder is the reading physician's role. Dr. Z screens, educates,
  coordinates, reviews structurally, and tracks outcomes. (CLAUDE.md red
  line: DCs don't diagnose OSA.)
- **No cure claims.** VAET is offered as a structural intervention we are
  *measuring*, not a promised fix for sleep apnea. The entire point of the
  2-year tracking is to find out honestly whether it helps.
- **Every option has its place.** Patients are made aware of middle
  (CPAP / oral appliance) and later (medication / surgery) interventions,
  respectfully — never disparaged.
- **PHI discipline.** Names + contact + pipeline stage can live in a CRM.
  AHI / diagnoses / test results live only in a HIPAA-appropriate system.

---

## Stages

Each stage has an **ID** (used in the tracker `Stage` column), an entry
trigger, the action, and what to record.

### S0 — Awareness / Contacted
- **Trigger:** Patient is on the list and the campaign email
  (`outreach/patient-email-sleep-early-intervention.md`) is sent.
- **Action:** Send email. Log send date.
- **Record:** Email sent date, subject line used, follow-up dates.

### S1 — Engaged
- **Trigger:** Patient opens, replies, clicks, calls, or texts back.
- **Action:** Respond, answer questions, invite to screen.
- **Record:** Engagement date + channel (reply / call / text / link click).

### S2 — Screened
- **Trigger:** Patient agrees to a quick sleep screen.
- **Action:** Run the sleep screening set:
  - Epworth Sleepiness Scale (ESS)
  - STOP-BANG
  - CSA sleep/airway questionnaire
  - SnoreLab or sleep-app tracking (optional)
  - Visual airway/postural notes if in office (Mallampati, tongue
    scalloping, FHP) — clinical, store as PHI
- **Record:** Screen date + scores (ESS, STOP-BANG total). **Scores are
  PHI → outcomes tracker, not the CRM.**

### S3 — Sleep Disorder Indicated
- **Trigger:** Screen suggests elevated risk (e.g., STOP-BANG ≥ 3, high
  ESS, strong symptom history).
- **Action:** Recommend a home sleep test. Explain what it is and isn't.
- **Record:** Indicated (Y/N), date, brief reason.

### S4 — HST Ordered
- **Trigger:** Patient says yes to the test.
- **Action:** Order the disposable home sleep test through the HST partner
  (see CLAUDE.md §8 — Sleep Doctor / vendor TBD). Collect payment per the
  Step-2 Sleep Baseline model if applicable. Confirm shipping address.
- **Record:** Order date, vendor, price/payment, ship date, device type.

### S5 — HST Completed (BASELINE)
- **Trigger:** Test worn, data uploaded, physician read returned.
- **Action:** Retrieve the physician read (PDF). Capture **baseline
  metrics** — this is the anchor all future tests compare against.
- **Record (outcomes tracker, PHI):** Test date, **AHI, RDI, ODI, SpO2
  mean, SpO2 nadir, total sleep time, % time < 90% SpO2**, physician
  impression. Label this row **Baseline**.

### S6 — Zoom Results Review (Report of Findings)
- **Trigger:** Read is back.
- **Action:** Zoom call. Walk the patient through the physician's read
  through the **structural-airway lens** — posture, breathing, structure,
  and how the numbers fit. Present the spectrum of options (early / mid /
  late) honestly. This is the main conversion conversation.
- **Record:** Review date, patient's stated goals, decision/next step.

### S7 — Early Treatment Offered
- **Trigger:** Post-ROF.
- **Action:** Offer the early, structural pathway (VAET), **and** make the
  patient aware of middle/late interventions and appropriate referrals.
  Provide a written summary of what's included / not included.
- **Record:** Offer made date, options presented, patient decision.

### S8 — VAET Scheduled
- **Trigger:** Patient chooses VAET.
- **Action:** Schedule the VAET experience. Confirm **location**:
  - **91324 office** (Northridge / local), or
  - **Tecopa, CA** — Steve McNeal's hot springs property.
- **Record:** VAET location, scheduled dates, logistics, written scope
  (what's included / à la carte — mirror CLAUDE.md §8 Step 4 exclusions).

### S9 — VAET Completed  ⭐ TRACKING ANCHOR
- **Trigger:** VAET sessions done.
- **Action:** Document treatment. **The VAET completion date is the anchor
  date** for all 2-year outcome tracking.
- **Record:** **VAET date** (anchor), location, sessions delivered, notes.

### S10 — Local DC Referral (3 months CBP + SOT/AK)
- **Trigger:** After VAET.
- **Action:** Refer the patient to their **local chiropractor** for **3
  months of CBP and SOT/AK** care. Provide the referring DC a summary and
  the care rationale. Coordinate so post-testing happens on schedule.
- **Record:** Referral date, DC name/practice/contact, care start date,
  planned 3-month completion date.

### S11 — Post-Test #1 (after 3 months of CBP + SOT/AK)
- **Trigger:** ~3 months after DC care begins.
- **Action:** Re-run the home sleep test. Compare to baseline.
- **Record (outcomes tracker):** Test date, full metric set, delta vs
  baseline. Label row **Post-3mo-DC**.

### S12 — Post-VAET Test
- **Trigger:** Defined interval after VAET (**confirm timing with Robert —
  see open questions**). May coincide with or be separate from S11.
- **Action:** Re-run the home sleep test.
- **Record (outcomes tracker):** Test date, full metric set, delta vs
  baseline. Label row **Post-VAET**.

### S13 — 2-Year Outcome Tracking
- **Trigger:** Anchored to the **VAET date (S9)**.
- **Action:** Periodic re-testing + symptom check-ins to see whether
  changes hold. Suggested check-in schedule (confirm/adjust):
  - VAET date (anchor)
  - **+3 months** (aligns with S11 post-DC-care test)
  - **+6 months**
  - **+12 months**
  - **+18 months**
  - **+24 months** (close of tracking window)
- **Record (outcomes tracker):** One dated row per test with the full
  metric set, plus ESS and subjective/symptom notes each time.

---

## Metrics captured every test (the outcomes question)

The whole ecosystem exists to answer one honest question: **does VAET (in
combination with CBP + SOT/AK) help these patients' sleep?** To answer it
credibly, capture the same fields every time:

| Field | Why |
|---|---|
| AHI (Apnea-Hypopnea Index) | Primary apnea severity metric |
| RDI (Respiratory Disturbance Index) | Broader respiratory disturbance |
| ODI (Oxygen Desaturation Index) | Desaturation frequency |
| SpO2 mean / nadir | Oxygenation quality / worst dip |
| % total sleep time < 90% SpO2 | Hypoxic burden |
| Total sleep time / efficiency | Context for the indices |
| ESS (Epworth) | Subjective daytime sleepiness |
| STOP-BANG (at screen) | Baseline risk |
| Symptom notes | Snoring, fatigue, partner reports, energy |
| Physician impression | The reading MD's read |

**Analysis over time:** each patient's rows sort by date; the deltas vs
Baseline (and vs VAET date) are the outcome. Across patients, de-identified
aggregates (mean ΔAHI, % improved, etc.) become CSA's outcomes evidence —
exactly the de-identified dataset CLAUDE.md §8 says CSA must own the right
to store, export, and publish.

---

## Data-saving requirement

- **Every test PDF** is saved (Drive folder or EHR), named
  `[patientID]_[YYYY-MM-DD]_[label].pdf`.
- **Every metric** goes into `outcomes-tracker-template.csv` (or its live
  equivalent), one row per test.
- **De-identified export** must be possible for aggregate analysis and
  publication. Keep an internal `PatientID` that maps name → ID in a
  separate, access-controlled key file, so the outcomes table can be
  de-identified by dropping the name column.

---

## Open questions for Robert

1. **Post-VAET test timing (S12):** how many days/weeks after VAET is the
   post-VAET test taken? Is it the same test as the +3-month post-DC-care
   test, or separate?
2. **Screen thresholds (S3):** what STOP-BANG / ESS cutoffs trigger "sleep
   disorder indicated" and an HST recommendation?
3. **Pricing to patients:** does the CLAUDE.md §8 pricing (Sleep Baseline
   $300, VAET ~$5,500) apply to *patients* the same as to DCs, or is there
   a different patient price sheet?
4. **HST vendor** for patients — still the open Sleep Doctor vs
   free-DC-testing vendor decision (CLAUDE.md §8).
5. **VAET at Tecopa logistics** — Steve McNeal property scheduling,
   availability, and what's included vs à la carte for a patient (vs a DC).
6. **Consent to track + publish** de-identified outcomes — a short patient
   consent/authorization form is needed before enrolling anyone in the
   2-year tracking.
