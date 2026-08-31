# Measurement & HST Vendors — Evaluation

**Status:** Working evaluation. Written 2026-08-30.
**Two separate decisions:** (1) which HST vendor becomes CSA's default, and
(2) whether PNOĒ becomes a collaboration and a third measurement axis.
**Owner:** Robert. Nothing here is committed.

---

# Part 1 — HST vendor: Sleep Doctor vs Belun

## The problem in one line

Section 8 targets a **$50 vendor cost ceiling** per test. Sleep Doctor's
cash-pay rate is **$189**. That gap is what has kept Step 2 economics
unresolved since May.

## Sleep Doctor — the incumbent

| | |
|---|---|
| Device | WatchPAT |
| Method | peripheral arterial tone; respiratory events are **inferred** |
| Read | board-certified MD, 2–3 business days |
| Cash-pay | $189 |
| Insurance | in-network Aetna, BCBS, Cigna, UHC; Medicare |
| Portal | live since 6/22 |
| Partnership cost | free to the practice |

**Standing assets:** Robert has been through the workflow himself as a patient
(Nov 2025). Portal access is live. There is a **verbal special-partnership
offer from the owner**, unclaimed — see
`outreach/2026-08-30-sleepdoctor-david-amato.md`.

**The open question is margin, not access.** If the owner's offer materially
lowers the per-test cost, Sleep Doctor stays the default and this evaluation
closes.

## Belun Technology — the challenger

| | |
|---|---|
| Devices | Belun Sleep System, Belun COR |
| Form factor | ring |
| Method | **directly measured** respiratory effort and body position |
| Cost | **unknown — must be obtained** |
| Read pathway | unknown |
| Partner terms | unknown |

**Why it is worth a call.** The measurement difference is real, not marketing.
WatchPAT infers respiratory events from peripheral arterial tone. Belun states
it measures respiratory effort *directly*, plus body position.

For CSA specifically, **body position matters more than it does for a general
sleep practice.** A structural model that claims to change the mechanical
environment of the airway needs to know whether a change in AHI came from the
intervention or from the patient sleeping on their side more often. Without
position data, positional OSA is an uncontrolled variable sitting inside every
before-and-after comparison in the outcomes registry.

That is an argument about **data quality for the evidence plan**, and it may
matter more than the per-test price.

## What has to be found out

- [ ] Belun per-test cost to the practice, and cash-pay to the patient
- [ ] Who reads it, and turnaround
- [ ] Whether de-identified outcomes can be exported in bulk
- [ ] Insurance posture
- [ ] Whether the ring form factor changes patient compliance either way

## Recommendation

**Do not switch on price alone.** Get the owner's offer from Sleep Doctor in
writing first — it may close the margin gap and it costs one email that is
already drafted. Run Belun in parallel as a real evaluation, weighted on
**data quality for the outcomes registry**, not just cost.

Also still unevaluated and named in section 8: **SleepImage**, and the
self-supplied Alice PDx path with Will Spriggs reading.

---

# Part 2 — PNOĒ (Robert's item, 2026-08-30)

## What it is

Breath analysis. The device reads **23 biomarkers from breath** in under ten
minutes, with no blood draw and no lab: VO₂ max, resting metabolic rate, fat
versus carbohydrate burn, and aerobic-system function. It is sold to clinics —
longevity, pulmonary rehab, weight-loss, sports performance — and PNOĒ
explicitly builds **clinic partnerships**, including referral relationships
with physical therapists, nutritionists, and physicians.

Notably for CSA: their own material describes flagging **abnormalities in
breathing patterns**, and referring those clients on for clinical evaluation.

## Why this is strategically interesting

CSA's whole thesis is breathing, and CSA currently measures it in exactly two
ways, both of which have gaps:

| | What it measures | Limitation |
|---|---|---|
| **HST** | what happens at night | expensive, episodic, one night |
| **CBCT** | the anatomy | a static snapshot; expensive; radiation |
| **PNOĒ** | **how the person breathes awake** | says nothing about sleep |

The third row is the interesting one. **A ten-minute, repeatable, in-office
breathing measurement is a different class of data from a home sleep test.**
It could be run at intake, before and after a Tecopa intensive, and at
follow-up visits — where an HST realistically cannot.

That is directly relevant to the weakest part of CSA's position: the outcomes
registry has almost nothing *between* the baseline HST and the follow-up HST.

It also sits alongside the **Eccovision Pharyngometer** inquiry already open
with Sleep Group Solutions (section 6) — same motivation, different
measurement. The pharyngometer measures airway *geometry*; PNOĒ measures
ventilatory *function*.

## The collaboration angle

PNOĒ partners with clinics and actively builds referral networks. A Doctor of
Chiropractic bringing a structural airway model is a plausible fit for them,
for two reasons:

1. Their device **flags breathing dysfunction they do not treat.** CSA treats
   structure. That is a referral relationship with a natural direction.
2. Their existing partners — longevity clinics, performance facilities — are
   the same rooms Robert already reaches through the Anarchapulco and
   sovereign-health circuit.

## Guardrails — read before any outreach or any patient-facing use

- **PNOĒ does not measure sleep.** It is not an HST substitute and must never
  be presented as one. Section 5 applies: physicians diagnose sleep apnea from
  a sleep study.
- **Awake breathing efficiency has not been shown to predict sleep-disordered
  breathing outcomes.** If CSA starts running PNOĒ before and after VAET, that
  data is *exploratory*. Per the Modulation Framework, the language is "may
  modulate" and "is being evaluated as a structural factor in" — never
  "improved your VO₂ max, therefore your airway improved."
- **Do not let it become a metabolic or nutrition upsell.** The device outputs
  fat-burn and metabolic-rate numbers, which lead naturally to supplement and
  diet recommendations. Section 23 limits products to a narrow practitioner
  dispensary for existing patients, never in a funnel, never in the Report of
  Findings. A metabolic report is a very easy way to violate that by accident.
- **Cost and partner terms are unknown.** `pnoe.com` is blocked from this
  environment, so nothing here reflects their actual pricing, contract, or
  provider requirements.

## Next steps

- [ ] Get PNOĒ pricing, partner terms, and provider requirements — Robert or a
      session with access, since the site is blocked here
- [ ] Ask specifically what **breathing-pattern** metrics it reports, beyond
      the metabolic panel. That is the part that matters to CSA; the VO₂ and
      fat-burn numbers are not why this is interesting.
- [ ] Decide whether it is a **CSA measurement tool**, a **referral partner**,
      or both. Those are different conversations and different contracts.
- [ ] If it becomes a measurement tool, it enters the outcomes registry design
      before it enters a patient visit — not after.

---

## Notes for Robert

- **Sequence matters.** The Sleep Doctor email is already drafted and asks the
  owner to honor his own offer. Send that before spending on a Belun
  evaluation; the answer may make the whole comparison moot.
- **PNOĒ is not on the September critical path.** September is six replies,
  the Anarchapulco decision, Rosen, the lead bucket, and the book. This is a
  strong lane and it will still be there in October.
- **The best argument for PNOĒ is the outcomes gap, not the technology.** If
  you raise it with them, raise it that way — you are trying to measure
  something between sleep tests, and they built the only ten-minute breathing
  measurement that a clinic can actually repeat.
