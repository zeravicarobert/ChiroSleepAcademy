# SimpleTalk + Twilio Setup — CA EDD SDI Patient Messaging

**Status:** In progress. Peter K is completing the technical setup.
**Owner:** Robert (ZeravicaRobert@gmail.com)
**Operator:** Peter K
**Last updated:** 2026-07-23

> **What this file is:** The running record of the SimpleTalk + Twilio
> setup so it stays captured across sessions. Peter K has Rob's login
> credentials for both tools and is finishing the configuration to get
> them operational. Update this file as steps complete and open items
> resolve.

---

## 1. Goal

Get **SimpleTalk** connected to **Twilio** so it can **text or email new
and existing California EDD SDI (State Disability Insurance) patients**.

This supports Rob's existing SDI disability business (the revenue-generating
lane described in `partnership/rob-peter-csa-agreement.md` §1).

---

## 2. What Each Tool Does (working understanding)

- **Twilio** — the underlying messaging carrier. Provides the phone
  number(s) and the SMS/voice API that actually sends texts. Requires an
  A2P 10DLC brand + campaign registration before business SMS will send
  reliably in the US (see §5).
- **SimpleTalk** — the front-end/automation layer that sends the texts and
  emails to patients, using Twilio as the sending channel underneath.

> If any of this is wrong once Peter is in the accounts, correct it here.

---

## 3. Who Owns What

| Item | Owner |
|---|---|
| SimpleTalk login (username + password) | Rob — **shared with Peter K** |
| Twilio login (username + password) | Rob — **shared with Peter K** |
| Finishing the connection / configuration | Peter K |
| Patient list (new + existing SDI patients) | Rob |
| Message content / approval | Rob (see §4, §5) |

---

## 4. Setup Checklist (for Peter K)

Technical connection:
- [ ] Confirm access to both SimpleTalk and Twilio accounts with the
      shared credentials.
- [ ] Verify the Twilio phone number(s) that will send messages.
- [ ] Connect SimpleTalk to Twilio (API keys / auth token wired in).
- [ ] Send a test text to Rob's phone and a test email to Rob.
- [ ] Confirm delivery both directions (send + patient reply, if replies
      are enabled).

Compliance prerequisites (do **before** messaging patients — see §5):
- [ ] Complete Twilio A2P 10DLC brand + campaign registration.
- [ ] Confirm every patient list has documented consent to be texted/emailed.
- [ ] Add opt-out handling (STOP for SMS, unsubscribe for email).
- [ ] Get Rob's sign-off on the exact message copy before any send.

Go-live:
- [ ] Small test batch first, confirm deliverability and opt-out works.
- [ ] Then roll out to the full new + existing patient lists.

---

## 5. Compliance Guardrails (do not skip)

Texting and emailing patients is regulated. Before any real send:

- **Consent (TCPA).** Business/marketing texts to patients need prior
  express consent. Only message patients who have agreed to be contacted
  this way. Keep a record of that consent.
- **Opt-out.** Every text must honor STOP; every email must have a working
  unsubscribe. This is legally required and protects deliverability.
- **A2P 10DLC.** US business SMS through Twilio must be sent from a
  registered brand + campaign, or messages get filtered/blocked by carriers.
  Register before the full rollout, not after.
- **Patient privacy (HIPAA).** These are patients. Keep message content
  minimal — appointment/administrative reminders, not diagnoses or health
  details in plaintext SMS. Avoid putting protected health information in a
  text. If SimpleTalk/Twilio will handle any PHI, a Business Associate
  Agreement (BAA) with the vendor(s) may be required — confirm before go-live.
- **Content.** Rob approves the exact copy before any send (see §4).

---

## 6. Security Note

Peter K now holds Rob's **usernames and passwords** for both SimpleTalk and
Twilio. Twilio in particular can incur real spend and send messages under
Rob's identity, so treat these as sensitive:

- Prefer per-user logins or scoped API keys over sharing Rob's master
  password, if either tool supports it.
- Enable two-factor authentication on both accounts.
- Set a Twilio spending limit / usage alert so a misconfiguration can't run
  up a large bill.
- Once setup is stable, consider rotating the shared passwords and moving
  Peter to his own credentials.

---

## 7. Open Items

- [ ] Confirm the exact division of labor: does SimpleTalk handle both SMS
      and email, or email through a separate provider?
- [ ] Which Twilio number(s) / area code represents the practice?
- [ ] Is patient consent already on file for the existing SDI list, or does
      it need to be collected?
- [ ] Who drafts the first message templates (Rob, Peter, or Claude)?
- [ ] BAA needed with Twilio and/or SimpleTalk? (See §5.)

When any of these resolve, update this file.
