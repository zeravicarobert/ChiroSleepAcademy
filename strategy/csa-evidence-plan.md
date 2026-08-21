# CSA Evidence Plan — Getting Outcome Data That Survives Review

**Created:** 2026-08-21
**Trigger:** Robert, on the observation that oral appliance therapy has RCTs and
meta-analyses for AHI reduction while chiropractic has nothing comparable:
*"I and CSA need this."*

He's right, and this is the correct instinct. This file is how it actually gets
built.

---

## 1. The Insight That Makes This Feasible

CSA doesn't need to bolt a research program onto the business. **The business
already is one.**

Step 2 of the productized pathway (`CLAUDE.md` §8) is a Home Sleep Test on
every patient. Step 3 is a CBCT. That means every CSA patient generates an
objective airway baseline *as a normal part of paid clinical care*.

> The outcome data is a **byproduct of the pathway**, not an added cost.
> The only thing standing between CSA and a publishable case series is
> **a second HST** and **a protocol written down in advance.**

That is a genuinely rare position. Most practitioners who want outcome data
have to invent a reason to measure. CSA already charges for the measurement.

**But it only works if the protocol is fixed before the data is collected.**
Retrospective chart-mining of inconsistently-collected data is what makes
chiropractic outcome papers easy to dismiss. Decide the rules first.

---

## 2. The Ladder — Four Rungs, In Order

Don't skip rungs. Each one is publishable, each one funds credibility for the
next, and the early ones are cheap.

### Rung 1 — N-of-1 case report (Robert himself)
**Feasible now. Cost: one more HST.**

Robert already ran a Sleep Doctor HST in Nov 2025 (§8). He has a documented
baseline as a patient. A structured intervention with a documented pre/post is
a legitimate case report.

- Venues: *JMPT*, *Journal of Chiropractic Medicine*, *JCCA*, *Cureus*
- Strengthens the "Heal the Healer First" story enormously — Robert is Patient
  Zero of his own model, with data
- Weakest possible evidence, and that is fine. It's a rung.
- **Self-experimentation must be disclosed as such.** Do not obscure that the
  author is the subject.

### Rung 2 — Retrospective case series (5–20 patients)
**Feasible within ~6–12 months of pathway volume.**

Consecutive CSA patients with pre and post HST. The crucial word is
**consecutive** — see §4.

### Rung 3 — Prospective single-arm cohort
**The first thing sleep medicine will take semi-seriously.**

Protocol written and registered before enrollment. Defined inclusion/exclusion,
standardized intervention, defined primary endpoint, independent scoring, IRB.

### Rung 4 — RCT
Years out. Needs funding, a control arm, sample size justification, and an
academic partner. **Not a near-term goal, and saying otherwise is the kind of
overclaim §5 forbids.** Name it as the destination, not the plan.

---

## 3. Pick the Right Endpoint — CBCT May Beat AHI First

Two candidate primary endpoints. They are not equally tractable.

### AHI (from HST)
- **Pro:** it's the metric sleep medicine actually cares about. Nothing else
  gets you taken seriously in that room.
- **Con — and this is the whole problem: AHI has substantial night-to-night
  variability.** The same untreated person tested on two different nights can
  land in different severity categories. Body position, alcohol, nasal
  congestion, sleep stage distribution, and recording quality all move it.
- **Consequence:** a single pre-night versus a single post-night can produce a
  large "improvement" that is pure noise. This is the single most likely reason
  a reviewer — or Zappaterra — dismisses a CSA result.
- **Mitigation:** multi-night testing at both ends. Multiple nights at baseline
  and multiple nights post, averaged. This costs more per patient and must be
  priced into Step 2 from the start.

### CBCT airway volume / minimum cross-sectional area
- **Pro:** far less biologically variable than AHI. It's an anatomical
  measurement, not a physiological event count on one night. Pre/post is
  cleaner, and CSA already sells the CBCT as Step 3.
- **Pro:** it directly measures the structure Robert claims to move — including
  the maxilla and nasal floor.
- **Con:** it is a **surrogate** endpoint. Airway volume change is not the same
  as symptom or AHI change, and a sleep physician will say so, correctly.
- **Con:** it has its own standardization traps — head position, natural head
  posture, breathing phase during the scan, tongue position, swallowing.
  These must be protocolized or the pre/post comparison is meaningless.

### Recommendation
**Run both, and be explicit about which is which.** CBCT volume as the
mechanistic endpoint (does the structure move?), AHI as the clinical endpoint
(does it matter?). Reporting a structural change honestly labeled as a
surrogate is credible. Reporting a structural change *as if* it were a clinical
outcome is exactly the overclaim that ends the Zappaterra relationship.

Add a validated symptom instrument alongside — Epworth and STOP-BANG are
already in the CSA Phase 1 workup (§7), so use them as secondary endpoints. So
is SnoreLab tracking.

---

## 4. The Seven Things That Will Get a CSA Paper Rejected

Design against these now, not after.

1. **Cherry-picked cases.** Report **consecutive** patients meeting criteria —
   including non-responders and dropouts. A case series of only successes is
   worthless and everyone knows it. This is the single highest-credibility
   decision available, and it costs nothing but discipline.
2. **Single-night AHI at each end.** See §3. Budget for multi-night.
3. **Robert scoring his own results.** The vendor's blinded reading physician
   scores the studies. Dr. Z's role stays what §8 already says it is —
   coordinate, interpret to the patient, integrate. Never score.
4. **Device or vendor switching mid-series.** Pre and post must use the same
   device and the same scoring pipeline. **This makes the open HST vendor
   decision a research decision, not just a margin decision.**
5. **Unstandardized intervention.** "VAET" must mean a written protocol —
   contacts, dose, sequence, frequency, number of sessions. If two patients got
   materially different care, they aren't a series.
6. **Untracked confounders.** Weight change, alcohol, new CPAP or appliance
   use, positional therapy, nasal steroids, allergy season, new medications.
   Collect these every visit or the result is unpublishable.
7. **No consent, no IRB.** Publishing identifiable or even de-identified
   patient data requires consent. Prospective research requires IRB review.
   Retrospective case series are often exempt — *often* is not *always*, and
   that determination is not Robert's to make unilaterally.

---

## 5. What to Lock Down Immediately

These are decisions that get more expensive the longer they wait, because every
patient seen under the old rules is a patient excluded from the series.

| Decision | Why it's urgent | Status |
|---|---|---|
| **HST vendor — one, permanently** | Pre/post must match. Switching vendors mid-stream orphans every patient tested before the switch. | **Open** (§8) — now a research constraint, not just margin |
| **De-identified data export rights** | Without export, there is no dataset. §8 already flags this with Sleep Doctor; it is now a **prerequisite, not a nice-to-have.** | Open — in the David Amato email |
| **Multi-night vs. single-night at baseline** | Determines Step 2's cost and price. Decide before quoting patients. | Not yet raised |
| **Written VAET protocol** | Without it there is no reproducible intervention. | Not written |
| **Consent language in intake** | Every patient seen without it is excluded from any future series. **This is the cheapest and most time-sensitive item on the list.** | Not written |
| **CBCT acquisition standardization** | Head position and breathing phase, written down. | Not written |
| **IRB pathway** | Ask before enrolling, not after. | Not started |

> **The single highest-leverage action this month:** add research consent
> language to the CSA intake form. It costs one paragraph and one attorney
> review, and without it, every patient Robert sees between now and whenever he
> gets around to it is permanently unusable.

---

## 6. Where Zappaterra Fits — and the Better Second Ask

This changes the Zappaterra ask, and improves it.

The first conversation stays what it is: one honest mechanism question
(`outreach/2026-08-21-mauro-zappaterra.md` §5). Don't touch it.

But the **second** conversation now has a much better ask than "will you
advise CSA." It becomes:

> *"I'm going to be collecting pre/post HST and CBCT data on these patients as
> a normal part of the pathway. I'd rather design it so it's worth something
> than discover in two years that it isn't. What would you want to see in a
> protocol before you'd believe a result from it?"*

That is a question an MD/PhD with a research career genuinely enjoys answering,
it costs him nothing to answer, and it commits him to nothing. It also does
something subtle and valuable: it **pre-registers Robert's intellectual honesty
with the exact person most likely to catch him overclaiming later.**

If that conversation goes well, the natural escalations are, in order: review
the protocol, then co-author, then help find an academic home.

---

## 7. The Honest Framing, For Now

Until Rung 2 exists, the accurate public statement is:

> Chiropractic does not currently have outcome data comparable to oral
> appliance therapy for AHI reduction. CSA is building the pathway to generate
> it. Right now, the structural work is a hypothesis being tested, not an
> established treatment for sleep apnea.

That sentence is a **feature**, not a weakness. Every DC who says otherwise is
overclaiming, and the sleep physicians and dentists CSA wants to work with know
it. Being the one who says it out loud is the differentiator — the same
differentiator that makes the Zappaterra approach work.

Per `CLAUDE.md` §5, nothing here changes: no cure claims, no implication that
CSA diagnoses OSA, no attacks on CPAP or oral appliances. The evidence plan
exists to make CSA's claims *smaller and firmer*, not bigger.

---

## 8. Open Questions for Robert

- Multi-night baseline: does Step 2's $300/$397 price survive paying for 2–3
  nights instead of 1? If not, does the research series use a different,
  higher-priced tier?
- Is there an existing written VAET protocol anywhere, or does one need to be
  authored from scratch?
- Does Robert want an academic partner (a chiropractic college with an IRB and
  a research office) or an independent IRB?
- Who owns authorship and data if the Rob–Peter partnership
  (`partnership/rob-peter-csa-agreement.md`) advances? Worth adding to the
  attorney's question list before it becomes contested.
