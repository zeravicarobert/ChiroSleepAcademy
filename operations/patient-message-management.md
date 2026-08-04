# Patient Message Management — 818 Line Playbook

**Owner:** Robert (Dr. Z)
**Created:** 2026-08-04
**Purpose:** Stop the daily pile-up of patient texts on the personal
**818-276-5054** T-Mobile line by (1) migrating patient conversations to
**SimpleTalk**, (2) triaging what's left in a fixed order, and (3) replying
from saved templates instead of writing every message from scratch.

> **Assumption to confirm:** This playbook treats **SimpleTalk** as Dr. Z's
> business phone/texting platform — the place patient conversations should
> live. If SimpleTalk supports auto-replies and saved message templates
> (most business texting platforms do), load the templates below into it.
> If it doesn't, use your phone's built-in text replacement / saved-reply
> feature on the 818 line as a stopgap. Confirm the SimpleTalk business
> number and drop it in everywhere `[SIMPLETALK #]` appears.

---

## Why this matters (read once)

Two problems are stacked on top of each other:

1. **Volume + no triage.** Everything lands in one personal inbox with no
   priority order, so a scheduling text and an urgent clinical question look
   identical at 9pm.
2. **Wrong channel.** Patient health conversations on a **personal** cell
   line are a privacy and boundary problem, not just an inconvenience.
   Patient messages about symptoms, results, and care belong on a business
   line you control — SimpleTalk — where they're logged, separable from
   personal life, and answerable on a schedule instead of all day.

Fixing the channel fixes most of the volume. The templates and triage
handle the rest.

---

## Step 1 — Migrate patients to SimpleTalk (one-time)

Send this once to the patients who currently text your 818 personal line.
Send it from **SimpleTalk** if you can (so their reply trains them to the
new number); otherwise send from 818 and it still works.

> **Broadcast — "new line" message**
>
> Hi, this is Dr. Zeravica's office. We've set up a dedicated line for
> patient messages so nothing gets missed: **[SIMPLETALK #]**. Please save
> it and use it for scheduling, questions, and results going forward.
> Texts here are checked at set times each day — for a medical emergency,
> call 911. Thank you! — Dr. Z's office

Keep it factual and warm. No hype. It reads as an upgrade in care, not a
brush-off.

---

## Step 2 — Auto-reply on the 818 personal line (ongoing)

For stragglers who keep texting the personal number, set an auto-reply (or
a saved snippet you fire back in one tap). This retrains them without you
composing anything.

> **818 auto-reply / redirect snippet**
>
> Thanks for reaching out! For anything about scheduling, care, or results,
> please text our patient line: **[SIMPLETALK #]** — it's checked daily and
> keeps your info in the right place. For a medical emergency, call 911.

If T-Mobile / your phone supports scheduled Do-Not-Disturb auto-replies,
point them here. Otherwise save it as a text-replacement shortcut (e.g.
type `;line` → expands to the message).

---

## Step 3 — Triage order (answer in this sequence)

When you open SimpleTalk once or twice a day, work top-down. Don't read
chronologically — read by tier.

| Tier | What it is | Target response |
|---|---|---|
| **1 — Safety** | Anything describing a possible emergency, severe symptoms, or crisis | Immediately: redirect to 911 / urgent care. Do not manage clinically over text. |
| **2 — Time-sensitive scheduling** | Same-day/next-day appt, cancellation, "running late," referral in motion | Same session — a slot is perishable |
| **3 — Results / active case** | HST or CBCT results, care-plan questions, follow-up from a visit | Same day — these are your revenue-and-trust core |
| **4 — New inquiries** | "How much," "do you treat X," first contact | Same day if possible — warm leads cool fast |
| **5 — General / FYI** | Thank-yous, non-urgent questions, scheduling far out | Batch once daily |

**Rule of thumb:** Tier 1 is the only thing that interrupts your day.
Everything else is answered in one or two fixed sessions (e.g. 12pm and
5pm). Tell patients that in the templates — set the expectation and the
pressure drops.

---

## Step 4 — Saved reply templates

Load these into SimpleTalk as saved replies / snippets (or phone text
shortcuts). Fill the `[brackets]`. All are written in Dr. Z's voice —
clear, direct, doctor-teacher — and inside scope: **structural, not
diagnostic; no cure claims; respectful of all providers.**

### Safety redirect (Tier 1)
> If this is a medical emergency, please call **911** or go to the nearest
> ER now. For an urgent but non-emergency concern, contact your primary
> physician or an urgent care today. I want you safe first — we'll pick the
> care conversation back up once you're seen.

### Scheduling — offer times (Tier 2)
> Happy to get you in. I have **[day/time]** or **[day/time]** open — which
> works? I'll hold the spot once you confirm.

### Scheduling — reschedule / cancel (Tier 2)
> No problem, thanks for letting me know. Want me to move you to
> **[day/time]**, or should I text you a couple of options for next week?

### Results ready — HST (Tier 3)
> Your home sleep test results are back. I'd like to walk you through them
> properly rather than over text — they're the sleep-and-airway equivalent
> of an X-ray and worth 15 minutes together. Does **[day/time]** work for a
> quick Zoom or call?

*Compliance note: don't send AHI/ODI numbers or interpretations over SMS.
Book the review. The physician read comes from the vendor; your role is
the structural-airway explanation.*

### Results ready — CBCT / airway (Tier 3)
> Your imaging is in and I've reviewed it through the airway-and-structure
> lens. Let's go over what it shows and what it means for your plan — I have
> **[day/time]**. Sound good?

### Care-plan / "is this normal" question (Tier 3)
> Good question — and the honest answer is it depends on your specifics,
> which I don't want to guess at over text. Let's cover it in your next
> visit on **[date]**, or grab a short call at **[day/time]** if it can't
> wait. Bring it up and we'll look at it together.

### New inquiry — general (Tier 4)
> Thanks for reaching out! The best first step is a short call so I can
> understand what's going on with your sleep and breathing and whether
> what we do is a fit. I have **[day/time]** — want me to hold it?

### New inquiry — pricing (Tier 4)
> Great question. Pricing depends on the step that fits you — it starts
> with a **free alignment call**, then a **$300 Sleep Baseline** (home
> sleep test) if it makes sense. Bigger steps come later only if they're
> right for you. Want to start with the free call? I have **[day/time]**.

*Pricing mirrors CLAUDE.md §8. Keep it to the free call + $300 baseline in
a text; the rest belongs in a real conversation.*

### Insurance / billing (Tier 5)
> Good question. For the home sleep test, our testing partner works with
> most private insurance and Medicare, and there's a cash-pay option too.
> I'll get you exact numbers for your situation — give me until
> **[day/time]** and I'll follow up.

### After-hours acknowledgment (any tier below 1)
> Got your message — thank you! This line is checked during the day, so
> I'll reply by **[tomorrow / next business morning]**. If it's a medical
> emergency, please call 911.

### "Please save my new line" (retrain repeat 818 texters)
> Quick note: I've moved patient messages to **[SIMPLETALK #]** so nothing
> slips through the cracks. Save it and text me there next time — talk soon!

---

## Step 5 — The daily routine (5 minutes, twice a day)

1. **Open SimpleTalk** at your two set times (suggest ~12pm, ~5pm).
2. **Scan for Tier 1** first. Handle any safety item immediately.
3. **Work Tiers 2→5** with saved templates. Fill brackets, send.
4. **Anything needing real thought** (a complex case, a partner, a judgment
   call) → flag it and paste it to me here; I'll draft the reply in your
   voice.
5. **Close the app.** It's not an all-day open tab anymore — it's two
   scheduled passes.

---

## What I (Claude) can do on this going forward

- **Draft any reply** you're stuck on — paste the incoming text, I'll write
  it in your voice, in scope, ready to send.
- **Expand the template set** as new repeat-questions show up. Tell me the
  question, I'll add a compliant saved reply here.
- **Tune the broadcast/auto-reply** wording for SimpleTalk once you confirm
  what the platform supports.

What I can't do: read or send SMS on your 818 line or SimpleTalk directly —
no access to your phone or those platforms. This playbook is the system;
you (or your platform's automation) run it.

---

## Open items to confirm

- [ ] **SimpleTalk business number** → drop into every `[SIMPLETALK #]`.
- [ ] Does SimpleTalk support **auto-replies** and **saved templates**? If
      yes, load Steps 2 and 4 into it. If no, use phone text-replacement.
- [ ] Your two **daily check times** (default suggestion: 12pm & 5pm).
- [ ] Any repeat patient question **not** covered above → send it, I'll add
      a template.
