# SimpleTalk Call-Handling Protocol — CA EDD SDI New-Patient Calls

**Status:** IN PROGRESS — Rob is dictating the algorithm. Skeleton only.
**Owner:** Robert (ZeravicaRobert@gmail.com)
**Last updated:** 2026-07-23

> **What this file is:** The protocol SimpleTalk (AI phone answering) follows
> when it answers Rob's inbound new-patient calls. SimpleTalk must identify
> the caller type and handle each per Rob's algorithm below. This is being
> captured as Rob dictates it — sections marked TBD are not yet defined.

---

**Phone number SimpleTalk answers:** 818-276-5054

## 1. Purpose

SimpleTalk answers **every inbound phone call**, identifies which type of
caller it is, and handles each one per Rob's protocol. This is not limited
to new patients — it also includes existing patients and **third-party
entities** (see §2). The patient types are **California EDD SDI (State
Disability Insurance)** patients; third parties are everyone else who calls.

---

## 2. Caller Types

### Type 1A — Referred new patient (warm)
- A **new patient referred by an existing patient**.
- Both the referring existing patient and the new caller are California
  EDD SDI patients.
- Handling: **TBD** (Rob to dictate).

### Type 1B — Online / self-found new patient (cold)
- A **new patient who found Rob online** — Google, social media, or any
  internet source, typically on their smartphone.
- Also a California EDD SDI patient.
- Handling: **TBD** (Rob to dictate).

### Existing patients who call in / become new patients
- SimpleTalk also handles calls from existing patients (including when they
  transition into a new-patient interaction).
- Definition + handling: **TBD** (Rob to dictate).

### Third-party entities (non-patient callers)
Everyone calling who is not a patient. Two buckets:

1. **Partnership inbound** — power partners, and people reaching out wanting
   Rob to partner with them.
   - Handling: **TBD** (Rob to dictate).

2. **Insurance / medical records requests** — third-party entities (e.g.
   insurance companies) asking for medical records.
   - **FIRM RULE:** whatever Twilio or SimpleTalk divulges to a medical
     records request is **always** the phrase: **"by mail only."** Nothing
     else is disclosed on the call.

---

## 3. The Algorithm / Protocol

**TBD** — Rob is dictating. For each caller type, capture:
- How SimpleTalk identifies the type (what it asks / how it knows).
- What it says / the script.
- What it does next (book, screen, collect info, route, hand off).

---

## 4. Open Items

- [ ] Finish defining Type 1A handling.
- [ ] Finish defining Type 1B handling.
- [ ] Define existing-patient / becomes-new-patient branch.
- [ ] Any additional caller types beyond 1A / 1B.
- [ ] How SimpleTalk distinguishes referral (1A) vs. online (1B) on the call.
- [ ] Where the call ends: booked appointment, callback, text follow-up, etc.
- [ ] Finish the third-party entity list and each one's handling (power
      partners, partnership inbound, insurance/records requests, others).
- [ ] How SimpleTalk verifies identity before releasing any medical records
      info to an insurance/records caller (privacy — do not disclose PHI to
      unverified callers).
