# Repository Branch Audit — 30 August 2026

**Read-only survey. Nothing was merged, modified, or deleted.**

Full report (formatted): https://claude.ai/code/artifact/8950ec59-9ff3-4090-a877-4ad000adc320

---

## Headline findings

1. **68 branches; 67 are unmerged.** `main` has received nothing since 1 June 2026.
2. **The project memory forked on 21 May 2026** at commit `b897255`, and never healed.
   - **Line A** got the next commit, `c20c669` *"Capture mentor ecosystem and patient-facing
     offer architecture"*, and grew to a 20-section `CLAUDE.md`.
   - **Line B** never received it. 65 of the 67 work branches descend from Line B.
3. **32 distinct versions of `CLAUDE.md` exist** across the 68 branches.
4. **Only 2 branches carry the full memory** (`main` and `claude/happy-cray-4uxlM`).
   The other 66 are missing five whole sections:
   - §16 Mentor Ecosystem (~200 lines)
   - §17 Patient-Facing Offer Architecture / ecosystem spine (~115 lines)
   - §18 Upcoming Commitments (~220 lines)
   - §19 Operator Profile — Robert, background & biography (~500 lines)
   - §20 Mentor & Education Investment Tracking (~95 lines)
5. **`main` has zero commits of its own** — it is fully contained in `claude/happy-cray-4uxlM`.
   Replacing `main` with that branch loses nothing and recovers §16–20 immediately.
6. **309 distinct files** exist across the branches; `main` holds 26.

## Three trunks (none contains another)

| Trunk | CLAUDE.md | Files | Commits | Last | Note |
|---|---|---|---|---|---|
| `claude/happy-cray-4uxlM` | 2,125 lines (§1–20) | 42 | 106 | 12 Jun | Only complete memory; contains all of `main` |
| `claude/sleep-disorder-patient-funnel-cyu76i` | 936 lines | 114 | 165 | 18 Jul | Largest content body; 115 files unique to it |
| recent cluster (23 branches) | ~523 lines (§1–15) | — | — | 30 Aug | All August work; thinnest memory |

## Recommended sequence (not yet done)

1. Rebuild one true `CLAUDE.md` from all 32 versions — stops the drift.
2. Retire `main` by fast-forwarding it to `happy-cray` (zero loss).
3. Review and land `sleep-disorder-patient-funnel` — the largest recovery.
4. Fold in remaining branches by area; delete the 3 redundant ones.
5. Land the CSA/VAET Modulation Framework last, onto repaired memory.

**Redundant branches (zero own commits, safe to delete):**
`main`, `claude/may-2026-goals-GJDLg`, `claude/screen-guidance-8tycsx`

---

## Full inventory — 67 work branches, newest first

"own commits" excludes shared ancestry, so it reflects true unique contribution.

| Last touched | Branch | Own commits | Unique files | What only this branch holds |
|---|---|---:|---:|---|
| 2026-08-30 | `csa-vaet-modulation-framework-71mnra` ⚠️edited-partial-memory | 1 | 1 | `content/csa-vaet-modulation-framework.md` |
| 2026-08-30 | `google-robertzeravica-migration-v40naj` ⚠️edited-partial-memory | 1 | 4 | `migration/google-to-robertzeravica.md`, `outreach/2026-05-21-sleepdoctor-david-amato.md`, `site/doctors.html`, `site/index.html` |
| 2026-08-29 | `liberpulco-connections-372m80` ⚠️edited-partial-memory | 2 | 1 | `outreach/connections-post-liberpulco.md` |
| 2026-08-29 | `acnb-acfn-fee-schedules-gro23c` | 1 | 1 | `outreach/2026-08-29-acnb-acfn-carrick-fee-schedules.md` |
| 2026-08-26 | `csa-gems-water-tension-k9tfhb` | 1 | 3 | `content/csa-gems-pull-quotes.md`, `content/sing-hum-pray-faith-version.md`, `content/surface-tension-and-airway-geometry.md` |
| 2026-08-25 | `claude-md-docs-2rs1c6` ⚠️edited-partial-memory | 1 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-08-23 | `patient-notes-summary-ul2ld8` ⚠️edited-partial-memory | 2 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-08-23 | `sleep-apnea-video-request-fjvsgb` | 2 | 7 | `.gitignore`, `content/patient/Sleep-and-Airway-Care-Patient-Overview.pdf`, `content/patient/logo_small.jpg`, `content/patient/make_onepager_pdf.py`, `content/patient/sleep-apnea-services-overview.md` +2 more |
| 2026-08-22 | `google-integrations-reconnect-0ubam8` ⚠️edited-partial-memory | 6 | 2 | `outreach/2026-08-martin-rosen-csa-collaboration.md`, `outreach/csa-website-inbound-leads.md` |
| 2026-08-22 | `vaet-patient-evaluation-xrjvh8` ⚠️edited-partial-memory | 1 | 4 | `clinical/README.md`, `clinical/build-form.py`, `clinical/vaet-initial-evaluation.html`, `clinical/vaet-initial-evaluation.md` |
| 2026-08-21 | `event-organization-prioritization-rc78c3` ⚠️edited-partial-memory | 12 | 5 | `content/research/water-csf-and-neuronal-migration.md`, `outreach/2026-08-19-mauro-zappaterra.md`, `outreach/2026-08-21-mauro-zappaterra.md`, `schedule/ITINERARY_2026_AUG-OCT.md`, `strategy/csa-evidence-plan.md` |
| 2026-08-21 | `cortisol-circadian-hpa-6fje9v` ⚠️edited-partial-memory | 3 | 2 | `content/cortisol-circadian-rhythm-and-the-hpa-axis.md`, `policy/supplement-dispensary-policy.md` |
| 2026-08-21 | `adhd-anger-rejection-om2iot` | 1 | 1 | `content/clinical-brief-adhd-emotional-dysregulation-and-the-airway.md` |
| 2026-08-21 | `myofascial-release-tmj-jupttg` | 1 | 1 | `content/reference-myofascial-release-and-tmj.md` |
| 2026-08-19 | `water-csf-neuronal-migration-j2iwra` ⚠️edited-partial-memory | 5 | 2 | `content/research/water-csf-and-neuronal-migration.md`, `outreach/2026-08-19-mauro-zappaterra.md` |
| 2026-08-19 | `personal-planning-decisions-wifs1p` | 1 | 1 | `planning/2026-08-19-apatin-triage.md` |
| 2026-08-19 | `serbian-passport-ecitizenship-ar04hp` | 1 | 1 | `outreach/2026-08-19-anarchapulco-attendee-triad-consult.md` |
| 2026-08-19 | `truck-refinance-toyota-mrghq7` | 1 | 1 | `personal/truck-refinance-2026.md` |
| 2026-08-18 | `liberpulco-trip-recap-xfdccb` ⚠️edited-partial-memory | 9 | 3 | `outreach/inbound-vaet-inquiry-template.md`, `partnership/2027-02-anarchapulco-sponsorship-decision.md`, `trips/2026-08-liberpulco-recap.md` |
| 2026-08-18 | `liberland-alignment-talk-eg79qv` ⚠️edited-partial-memory | 8 | 7 | `talks/2026-liberland-alignment-talk.md`, `talks/2026-liberland-image-prompts.md`, `talks/2026-liberland-top-10-alignment.md`, `talks/assets/airway-night.png`, `talks/assets/deck-build.js` +2 more |
| 2026-08-18 | `icak-triad-of-health-87ylla` ⚠️edited-partial-memory | 5 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-08-18 | `csa-sleep-airway-entity-y0fdm1` ⚠️edited-partial-memory | 1 | 1 | `CSA_STRUCTURE.md` |
| 2026-08-15 | `liberpulco-auction-donation-8z46b5` | 2 | 1 | `outreach/2026-08-15-liberpulco-auction-donation.md` |
| 2026-08-10 | `reminders-to-attend-x7u0jk` | 1 | 1 | `EVENTS_TO_ATTEND.md` |
| 2026-08-09 | `robertzeravica-website-update-dynsz5` | 6 | 11 | `site/about.html`, `site/assets/dr-z-wide.jpg`, `site/assets/dr-z.jpg`, `site/assets/site.css`, `site/clickfunnels-embed.html` +6 more |
| 2026-08-07 | `manage-cell-messages-krpib9` | 2 | 1 | `operations/patient-message-management.md` |
| 2026-08-07 | `ca-chiropractic-legal-review-tx335g` ⚠️edited-partial-memory | 1 | 2 | `legal/2026-08-07-outreach-compliance-counsel.md`, `legal/CSA-legal-compliance-scope-of-work.md` |
| 2026-08-07 | `fix-sleep-for-life-xcgrva` | 1 | 1 | `SESSION_NOTES_2026-08-07.md` |
| 2026-08-05 | `edd-sdi-patient-faq-jz9xe0` | 12 | 9 | `content/edd-sdi/compliance-documentation-standard.md`, `content/edd-sdi/edd-sdi-handout.html`, `content/edd-sdi/financial-hardship-form.md`, `content/edd-sdi/lead-gen-script-v2.md`, `content/edd-sdi/lead-magnet-strategy.md` +4 more |
| 2026-08-04 | `liberpulco-speech-title-hbv358` | 4 | 3 | `content/liberpulco-2026-speech-30min.md`, `content/manifesto-reconciliation-note.md`, `content/structural-airway-manifesto.md` |
| 2026-08-02 | `training-notes-money-bitcoin-kxazwy` | 2 | 1 | `training/2026-08-02-eleanor-wilson-money-bitcoin.md` |
| 2026-07-30 | `liberpulco-2026-info-uykzxm` | 1 | 1 | `LIBERPULCO_2026_INFO.md` |
| 2026-07-29 | `ca-edd-sdi-service-access-3uu1mf` | 3 | 6 | `content/patient-resources/README.md`, `content/patient-resources/assets/ca-sdi-resource.template.html`, `content/patient-resources/assets/csa-mark.png`, `content/patient-resources/assets/drz-headshot.png`, `content/patient-resources/ca-sdi-patient-resource.html` +1 more |
| 2026-07-28 | `liberpulco-workshop-el3jdi` | 1 | 1 | `content/liberpulco-2026-workshop.md` |
| 2026-07-27 | `youthful-johnson-0mi4zl` | 12 | 1 | `BIOLOGICAL_BLOCKCHAIN_ACADEMY.md` |
| 2026-07-27 | `investment-strategy-180k-ghtpqd` | 9 | 6 | `va-loan/README.md`, `va-loan/bookkeeper-request.md`, `va-loan/cpa-status-reply.md`, `va-loan/daily-steps.md`, `va-loan/letter-of-explanation.md` +1 more |
| 2026-07-27 | `sleep-landing-page-dcs-o5f72e` | 2 | 2 | `site/index.html`, `site/patients.html` |
| 2026-07-27 | `bitcoin-storage-security-9r2o59` | 1 | 1 | `bitcoin-storage-security-notes.md` |
| 2026-07-27 | `blockchain-bitcoin-csa-resource-kxvhms` | 1 | 1 | `content/blockchain-bitcoin.md` |
| 2026-07-27 | `clickfunnels-account-login-cyd383` ⚠️edited-partial-memory | 1 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-27 | `csa-community-involvement-3is45g` | 1 | 1 | `community/legislative-zoom.md` |
| 2026-07-27 | `may-2026-goals-GJDLg` | 0 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-27 | `screen-guidance-8tycsx` | 0 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-26 | `clickfunnels-bill-reminder-5t3kp3` ⚠️edited-partial-memory | 2 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-26 | `serbia-travel-packing-yrqgea` | 2 | 1 | `travel/2026-08-10-serbia-packing-checklist.md` |
| 2026-07-26 | `teeth-regrowing-chiropractic-sleep-pq9d8v` ⚠️edited-partial-memory | 1 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-26 | `toe-extension-injury-pain-lvivi8` | 1 | 1 | `content/prevention-thesis-early-to-mid-phase.md` |
| 2026-07-24 | `csa-message-interpretation-rlox5e` | 1 | 3 | `content/assets/goodheart-hyperinsulinism-p12.jpg`, `content/assets/goodheart-hyperinsulinism-p14.jpg`, `content/heritage-goodheart-hyperinsulinism-1968.md` |
| 2026-07-24 | `floating-man-2026-festival-6n41eb` ⚠️edited-partial-memory | 1 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-23 | `simpletalk-twilio-setup-04jj6u` | 4 | 2 | `operations/simpletalk-call-handling-protocol.md`, `operations/simpletalk-twilio-setup.md` |
| 2026-07-23 | `venmo-cashback-tracking-1xwv5l` | 2 | 1 | `finance/cashback-tracking.md` |
| 2026-07-23 | `sleep-apnea-pathways-iircbn` ⚠️edited-partial-memory | 1 | 3 | `AUGUST_2026_GOALS.md`, `JULY_2026_GOALS.md`, `reference/tpa-insurance-primer.md` |
| 2026-07-22 | `white-oak-avenue-reflections-pxr4j9` ⚠️edited-partial-memory | 10 | 7 | `content/scripts/README.md`, `content/scripts/csa-consultation.md`, `content/scripts/csa-flowcharts.md`, `content/scripts/csa-report-of-findings.md`, `content/scripts/csa-structural-airway-exam.md` +2 more |
| 2026-07-22 | `chirosecure-folder-unlryr` ⚠️edited-partial-memory | 2 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-07-22 | `session-simon-severino-fgjqkq` | 2 | 2 | `operations/peter-clinic-operations-plan.md`, `outreach/alignment-call-script.md` |
| 2026-07-18 | `sleep-disorder-patient-funnel-cyu76i` ⚠️edited-partial-memory | 154 | 111 | `PROJECT_MASTER_SUMMARY.md`, `content/CSA-asset-index.md`, `content/analogy-bitcoin-original-protocol.md`, `content/assets/CSA-Dental-Sleep-Workbook.html`, `content/assets/CSA-Dental-Sleep-Workbook.pdf` +106 more |
| 2026-07-15 | `rob-peter-csa-agreement-lr88yc` ⚠️edited-partial-memory | 36 | 34 | `CHIROSLEEPPRO_CSA_MASTER_SUMMARY.md`, `CLICKFUNNELS_COACHING_MASTER_SUMMARY.md`, `COMMAND_CENTER_MASTER_SUMMARY.md`, `CRACKING_THE_CODE_MASTER_SUMMARY.md`, `CSA_MASTER_SUMMARY.md` +29 more |
| 2026-07-09 | `sleep-airway-intervention-phases-hxrcvd` ⚠️edited-partial-memory | 14 | 12 | `TASKS.md`, `content/ca-dc-scope-302.md`, `content/dentist-liaison-one-pager.md`, `content/founder-origin-story.md`, `content/intervention-phases-model.md` +7 more |
| 2026-06-28 | `csa-top-10-verses-o6eiij` | 2 | 1 | `CSA_TOP_10_VERSES.md` |
| 2026-06-26 | `primary-secondary-motion-csf-93ejvt` ⚠️edited-partial-memory | 2 | 0 | _(nothing of its own — contained in another branch)_ |
| 2026-06-24 | `blissful-meitner-nze1zt` | 2 | 1 | `notes/2026-06-24-eleanor-bitcoin-call.md` |
| 2026-06-24 | `travel-video-planning-bf66z2` | 2 | 1 | `TRAVEL_VIDEO_PLAN.md` |
| 2026-06-20 | `task-prioritization-focus-f2ciax` | 1 | 5 | `outreach/patient-sleep-screening/README.md`, `outreach/patient-sleep-screening/email-template.md`, `outreach/patient-sleep-screening/phone-script.md`, `outreach/patient-sleep-screening/sms-template.md`, `outreach/patient-sleep-screening/tracker-template.csv` |
| 2026-06-19 | `lindsay-white-ceo-scaling-jh4w9z` | 14 | 1 | `networking/2026-06-19-lindsay-white-ceo-scaling.md` |
| 2026-06-18 | `reminders-event-integration-vovlpz` | 4 | 3 | `REMINDERS.md`, `outreach/2026-06-18-patient-sdi-email-campaign.md`, `outreach/patient-sdi-campaign-tracker.md` |
| 2026-06-16 | `keen-faraday-74sl63` ⚠️edited-partial-memory | 5 | 9 | `outreach/2026-06-16-cbp-deed-harrison.md`, `outreach/2026-06-16-disc-centers-of-america.md`, `outreach/2026-06-16-james-nestor.md`, `outreach/2026-06-16-referral-partners-attorneys-urgentcare.md`, `outreach/2026-06-16-sot-sotousa.md` +4 more |
| 2026-06-12 | `happy-cray-4uxlM` ✅full-memory | 17 | 17 | `business/peter-director-of-operations.md`, `business/peter-mentorship-trial-memo.md`, `business/portfolio-matrix.md`, `clinical/cpt-icd10-quick-reference-ca-dc.md`, `content/README.md` +12 more |

