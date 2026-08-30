# Email Migration Runbook — Gmail → RobertZeravica.com

**Status:** Plan approved, not yet executed
**Created:** 2026-08-30
**Owner:** Robert
**Goal:** Move Robert's professional identity off a free `@gmail.com`
address and onto `DrZeravica@RobertZeravica.com`, without losing mail,
breaking vendor relationships, or damaging deliverability before the
CSA outreach push.

---

## 1. Decisions Made (2026-08-30)

| Question | Decision |
|---|---|
| Where does the mailbox live? | **Google Workspace** on `RobertZeravica.com` |
| Which accounts migrate? | **Business only** — `DrZeravicaOffice@gmail.com` → `DrZeravica@RobertZeravica.com` |
| CSA-branded mail on `ChiropracticSleepAcademy.net`? | **Deferred** — revisit once the funnel is live |

**What "migrate from Google" means here.** Robert is migrating off the
free consumer `@gmail.com` *identity*, not off Google's software. The
Gmail, Drive, and Calendar interfaces stay. This is the cheapest path
with the least breakage, and it keeps the Claude Gmail/Drive/Calendar
connectors working — they just get reconnected to the new account.

If Robert later wants a genuine exit from Google (Fastmail, Proton,
Zoho, Microsoft 365), doing Workspace first does **not** trap him: a
custom domain is portable. That is the whole point of owning the
domain. Moving `@gmail.com` → another host later would be a second full
migration; moving `@RobertZeravica.com` → another host is a DNS change.

---

## 2. Current State

### Verified in this session

- **`zeravicarobert@gmail.com`** is Robert's personal inbox and is the
  account currently connected to Claude's Gmail tools. Everything below
  about this account is directly observed.
- **`DrZeravicaOffice@gmail.com`** sends as *"Dr Robert Zeravica, DC"*
  and signs:
  > Robert Zeravica, DC
  > Doctor of Chiropractic
  > RobertZeravica.com
  > (818) 276-5054
- The personal account signs with a fuller block that already points at
  the office address and the domain:
  > Dr Robert Zeravica DC
  > 7 Mayfair Place, Northridge, CA 91324
  > (818) 276-5054
  > DrZeravicaOffice@gmail.com
  > https://www.RobertZeravica.com
- **`RobertZeravica.com` is already the public-facing brand.** It is in
  both signatures and on the CSA site drafts. This migration makes the
  email match the domain Robert is already advertising.
- **ClickFunnels workspace:** `zeravicachiropracticedd.myclickfunnels.com`
- **Google One 2 TB / AI Plus** is on the *personal* account, billed
  through Google Play, renewing 2027-07-18. Business-only scope means
  this is untouched.
- **Gmail storage hit 0% in May 2026.** Whatever account is full needs
  headroom checked before any mail import — a migration into a full
  mailbox fails partway and is miserable to diagnose.

### Not verified — Robert must confirm

These could not be checked from this environment and are pre-flight
blockers:

1. **Who is the registrar for `RobertZeravica.com`, and where is DNS
   managed?** No registrar mail appears in the connected personal
   inbox, so the registrar account is almost certainly tied to
   `DrZeravicaOffice@gmail.com` or `robertzeravica91324@gmail.com`.
   The network proxy in this environment blocks DNS lookups and blocks
   `robertzeravica.com`, so current MX records could not be read.
2. **Does the domain already have mail service?** Some registrars bundle
   a mailbox. If MX records already point somewhere, that has to be
   resolved before pointing them at Google.
3. **What is currently registered to `DrZeravicaOffice@gmail.com`?**
   Claude's Gmail connector is on the *personal* account, so the office
   inbox cannot be enumerated from here. Section 6 gives the exact
   searches to run from inside that account.

---

## 3. Target State

| Address | Role after migration |
|---|---|
| `DrZeravica@RobertZeravica.com` | **Primary professional identity.** Patients, DCs, vendors, CSA outreach. |
| `DrZeravicaOffice@gmail.com` | Kept alive, forwarding to the new address. Never deleted (see §8). |
| `zeravicarobert@gmail.com` | Unchanged. Personal. |
| `robertzeravica91324@gmail.com` | Unchanged. Calendar lives here. |

**Aliases worth adding at setup** (free on Workspace, no extra seat):
`Robert@`, `DrZ@`, `Office@`, and `Info@`. Aliases cost nothing and stop
mail from bouncing when someone guesses the address. Set them all to
deliver into the one mailbox.

---

## 4. Phase 1 — Stand Up Workspace

**Prerequisite:** registrar login recovered (§2, item 1).

1. Sign up for **Google Workspace Business Starter** (~$8.40/user/mo)
   at `workspace.google.com`. Use the domain `RobertZeravica.com`.
   - Create the admin user as `DrZeravica@RobertZeravica.com`. The
     admin account and the daily-driver mailbox can be the same for a
     one-person practice.
   - **Do not** sign up using an existing `@gmail.com` address as the
     account identity — it creates a confusing hybrid.
2. **Verify domain ownership.** Google gives a TXT record. Add it at
   the registrar. Verification is usually minutes.
3. **Add DNS records.** All at the registrar's DNS panel:

   | Type | Host | Value | Priority |
   |---|---|---|---|
   | MX | `@` | `smtp.google.com` | 1 |
   | TXT | `@` | `v=spf1 include:_spf.google.com ~all` | — |
   | TXT | `google._domainkey` | *(DKIM key from Admin console)* | — |
   | TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:DrZeravica@RobertZeravica.com` | — |

   - Google now uses a **single MX record** (`smtp.google.com`). Older
     guides list five records; either works, one is cleaner.
   - **Delete any pre-existing MX records** pointing at a registrar
     mailbox, or mail will split unpredictably between two systems.
   - **DKIM must be generated in the Admin console first**
     (Apps → Google Workspace → Gmail → Authenticate email), then
     published, then switched on. It is off by default and it is the
     single most-skipped step in this whole process.
   - Start DMARC at `p=none`. It reports without rejecting. Tighten to
     `p=quarantine` only after a few weeks of clean reports.

4. **Wait for propagation.** Usually under an hour, up to 48.
5. **Test both directions before trusting it:** send from the new
   address to the personal Gmail, and reply back. Then run the address
   through `mail-tester.com` and fix anything below 9/10.

---

## 5. Phase 2 — Bring the Old Mail Over

Do this *after* Phase 1 tests pass.

1. **Check storage first.** Business Starter is 30 GB per user. If the
   office Gmail is anywhere near that, the import will stall. Purge
   large attachments on the source account before starting.
2. Use the Workspace Admin console's **Data Migration** service
   (Account → Data migration), source type Gmail. It pulls mail,
   optionally with labels, over IMAP.
   - Requires an **app password** on the source Gmail account, which
     requires 2-Step Verification enabled there.
3. **Contacts and Calendar:** export from the office account
   (Contacts → Export → Google CSV; Calendar → Settings → Export) and
   import into the new account. The Data Migration service handles mail
   well and calendar less well; a manual export/import is more
   predictable.
4. **Do not delete anything from the source account after import.**
   Verify a sample of old threads landed correctly first — search for
   the oldest Sleep Doctor thread (11/12/25, David Amato) and confirm
   attachments came through.

---

## 6. Phase 3 — The Safety Net (do this before changing any logins)

This is the phase that prevents a bad week. Set up **before** touching
a single vendor account.

1. **Forward the old office Gmail to the new address.**
   Gmail → Settings → Forwarding → add `DrZeravica@RobertZeravica.com`,
   confirm, then choose *keep Gmail's copy in the Inbox*. Keeping the
   copy means a forwarding failure is not a lost email.
2. **Add "send as" in the new mailbox.** In the new Workspace account:
   Settings → Accounts → Send mail as → add
   `DrZeravicaOffice@gmail.com`. Now Robert can *reply from the old
   address* out of the new inbox. Any thread already in flight with a
   vendor continues to look normal to them.
3. **Set the new address as the default sender.** New mail goes out
   with the domain identity; old threads can still be answered from the
   old identity when that's less confusing.
4. **Leave both running in parallel for at least 90 days.** There is no
   cost to this and it catches every account nobody remembered.

---

## 7. Phase 4 — Change the Identity on Services

Robert must run these searches **from inside `DrZeravicaOffice@gmail.com`**
(Claude cannot see that inbox from here). Each one surfaces a different
slice of what is bound to the address:

```
in:anywhere ("verify your email" OR "confirm your email" OR "welcome to")
in:anywhere ("reset your password" OR "password reset")
in:anywhere (invoice OR receipt OR subscription OR renewal OR billing)
in:anywhere (from:noreply OR from:no-reply OR from:donotreply)
```

Work the results in this order. The order matters: it is worst-case
consequence first.

### Tier 1 — Do not defer

Losing access here is expensive or clinically serious.

- **Domain registrar and DNS** — if this account's login email is the
  old Gmail, change it early, but *not before* Phase 1 is complete and
  stable. Locking yourself out of DNS mid-migration is the one truly
  bad failure mode in this runbook.
- **Malpractice insurance, state chiropractic license/board, NPI/CAQH,
  DEA if applicable** — regulatory mail must not go to a shell inbox.
- **Bank and merchant processing** used by the practice.
- **Google Workspace recovery email and phone** — set these to the
  personal Gmail and Robert's mobile.

### Tier 2 — CSA-critical

These directly touch the pathway in `CLAUDE.md` §8.

- **Sleep Doctor partner portal** (`portal.sleepdoctor.com`) — the
  partner account is registered to the old address and is tied to a
  live relationship with David Amato and Mark D'Amelio. See §9 for how
  to handle this one specifically; do not just silently change it.
- **ClickFunnels 2.0** (`zeravicachiropracticedd.myclickfunnels.com`) —
  account login *and* the from-address on every funnel email.
- **AWeber** — sending identity and list settings.
- **SimpleTalk** (`faruk@simpletalk.ai`) — Peter is mid-setup here; tell
  Peter before changing it or you break his access.
- **Zoom** — the consult delivery tool for the whole Phase 1 offer.
- Parker Seminars, Biogenetix, Scrip Hessco, and other CE/vendor
  accounts.

### Tier 3 — Low stakes

Newsletters and marketing lists. Do not spend time here. Forwarding
(§6) covers them indefinitely, and most will churn out naturally. If a
list is worth keeping, update it the next time it lands in the inbox.

---

## 8. Phase 5 — Public-Facing Surfaces

- **Email signature** on the new account. Use the office block, updated:

  > Robert Zeravica, DC
  > Doctor of Chiropractic
  > DrZeravica@RobertZeravica.com
  > RobertZeravica.com
  > (818) 276-5054

- **Site drafts in this repo** — already updated in the same commit as
  this runbook: `site/index.html` and `site/doctors.html` now point at
  `DrZeravica@RobertZeravica.com`.

  > ⚠️ **Gate:** these pages must not be published before the mailbox
  > actually receives mail. A landing page advertising a dead address
  > is worse than one advertising a Gmail address.

- **ClickFunnels** — sender identity, footer, and any autoresponder.
- **Google Business Profile**, if the practice has one.
- **Social profiles** — Facebook and anywhere the contact address is
  listed publicly.
- **Physical collateral** — business cards, intake forms, patient
  handouts. Low urgency, but log it so it happens at the next reprint.

---

## 9. Deliverability — Read This Before the CSA Outreach Push

**This is the real risk in the whole migration, and it lands directly
on `MAY_2026_GOALS.md` Goal 2 (outreach to all 28 opted-in DCs).**

A brand-new domain identity has **zero sending reputation**. If the
first thing `DrZeravica@RobertZeravica.com` ever does is send 28
near-identical messages to chiropractors, a meaningful share go to spam
— and Robert will never know which ones. For a project whose entire
premise is professional credibility with peers, silently landing in
spam is a worse outcome than a slightly less polished sender address.

**Warm-up protocol before any batch outreach:**

1. **Weeks 1–2:** normal one-to-one mail only. Real conversations with
   people who will reply — Peter, existing patients, vendors. Replies
   are the strongest positive signal there is.
2. **Week 3:** start the DC outreach, but **manually, in batches of
   5–8 per day**, personalized. This matches CSA's voice anyway — the
   `CLAUDE.md` §4 doctor-teacher tone does not batch-blast.
3. **Week 4+:** normal volume.
4. **Never** send the 28-DC list through a bulk tool on a cold domain
   in week one.
5. Confirm SPF, DKIM, and DMARC are all passing (§4) *before* step 2.
   Check the DMARC `rua` reports.

**If outreach is urgent and cannot wait 3 weeks:** send it from
`DrZeravicaOffice@gmail.com` — which has years of reputation — and
put the new address in the signature. Migrating the identity and
warming it up can happen in parallel. Delivery beats tidiness.

---

## 10. Phase 6 — Reconnect Claude's Connectors

After the new mailbox is live, in Claude Code on the web →
Settings → Connections:

- Connect **Gmail** to `DrZeravica@RobertZeravica.com`.
- Consider connecting **all** relevant accounts rather than swapping
  one — Claude can hold multiple Google connections, and the current
  single-account limitation is why `CLAUDE.md`'s account map was wrong
  until this session.
- Re-verify which account each integration actually landed on, and
  update `CLAUDE.md` §6. **Do not assume the mapping** — it was wrong
  before, and the failure is silent: Claude reports "no results" for an
  inbox it simply cannot see.

---

## 11. What Never Gets Deleted

- **The old Gmail account stays alive permanently.** It costs nothing.
  Deleting it releases the address, breaks every unmigrated account,
  and makes old password-reset flows unrecoverable. There is no upside.
- Keep forwarding on indefinitely.
- Keep "send as" configured so historical threads stay answerable.

---

## 12. Rollback

Every step is reversible except one.

| Step | Rollback |
|---|---|
| DNS / MX change | Restore previous records. Propagation delay applies; mail sent during the gap may bounce with a retryable error and redeliver. |
| Mail import | Non-destructive — source is untouched. |
| Forwarding / send-as | Toggle off. |
| Service login changes | Change back, if you still control the old inbox — which is exactly why §11 exists. |
| **Deleting the old Gmail** | **None. Irreversible. Do not do it.** |

---

## 13. Execution Checklist

- [ ] Recover registrar login; confirm who controls DNS
- [ ] Read current MX records; note anything already there
- [ ] Check storage headroom on the office Gmail
- [ ] Sign up for Workspace Business Starter on `RobertZeravica.com`
- [ ] Verify domain (TXT)
- [ ] Publish MX, SPF, DKIM, DMARC — **generate DKIM in Admin first**
- [ ] Test send/receive both directions; run `mail-tester.com`
- [ ] Add aliases (`Robert@`, `DrZ@`, `Office@`, `Info@`)
- [ ] Set Workspace recovery email + phone
- [ ] Run Data Migration for mail; export/import contacts + calendar
- [ ] Spot-check migrated threads (oldest Sleep Doctor thread)
- [ ] Turn on forwarding from old Gmail, **keep a copy**
- [ ] Add "send as" for the old address; set new address as default
- [ ] Update signature
- [ ] Work Tier 1 services (registrar last, and only once stable)
- [ ] Work Tier 2 services; notify Peter before touching SimpleTalk
- [ ] Handle Sleep Doctor deliberately (§9 of the outreach doc)
- [ ] Update ClickFunnels sender identity
- [ ] Complete 2-week warm-up before batch DC outreach
- [ ] Reconnect Claude connectors; correct `CLAUDE.md` §6
- [ ] Publish site pages **only after** mailbox is confirmed live
