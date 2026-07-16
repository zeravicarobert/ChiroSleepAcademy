# Domain Switch — GoDaddy → ClickFunnels 2.0

**Status:** v1 — do-it-yourself checklist (Claude can't access your GoDaddy
or ClickFunnels accounts to do this for you)
**Drafted:** 2026-07-16
**Domain:** www.ChiropracticSleepAcademy.net

> **How I help here:** I can't log into your accounts. But when you get to
> the DNS step, **screenshot or paste me the exact records ClickFunnels
> tells you to add**, and I'll translate them into the precise entries to
> make in GoDaddy — field by field — so you don't have to guess.

---

## First, the key decision: you probably do NOT need to "transfer" the domain

There are two different things people mean by "switch it over":

**Option A — Point the domain (RECOMMENDED).** Keep the domain *registered*
at GoDaddy, and just change its DNS so it *points to* ClickFunnels. This is
what you almost certainly want:
- Fast (minutes of work + propagation), low-risk, fully reversible.
- No 60-day transfer lock, no risk to any email on the domain.
- ClickFunnels serves the site; GoDaddy just holds the registration.

**Option B — Full registrar transfer** (move registration from GoDaddy to
ClickFunnels). More involved, triggers a 60-day ICANN transfer lock, and
isn't necessary just to run the site on CF. Only do this if you specifically
want CF to *own the registration*. **Recommendation: don't. Use Option A.**

The steps below are for **Option A**.

---

## Before you touch anything — protect your email

1. In GoDaddy → your domain → **DNS**, look for **MX records** and any
   `mail`/email-related records.
2. If you use email on this domain (e.g., an `@chiropracticsleepacademy.net`
   address), **write those MX records down and do not delete them.** Pointing
   the site to CF should not touch email — but only if you leave MX alone.
3. If you don't use email on the domain, nothing to protect here.

*(Paste me your current DNS records and I'll tell you which to keep and which
to change.)*

---

## Option A — step by step

### In ClickFunnels 2.0
1. Go to **Settings → Domains** (Workspace settings).
2. Click **Add Domain** and enter `chiropracticsleepacademy.net` (add the
   `www` version too if prompted).
3. ClickFunnels will display the **DNS records you must add** — typically:
   - A **CNAME** record for `www` pointing to a ClickFunnels target host, and
   - A record for the **root/apex** (`@`) — CF will specify either an **A
     record** to a given IP or its own root-domain method.
4. **Copy those exact values.** They are specific to your account — don't use
   generic ones from a blog. **This is the moment to paste them to me.**

### In GoDaddy
5. Go to **My Products → your domain → DNS / Manage DNS**.
6. Add/edit records to **exactly match** what ClickFunnels showed:
   - Add the **CNAME** for `www` → CF's target.
   - Set the **root** record per CF's instructions (A record to CF's IP, or
     GoDaddy **Forwarding** from root → `www` if CF uses a www-primary setup).
   - **Leave MX / email records untouched.**
7. Remove any old conflicting records that point the site somewhere else
   (e.g., a GoDaddy parked-page/Website-Builder A record on `@` or `www`) —
   but only the ones that conflict with CF's records. When unsure, paste the
   list to me before deleting.
8. Save. GoDaddy DNS changes can take **a few minutes to ~48 hours** to
   propagate (usually well under an hour).

### Back in ClickFunnels
9. CF will **verify** the domain once DNS propagates and **auto-provision an
   SSL certificate** (https). This can take a little while after DNS resolves.
10. Set the domain as the **primary/default** for your site and pick which
    page loads at the root.
11. **Test:** visit `https://www.chiropracticsleepacademy.net` and the root
    `https://chiropracticsleepacademy.net` — both should load your CF site
    with a valid padlock.

---

## Gotchas to expect

- **"It's not working yet"** is usually just DNS propagation — give it time
  before changing anything again.
- **SSL padlock lag:** the cert provisions *after* DNS resolves, so http may
  work before https. Wait it out.
- **Root vs. www:** the apex domain is the fussy part. Follow CF's exact
  method — some setups make `www` primary and forward the root to it.
- **Don't half-transfer:** don't start a GoDaddy registrar transfer *and*
  point DNS at the same time. Pick Option A; leave registration at GoDaddy.
- **Parked page lingers:** if the old GoDaddy placeholder still shows after
  propagation, there's a leftover conflicting A/CNAME record to remove.

---

## What I need from you to co-pilot this

Paste me either:
- a **screenshot/text of the DNS records ClickFunnels tells you to add**, and
- a **screenshot/text of your current GoDaddy DNS records**,

and I'll give you the exact, line-by-line changes to make in GoDaddy —
including which records to keep, change, or delete — so nothing (especially
email) breaks.
