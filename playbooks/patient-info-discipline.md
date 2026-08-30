# Patient Info Discipline — How Robert Talks to Claude About Patients

**Status:** Standing protocol as of 5/28/26.
**Audience:** Robert, Ri, future SDI VA, and any session of Claude
Code in this repo.

---

## The rule, in one sentence

**No patient identifiers in chat with Claude or anywhere in this
repo. Ever.** Identifiers live in ChiroTouch (the EHR) or in a
HIPAA-compliant CRM. Period.

---

## The three layers

| Layer | Holds | Lives in | HIPAA-compliant? |
|---|---|---|---|
| **Identity** | Real names, phones, addresses, DOBs, MRNs, all 18 HIPAA identifiers | ChiroTouch (EHR) or HIPAA-compliant CRM | ✅ Yes |
| **Tagging** | "Follow up with [code]" tasks; assignee; due date | Same EHR/CRM | ✅ Yes |
| **Strategy** | Workflow design, sequencing, next-best-action, case-pattern discussion | Claude Code chat / this repo | ⚠️ Only safe with **codes**, never identifiers |

Claude is the **strategy layer.** EHR/CRM is the **identity + tagging
layer.** The two layers do not mix.

---

## The coding convention

Use sequential codes to refer to any patient or DC in chat:

| Prefix | Use for | Example |
|---|---|---|
| **P###** | Patients in Channel A (CA EDD SDI / Protect Your Income) | P001, P002, P003 |
| **U###** | Patients in CSA UAOSA Recovery Program (Channel B + CSA-doctor referrals) | U001, U002, U003 |
| **V###** | Patients in Channel B (Veterans / VA SCD-anchored) | V001, V002, V003 |
| **D###** | DCs in Robert's mentor tracks (CSA Certification or SDI-Telehealth Mentorship) | Manfredi = D001, Collins = D002, Lucas = D003 |

**The mapping lives ONLY in the EHR / CRM.** Ri and the new VA look it
up there. Claude never knows.

If the EHR/CRM uses different patient IDs (e.g., ChiroTouch's
auto-numbered MRN), Robert may want to map MRN → P-code in a key
that stays inside ChiroTouch.

---

## What's safe to say in chat

✅ Demographics in general ranges (*"a late-40s CA union trade
worker"*) — fine as long as it doesn't, combined with other detail,
identify a specific person in a small practice
✅ Clinical pattern detail (*"sleep apnea symptoms, witnessed
apnea, snoring 8/10"*) — fine
✅ Case-status updates (*"P042's HST results came back AHI 22"*) — fine
✅ Workflow questions (*"what's the next step for P042 after
ROF?"*) — fine
✅ Timing references (*"just spoke with them this morning"*) — fine

## What's NOT safe to say in chat

❌ Names (first, last, even just first)
❌ Phone numbers
❌ Email addresses
❌ Specific addresses or ZIP codes
❌ Date of birth or admit date
❌ MRN or insurance ID
❌ Employer name (in a small practice, an employer can re-identify)
❌ Photo descriptions, license plate, social media handle
❌ Any of the other 18 HIPAA identifiers

If in doubt: use the code, drop the detail.

---

## Example translation

### ❌ Don't

> "Just spoke with John Smith from Bakersfield, he's a 47-year-old
> union electrician with sleep apnea symptoms; tell Ri to call him
> at 661-555-1234."

### ✅ Do

> "Just spoke with a new Channel A intake — call him P042 in our
> chat. Profile: late-40s CA union trade worker, sleep apnea
> symptoms, ready to enroll. He's expecting Ri to call him this
> week to coordinate HST + initial consult. What's the next-step
> sequence?"

---

## The follow-up workflow

```
Chat:     "P042 needs a HST coordination call from Ri this week."
            ↓
Robert:   Opens ChiroTouch / CRM
            ↓
Robert:   Creates task on real patient record:
            Assignee: Ri
            Due: Friday
            Task: "Call P042 to coordinate HST shipment via Sleep
                   Doctor. Use Sleep Doctor workflow per Dr. Z's
                   affiliate setup."
            ↓
Ri:       Sees task in EHR/CRM (sees real name + phone in her view)
            ↓
Ri:       Calls the patient (real identifiers used in the call)
            ↓
Ri:       Marks task complete + notes outcome in EHR/CRM
            ↓
Robert:   In next chat session: "P042 status — HST shipped 6/3,
           awaiting return."
            ↓
Claude:   Continues tracking strategy in chat using the code
```

**The code is the bridge.** Chat tracks the strategy. EHR/CRM holds
the truth.

---

## Exceptions worth noting

### Peer DCs who are also patients

When a DC is both Robert's peer/friend AND his patient (Dr. Collins,
Dr. Wilkerson are examples), name + role in the chiropractic
community is often public knowledge (they have practices, public
identities). Robert may speak about them by name in some contexts
(introductions, business discussions, mentorship planning).

**The line:** their **business identity** can be named in chat.
Their **patient identity** — clinical details, treatment history,
HST results, diagnoses — cannot, without their written authorization.

When the conversation crosses from business (e.g., "Collins is
being groomed as 2nd mentee") into clinical (e.g., "Collins's HST
showed X"), revert to the code (D002, U002) to stay clean.

### When the patient is the doctor themselves (live-the-model-first)

Robert is his own patient for several CSA pathways (Sleep Doctor HST
in Nov 2025; planning his own VAET; planning his own VA SCD claim).
He can discuss his own clinical detail in chat — it's HIS
information, not someone else's PHI. Standard HIPAA disclosure rules
apply to OTHER people, not Robert speaking about Robert.

---

## What Ri and the new VA need to know

1. **The code list lives in the EHR/CRM.** When Robert says "P042"
   in a planning conversation, look it up in the system to find the
   real patient.
2. **Never paste the EHR/CRM lookup into chat, email, or the repo.**
   Once it leaves the HIPAA-compliant system, it's a breach.
3. **When Ri / VA writes back to Robert about a case** (text,
   email, internal note), use the code: *"P042 task complete; HST
   shipped 6/3."* Never *"Called John today; HST shipping Monday."*
4. **If Robert ever asks you about a patient by code in chat with
   Claude present**, treat that like any operational question. The
   code carries no PHI.

---

## What this is NOT

- This is **not** a substitute for written HIPAA authorizations when
  required (e.g., communicating with a referral source about a
  specific case — see `playbooks/sdi-referral-relationship-workflow.md`
  HIPAA section).
- This is **not** a guarantee of HIPAA compliance for Claude. Even
  with de-identification, the user (Robert) is responsible for
  judgment about what counts as PHI in his small practice.
- This is **not** something Robert's healthcare attorney has
  reviewed yet. Recommended: have an attorney bless this protocol
  + the HIPAA-safe communication release on the intake form (in
  one review).