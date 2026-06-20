# Patient Sleep Screening Campaign — Monetizing the 877

**Owner:** Dr. Robert Zeravica
**Goal:** Reactivate the existing patient database with a free sleep & airway
screening, route positive screens into the CSA clinical pathway (HST → CBCT →
care), and track every outreach effort across email, SMS, and phone.
**Created:** 2026-06-20

---

## Why this works

877 patients treated for **musculoskeletal pain** and **mental health / stress**
overlap heavily with undiagnosed sleep and airway problems. Offering them a
**free sleep screening** is:

- **Clinically real** — broken sleep worsens pain, mood, and recovery.
- **Ethical** — you are a treating doctor offering your own patients a relevant
  health service, not cold-marketing a list.
- **Profitable** — free screening is the on-ramp to the CSA paid pathway:
  - Free screening (Epworth / STOP-BANG / CSA questions)
  - → **CSA Sleep Baseline (HST) — $300**
  - → **CSA Airway Baseline (CBCT) — $500**
  - → structural airway care

This campaign monetizes the database **and** produces the real patient cases
CSA needs (May Goal 1).

---

## Segments (run warmest first)

| Tier | Who | Count | First touch |
|---|---|---|---|
| A — Active | Recently recertified | 164 | Email + SMS, **then personal call** |
| A — Active | Existing, new claim | 19 | Email + SMS, **then personal call** |
| A — Active | New patients | 37 | Email + SMS |
| B — Rest of database | Everyone else | ~657 | Email + SMS, in waves |

**Start with Tier A (~220).** Prove the funnel, then roll to Tier B.

---

## Sequence

1. **Wave 1 — Tier A email + SMS** (same day). Mail-merge `{FirstName}`.
2. **Personal calls** to the 164 recertified + 19 new-claim (warmest, highest
   conversion). Use `phone-script.md`. Log every attempt.
3. **Follow-up** to non-responders after 5–7 days (one nudge, then stop).
4. **Roll to Tier B** in waves of ~100 once Tier A is working.
5. **Book positive screens** into HST. Track dollars collected.

---

## Compliance guardrails (read before sending)

> Not legal advice — confirm with your own counsel. These are sensible defaults.

- **Stay general.** Never reference a patient's specific claim, diagnosis, or
  disability in a mass message. "As one of my patients" is fine.
- **Opt-out on every message.** Email = unsubscribe link. SMS = "Reply STOP."
- **Texting at scale:** use a HIPAA-appropriate platform (EHR messaging or a
  texting tool with a BAA) — not your personal phone for 220+ sends.
- **The tracker holds PHI.** Keep it in your access-controlled Google Workspace
  (like the CSA Relationship Strategies sheet), **never in this repo.** This
  folder contains templates only — no patient data.
- **You treat in California** — HIPAA + California CMIA both apply.

---

## Rough revenue illustration (Tier A only — not a promise)

220 contacted → ~30% engage screening (66) → ~40% screen positive + do HST (26)
→ **~$7,900 in HST**, plus downstream CBCT and care. Conservative; scales when
Tier B rolls in.

---

## Peter's task list

- [ ] Build the tracker in Google Sheets from `tracker-template.csv` (Workspace,
      restricted access)
- [ ] Load Tier A (220) into the sheet: name, email, cell, segment
- [ ] Set up the mail-merge / texting tool (confirm opt-out + BAA)
- [ ] Send Wave 1 email + SMS to Tier A
- [ ] Build the call list (164 + 19) for Dr. Z
- [ ] Log every call, reply, and screening result in the tracker
- [ ] Schedule the 5–7 day follow-up nudge

## Dr. Z's task list (only what needs you)

- [ ] Approve the email / SMS / call wording
- [ ] Make the personal calls to the warm tier
- [ ] Review screening results, decide who gets offered an HST
