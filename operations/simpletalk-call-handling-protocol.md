# SimpleTalk Call-Handling Protocol — CA EDD SDI New-Patient Calls

**Status:** IN PROGRESS — Rob is dictating the algorithm. Skeleton only.
**Owner:** Robert (ZeravicaRobert@gmail.com)
**Last updated:** 2026-07-23

> **What this file is:** The protocol SimpleTalk (AI phone answering) follows
> when it answers Rob's inbound new-patient calls. SimpleTalk must identify
> the caller type and handle each per Rob's algorithm below. This is being
> captured as Rob dictates it — sections marked TBD are not yet defined.

---

## 1. Purpose

SimpleTalk answers **all inbound new-patient phone calls** and routes each
caller by type, following Rob's protocol. All patient types below are
**California EDD SDI (State Disability Insurance)** patients.

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
