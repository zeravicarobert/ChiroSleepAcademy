# /clinical — CSA clinical forms and protocols

Chairside documents used in the CSA / VAET patient pathway. These are working
clinical forms, not marketing assets.

| File | What it is |
|---|---|
| `vaet-initial-evaluation.md` | **Master source.** New-patient initial evaluation & examination form. Edit this one. |
| `vaet-initial-evaluation.html` | Print-ready version, generated from the markdown. ~23 pages on US Letter. |
| `build-form.py` | Regenerates the HTML from the markdown. |

## Regenerating the printable form

```bash
pip install markdown        # once
python3 clinical/build-form.py
```

Then open `vaet-initial-evaluation.html` in a browser and print (or "Save as
PDF") at US Letter with **background graphics enabled** — the section headers
and shaded table rows won't print otherwise.

**Never hand-edit the HTML.** It is overwritten on every build.

## What the initial evaluation covers

- **Section 0** — consent, including the separate clinical-photography consent
- **A** — sleep & airway history, prior workup, developmental history, medical
- **B** — Epworth, STOP-BANG, BOLT, SnoreLab, the CSA 10-question screen
- **C** — vitals, BMI, neck circumference
- **D** — intraoral exam: Mallampati, Friedman, tonsil grade, tongue, occlusion, nasal airway
- **E** — **the seven jaw-and-posture signs**, each with a test, a recorded
  value, and the honest structural reasoning to say out loud
- **F** — cranial/facial screen and full standing postural analysis
- **G** — **the 13-photo protocol** (1 intraoral + 4 face + 4 neck + 4 standing)
- **H** — objective testing pathway: HST and CBCT
- **I** — assessment, VAET candidacy, contraindication screen, referrals
- **J** — plan, home instructions, re-measure date
- **K** — examiner attestation
- **Appendix** — chairside quick card tracking every metric across re-exams

## Two rules this form exists to enforce

1. **Scope.** The chiropractor does not diagnose sleep apnea. A physician reads
   the sleep study. The scope statement is on page 1 and the patient initials it.
2. **Measurement.** Every one of the seven signs produces a number, not an
   impression. Millimeters of opening, degrees of craniovertebral angle,
   seconds of breath hold, 0–10 palpation scores. Numbers are what make the
   re-exam mean anything.

## Photo protocol, in one line

Same background, same camera height, same marked floor distance, same stance,
every visit — or the before/after comparison is worthless. Naming convention:

```
LASTNAME_FIRSTINITIAL_YYYY-MM-DD_V#_CODE.jpg
```

Photos are PHI. Clinic device only, into the secure record the same day, off
the camera roll the same day. Marketing use needs its own separate consent.
