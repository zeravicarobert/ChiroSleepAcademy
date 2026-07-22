# Clinic Operations Plan — Peter (Dr. Z Practice / CA EDD SDI)

**Business:** Dr. Zeravica's chiropractic practice (the clinical/EDD-SDI side —
**separate from CSA**; see CLAUDE.md §15: "No SDI income for Peter" — this doc is
about Peter *operating* the clinic admin, not sharing SDI revenue).
**Ops lead:** Peter
**Clinical owner / final approver:** Dr. Z (Robert)
**Core systems:** ChiroTouch (EHR + practice management), SimpleTalk (patient
communication / call automation)
**Status:** DRAFT v1 — items marked `CONFIRM` need Robert's input before Peter runs them
**Last updated:** 2026-07-22

---

## 0. How to use this document

This is Peter's operating document. It has four workstreams (A–D), each broken
into tasks with an owner, a status, and a "done when" definition. Peter updates
**Status** weekly. Anything marked `CONFIRM` is a question for Robert, collected
in §7 so they can be cleared in one pass.

**Status key:** `TODO` · `IN PROGRESS` · `BLOCKED` · `DONE`
**Owner key:** `P` = Peter · `Z` = Dr. Z (clinical/sign-off) · `P→Z` = Peter preps, Z approves

---

## 1. Objective & scope

**One-line objective:** Get the clinic's patient-communication and 3rd-party-forms
admin running as a reliable system Peter owns — so Robert stays in the clinical seat,
not the paperwork seat.

**In scope:**
- Patient communication automations across the full lifecycle (SimpleTalk + ChiroTouch)
- New-patient call → booking → intake flow
- Existing-patient recall, reminders, reactivation, rebooking
- 3rd-party forms fulfillment (CA EDD SDI certification, workers' comp, FMLA/CFRA, etc.)
- The handoffs between SimpleTalk, ChiroTouch, and any other tools

**Out of scope (for this doc):**
- CSA pathway work (separate business, separate doc)
- Clinical treatment decisions (always Dr. Z)
- Billing/coding strategy beyond form-completion fees `CONFIRM if billing belongs here`

---

## 2. System / tool inventory

| System | Role in the clinic | Peter's access level | Notes |
|---|---|---|---|
| **ChiroTouch** | EHR, scheduling, SOAP notes, patient records, billing | `CONFIRM` | System of record for clinical data used to complete forms |
| **SimpleTalk** | Patient texting, call handling, reminders, campaigns | `CONFIRM` | Front door for patient comms; check ChiroTouch integration status |
| **Phone system / VoIP** | Inbound new-patient & existing-patient calls | `CONFIRM` | Does SimpleTalk handle the line, or is it separate? |
| **SDI Online (CA EDD)** | Submit practitioner disability certifications (DE 2501 Part B) | `CONFIRM` | Is the practice registered as a licensed health professional on SDI Online? |
| **Fax / secure portal** | Delivery channel for workers' comp, attorney, FMLA forms | `CONFIRM` | Many 3rd parties still require fax; confirm secure channel |
| **Other** | `CONFIRM — any e-fax, scheduling, or intake-form tools?` | | |

> **First task for Peter:** complete every `CONFIRM` in this table. Nothing else
> runs cleanly until we know the real stack and Peter's access.

---

## 3. Workstream A — New Patient call → booked & prepped

**Goal:** No new-patient inquiry is ever lost; every caller is captured, booked,
confirmed, and arrives with intake done.

| # | Task | Owner | Status | Done when |
|---|---|---|---|---|
| A1 | Map the current new-patient call path (who answers, what's said, where it's logged) | P | TODO | A written call flow exists |
| A2 | Stand up **missed-call text-back** in SimpleTalk (auto-text within 1 min of any missed call) | P | TODO | Test call → text arrives automatically |
| A3 | Write the new-patient phone script (greeting, qualify, book, set expectations) | P→Z | TODO | Script approved by Z, on the desk |
| A4 | Booking → auto **confirmation text/email** with date, address, what to bring | P | TODO | New booking triggers confirmation |
| A5 | Send **digital intake forms** before first visit (via SimpleTalk/ChiroTouch) | P | TODO | Patient can complete intake before arrival |
| A6 | **Reminder sequence** (e.g. 48h + 2h before) with easy reschedule | P | TODO | Reminders fire automatically |
| A7 | No-show / cancel → auto follow-up to rebook | P | TODO | No-show triggers rebooking outreach |
| A8 | Weekly report: calls in → booked → showed (conversion) | P | TODO | Number reviewed every week |

`CONFIRM: what does Robert want said in the new-patient greeting, and what qualifies a caller as a fit?`

---

## 4. Workstream B — Existing Patient lifecycle

**Goal:** Existing patients stay on plan, get reminded, get reactivated when they
lapse, and are asked for reviews at the right moment.

| # | Task | Owner | Status | Done when |
|---|---|---|---|---|
| B1 | Appointment **reminder automation** for existing patients | P | TODO | Reminders fire on schedule |
| B2 | **Rebooking** prompt when a patient leaves without the next appointment set | P | TODO | Gap in schedule triggers outreach |
| B3 | **Recall / reactivation** campaign for lapsed patients (e.g. 30/60/90-day inactive) | P→Z | TODO | Lapsed list auto-generated + message approved |
| B4 | Treatment-plan adherence nudges (missed visits in an active plan) | P | TODO | Missed plan visit triggers follow-up |
| B5 | **Review request** automation after a good visit/milestone | P | TODO | Review ask sent automatically |
| B6 | Birthday / check-in touches `CONFIRM if wanted` | P | TODO | — |
| B7 | Balance / billing follow-up messaging `CONFIRM if Peter handles billing comms` | P→Z | TODO | — |
| B8 | Weekly report: reactivations, rebook rate, reviews collected | P | TODO | Numbers reviewed weekly |

`CONFIRM: what's the inactivity window that defines a "lapsed" patient for reactivation?`

---

## 5. Workstream C — 3rd-Party Forms Fulfillment (the EDD SDI machine)

**Goal:** Every form a patient needs filled for a 3rd party is intake-logged,
completed accurately from ChiroTouch records, signed by Dr. Z, delivered on time,
and tracked — with nothing falling through the cracks.

### 5.1 The forms matrix

| Form / request | Requested by | Who fills clinical part | Z sign-off | Delivery channel | Target turnaround |
|---|---|---|---|---|---|
| **CA EDD SDI — DE 2501 Part B** (physician/practitioner certification) | Patient / EDD | P preps from SOAP → Z certifies | **Z required** | SDI Online (preferred) or mail | `CONFIRM` (EDD wants prompt) |
| **CA EDD — DE 2525XX** (continued/additional certification) | EDD | P preps → Z | Z required | SDI Online | `CONFIRM` |
| **Workers' comp** (DWC forms / PR reports) | Employer / carrier / attorney | P preps → Z | Z required | Fax / secure portal | `CONFIRM` |
| **FMLA / CFRA** (WH-380 medical certification) | Employer / patient | P preps → Z | Z required | Fax / patient | `CONFIRM` |
| **Disability parking placard** (DMV REG 195) | Patient | P preps → Z | Z required | Patient | `CONFIRM` |
| **Attorney records / lien / narrative** | Patient's attorney | P gathers records → Z narrative if needed | Z if clinical opinion | Secure / mail | `CONFIRM` |
| **Return-to-work / work-status note** | Employer / patient | P drafts → Z | Z required | Patient | `CONFIRM` |
| **Other** | `CONFIRM — school, insurance, gym, etc.?` | | | | |

> `CONFIRM: which of these does the practice actually see? Add/remove rows so this
> matches reality. The EDD SDI DE 2501 Part B is the anchor — confirm the practice's
> exact current process for it today.`

### 5.2 The forms workflow (every form follows this path)

| # | Step | Owner | Status | Done when |
|---|---|---|---|---|
| C1 | **Intake:** log every form request in one tracker (patient, form, requester, date in, due date) | P | TODO | A single forms log exists + is used |
| C2 | **Triage:** confirm patient is/was a patient, records exist, correct form version | P | TODO | Request validated before work starts |
| C3 | **Gather:** pull needed clinical data from ChiroTouch (dx, dates, restrictions) | P | TODO | Draft packet ready for Z |
| C4 | **Complete:** fill admin + clinical fields, flag anything only Z can answer | P→Z | TODO | Form is complete except signature |
| C5 | **Sign-off:** Dr. Z reviews clinical accuracy + signs/certifies | Z | TODO | Z has approved |
| C6 | **Deliver:** send via correct channel (SDI Online / fax / patient) + confirm receipt | P | TODO | Delivery logged w/ confirmation |
| C7 | **Track:** update forms log; follow up on anything pending past turnaround | P | TODO | No request sits past its due date silently |
| C8 | **Fee:** apply form-completion fee where applicable `CONFIRM policy` | P→Z | TODO | Fee policy defined + applied |

`CONFIRM: is Dr. Z registered on CA EDD SDI Online for electronic practitioner
certification? That's the single biggest speed lever for the SDI forms.`

### 5.3 The forms tracker (Peter's live log — columns)

> Peter maintains this as a running list (spreadsheet or ChiroTouch task list — `CONFIRM where`):
> **Date In · Patient · Form Type · Requested By · Data Gathered? · Z Signed? · Delivered? (date/channel) · Confirmation · Fee · Notes**

---

## 6. Workstream D — Integration & handoffs

**Goal:** The systems talk to each other so Peter isn't double-entering, and nothing
lives only in someone's head.

| # | Task | Owner | Status | Done when |
|---|---|---|---|---|
| D1 | Confirm SimpleTalk ↔ ChiroTouch integration (what syncs: appts, contacts, status) | P | TODO | Integration mapped + verified |
| D2 | Define single source of truth for each data type (schedule, patient contact, forms status) | P→Z | TODO | Written + agreed |
| D3 | Document each automation ("if X then Y") so it's maintainable, not magic | P | TODO | Automation runbook exists |
| D4 | Standard operating procedures (SOPs) for A, B, C written up so a temp could run them | P | TODO | SOPs in a shared location |
| D5 | HIPAA/privacy check on any patient data moving between tools | P→Z | TODO | Confirmed compliant channels only |

---

## 7. Open questions for Robert (clear these first)

1. **Access:** What are Peter's login/access levels in ChiroTouch and SimpleTalk today?
2. **Phone line:** Does SimpleTalk handle the actual phone line, or is there a separate VoIP/answering setup?
3. **SDI Online:** Is Dr. Z registered as a licensed health professional on CA EDD SDI Online for electronic DE 2501 Part B certification? If not, that's task #1.
4. **Forms reality check:** Which forms in §5.1 does the practice actually handle? Anything missing?
5. **Current SDI process:** Walk through exactly how a DE 2501 Part B gets done *today*, start to finish.
6. **Lapsed window:** What inactivity period defines a patient to reactivate (30/60/90 days)?
7. **Billing scope:** Does Peter touch billing/balance comms and form-completion fees, or stay out of money entirely?
8. **Forms tracker home:** Spreadsheet, ChiroTouch task list, or something else?
9. **Where does this doc live** long-term — this repo, Google Drive, or shared with Peter directly?

---

## 8. Weekly cadence

Every week, Peter reviews and reports three numbers to Robert:
- **New patients:** calls in → booked → showed
- **Existing patients:** reactivations + rebook rate + reviews collected
- **Forms:** requests in → completed & delivered → any past due

30-minute Peter↔Robert sync to clear `BLOCKED` items and anything needing Z sign-off.

---

## 9. First two weeks (Peter's priority order)

1. Clear the §2 and §7 `CONFIRM` items (access + reality of the stack).
2. Stand up the **forms tracker** (C1) and log every open request — stop the leaks first.
3. Confirm/register **SDI Online** so DE 2501 Part B stops being slow.
4. Turn on **missed-call text-back** (A2) — cheapest, highest-ROI automation.
5. Turn on **appointment reminders** for existing patients (B1).

Everything else builds from there.
