# PROJECT MASTER SUMMARY — SIMPLETALK

> **Provenance note (added on import):** This summary was produced in a ChatGPT
> project and imported into the CSA repo on 2026-07-11. It is an **operational /
> tech-spine** doc about **SimpleTalk**, Robert's inbound AI call/text agent —
> the communications and routing layer under the SDI + CSA operation. It
> overlaps the operational spine noted in `TOP4_MASTER_SUMMARY.md`
> (ChiroCat→ChiroTouch, SimpleTalk, EDD database) and the Simple Talk triage
> rules in `RZ_MASTER_SUMMARY.md`, but is the deepest single SimpleTalk
> reference. Genuinely new/sharper here: SimpleTalk as the **AI front door /
> routing nervous system** for the whole ecosystem; the concrete config surface
> (**Settings → Select CRM**, **Update Twilio Credentials**, **Campaign
> Notifications Webhook**, **Text Errors Webhook**, **Provider Keys**) with
> **integration priority Twilio → CRM → Text Agent**; the strict **launch order**
> (delegate comms → build revenue back-end → confirm fulfillment → *then*
> launch funnels) and the rule **"never outrun fulfillment capacity"**; the
> **3-way caller classification** (SDI new / SDI renewal / CSA-airway); the
> **Chiropractic 1.0/2.0/3.0** definitions framed operationally (3.0 =
> telehealth, table-free, office-free, cash digital DC — "3.0 funds the art");
> new staff/contacts **Nicole & Chellie** (Mike Barron ecosystem, alongside Ri);
> Ri's expanded role (SimpleTalk + ChiroTouch + website + funnels); the
> **"Reply WELLNESS"** post-visit follow-up; the brand cluster **Protect My
> Income / Protect Your Income / Union Wellness Partner / Dr. Z Worker
> Protection Series / W2 Exodus**; the **DE 2501** disability form; and a
> monthly metrics list. Restates the **$400 + $525 + ~$1,000 = $1,925** SDI
> lifetime-value stack (historical/unverified) and Closer Academy referral in
> Month 2–3. Reaffirms keep SDI organic; Boilermakers Local 154 as the first
> union channel; Tecopa VAET as Year 2. No patient PHI. Preserved verbatim; do
> not edit its substance without Robert's direction. Not legal, financial, or
> clinical advice.

## Purpose

Build **SimpleTalk**, Dr. Robert Zeravica’s inbound AI call/text agent, into the communication and routing center for his ecosystem: **CA EDD SDI**, **Chiropractic Sleep Academy (CSA)**, ClickFunnels, ChiroCat/ChiroTouch, telehealth, education, coaching, and Mike Barron/Closer Academy referrals.

## Core Problem

SimpleTalk was programmed but not reliably accepting/sending patient emails or texts. First tedium to remove from Dr. Z: **answering calls and texts**.

## Required Launch Order

1. Delegate communication tedium.
2. Build revenue back-end.
3. Confirm fulfillment path.
4. Launch ClickFunnels.

Do **not** launch funnels before operations, routing, fulfillment, and revenue handling work.

## First Caller Classification

SimpleTalk must identify:

1. **CA EDD SDI—new patient**
2. **CA EDD SDI—renewal/existing patient**
3. **CSA/sleep-airway interest**

### New SDI Patient

Send to Dr. Z’s EHR to sign in and complete intake covering:

* Main complaint
* Time off work
* SDI certification needs

### Existing/Renewal SDI Patient

Route through the established renewal/existing-patient workflow before escalating to Dr. Z.

### CSA/Sleep-Airway

Route to the relevant CSA education, screening, consultation, or treatment pathway.

## Ecosystem Architecture

SimpleTalk must eventually work cohesively with:

* ClickFunnels website/funnels
* ChiroCat → ChiroTouch transition
* EHR intake
* Twilio
* CRM
* Text Agent
* Phone agent
* Webhooks/errors
* Provider keys
* Appointment reminders
* Intake-completion prompts
* Post-visit follow-up, including “Reply WELLNESS”

SimpleTalk has no separate “Integrations” menu; configuration is mainly under:

* **Settings → Select CRM**
* **Update Twilio Credentials**
* **Campaign Notifications Webhook**
* **Text Errors Webhook**
* **Provider Keys**

Initial integration priority:

1. Twilio
2. CRM
3. Text Agent

## People/Roles

### Dr. Robert Zeravica (“Dr. Z”)

Owner, clinician, educator, strategist, content/IP source; should progressively stop handling routine calls/texts.

### Ri

Long-term VA, expected to remain until retirement. Continues owning CA EDD SDI tasks while expanding into:

* Mike Barron training integration
* ClickFunnels/website control
* SimpleTalk feeding, development, deployment, troubleshooting, maintenance
* ChiroCat-to-ChiroTouch transition
* Coordinating ChiroTouch, SimpleTalk, website, and funnels

### Nicole & Chellie

Mike Barron ecosystem contacts integrated alongside Ri.

### Mike Barron / Closer Academy

Back-end referral partner for suitable disability/coaching patients seeking career/income transition.

## Business Model

Primary Year-1 offer: **Protect Your Income—California Worker Disability Certification**, remotely delivered without clinical space.

### Revenue Stack

1. Medical certificate: **$400**
2. Coaching: average **$525**
3. Closer Academy referral commission: approximately **$1,000**

Estimated patient lifetime value: **$1,925** when all tiers convert.

Closer Academy should generally appear during **Month 2–3 of coaching**, not immediately. Referral triggers, ideal profile, compliance, and handoff protocol remain to be formalized.

## Market

Primary audience:

* California W-2 workers
* Union trade workers
* Injured workers
* CA SDI claimants
* People needing DE 2501/disability certification
* Workers considering a “W2 Exodus”

Key language/brands:

* **Protect My Income**
* **Protect Your Income**
* **Union Wellness Partner**
* **Dr. Z Worker Protection Series**
* **W2 Exodus**
* **Closer Academy**

## Distribution

Priority channel: **California unions**, beginning with **Boilermakers Local 154**, where a relationship already exists; formalize through an agreement/MOU.

Other channels:

* Additional unions
* Existing-patient referrals
* Facebook groups/ads
* Attorneys
* Physical therapists
* Orthopedic referrals
* YouTube
* Podcasts

Build offer clarity and distribution first; track channel performance and choose future lead sources from actual results.

## Company Identity

Company heart: **Education & Training Services**.

Mission:

* Help California workers obtain proper disability evaluation/certification and recover income stability.
* Coach appropriate patients toward new skills/opportunities.
* Train chiropractors through CSA.
* Develop telehealth, digital, office-free chiropractic models.

## Chiropractic Evolution

* **Chiropractic 1.0:** licensed Diversified DC
* **Chiropractic 2.0:** clinical mastery through AK, SOT, CBP, cranial/airway biomechanics
* **Chiropractic 3.0:** telehealth, table-free, office-free, cash-based digital chiropractor

Core idea: **3.0 creates the income and freedom to develop the clinical art beyond 1.0 into 2.0.**

CSA positioning: re-teach chiropractic **through sleep, from the skull down**.

## Future Expansion

Year 1:

* Remote disability-certification/coaching/referral system
* Delegated communications
* Reliable back-end
* SimpleTalk/EHR/CRM/funnel integration

Year 2:

* Death Valley/Tecopa **V.A.E.T.** treatment/retreat concept

Do not burden Year 1 with physical retreat/clinical-space development.

## Metrics

Track monthly:

* Leads by source
* Calls/texts handled
* Intake completion
* Appointments
* SDI conversions
* Coaching conversions
* Closer Academy referrals
* Revenue per patient
* Automation failures
* Escalations to Dr. Z

## Legal/Operational Constraints

Before scaling:

* Confirm California chiropractic scope-of-practice compliance with healthcare counsel.
* Confirm legality of referral incentives/commissions.
* Formalize union relationship/MOU.
* Define Closer Academy qualification, timing, disclosure, and referral procedure.
* Establish clear human-escalation rules.
* Ensure SimpleTalk never outruns actual fulfillment capacity.

## Central Strategy

**SimpleTalk is not merely a receptionist.** It is intended to become the AI front door and routing nervous system connecting Dr. Z’s disability-certification business, coaching, CSA, telehealth education, EHR, funnels, staff, and referral back-end—while removing repetitive work from Dr. Z without launching marketing faster than the operation can fulfill it.
