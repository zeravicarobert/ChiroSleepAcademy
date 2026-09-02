# SDI / EDD Income Baseline — Dr. Z's Existing Practice

**Source:** Google Sheet `Income-Jane`
(`183WIKZluMx-IXYiPEBqq32MsM8h1R3Lru8wskCHfhWQ`, owned by
`zeravicarobert@gmail.com`, last modified 2026-09-02).
**Analyzed:** 2026-09-02. **Scope of this file:** aggregates only.

> **Privacy note.** The source sheet contains patient names, email
> addresses, payment handles, and a status-code legend that references
> SSN/DOB lookups in the EDD portal. **None of that is reproduced here and
> none of it belongs in this repo.** This file carries only monthly totals,
> transaction counts, price points, and mix ratios. If a future session
> needs patient-level detail, read the sheet directly — do not copy it in.

---

## 1. What This Income Actually Is

This is **not** CSA revenue. This is Dr. Z's existing cash-pay practice:
certifying and re-certifying California **EDD State Disability Insurance
(SDI)** claims for patients. It is a high-volume, low-ticket, recurring
service business, collected almost entirely by Zelle.

It matters to CSA for four reasons:

1. **It is the runway.** CSA is being built on top of a practice already
   producing roughly **$36K/month**. CSA does not have to be profitable
   in month one.
2. **It is the constraint.** ~130 transactions a month across ~125 patients
   is real recurring administrative load on Dr. Z's calendar. Time spent on
   CSA is time not spent here.
3. **It is proof Dr. Z can run a recurring, price-laddered offer.** The SDI
   ladder (below) is a working model of exactly what CSA Step 6 needs to be.
4. **It is explicitly ring-fenced from the Peter partnership.** Per the
   Rob–Peter term sheet, Peter earns **no SDI income**. Rob keeps SDI,
   existing patients, and organic revenue. These numbers define what
   "SDI" means in that agreement.

---

## 2. Monthly Performance — 2026

Figures are billed dollars from dated line items with a named patient.
Sheet-footer summary cells and blank rows are excluded.

| Month | Billed | Txns | Unique pts | New claims | Re-certs | New % | New $ | Re-cert $ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Feb 2026 | $38,159 | 129 | 119 | 34 | 86 | 28% | $19,182 | $17,487 |
| Mar 2026 | $35,120 | 131 | 124 | 26 | 101 | 20% | $15,084 | $18,985 |
| Apr 2026 | $39,113 | 137 | 129 | 45 | 84 | 35% | $21,000 | $17,490 |
| May 2026 | $40,570 | 125 | 120 | 34 | 89 | 28% | $18,755 | $20,665 |
| Jun 2026 | $37,713 | 133 | 125 | 32 | 92 | 26% | $17,315 | $19,794 |
| Jul 2026 | $34,076 | 129 | 129 | 28 | 100 | 22% | $12,600 | $21,326 |
| Aug 2026 | $28,816 | 129 | 123 | 16 | 106 | 13% | $7,225 | $20,426 |
| **Feb–Aug total** | **$253,567** | **913** | 489 unique | 215 | 658 | 25% | | |
| **Average / month** | **$36,224** | **130** | **~124** | 31 | 94 | 25% | | |

September 2026 is in progress (through 9/1: $2,850 across 6 transactions).

**Annualized run rate at the Feb–Aug average: ~$435K/year.**

---

## 3. The Price Ladder

The sheet reveals a clean, consistent two-axis price ladder — *new claim vs.
renewal* × *months certified*. Across Feb–Sep 2026:

| Service | Price | Volume |
|---|---:|---:|
| EDD Renew — 1 month | $150 | 492 |
| EDD Renew — 2 months | $300 | 104 |
| EDD Renew — 3 months | $450 | 65 |
| EDD New — 1 month | $400 | 103 |
| EDD New — 2 months | $550 | 52 |
| EDD New — 3 months | $700 | 63 |

Renewals price at a flat **$150/month certified**. New claims carry a
**$250 intake premium** on the first month ($400 vs. $150), then drop to the
same $150/month for months two and three. Payment plans and split payments
exist but are marginal (~25 transactions total).

**Payment mix:** Zelle (Chase) is ~87% of all transactions. Cash App and
Venmo split most of the rest, with occasional PayPal and card.

---

## 4. The Signal That Matters: New-Claim Intake Is Falling

Re-certification revenue is stable and even growing — $17.5K in February,
$20.4K in August. The book of business is retaining well.

**New-claim revenue is collapsing:**

```
Apr  $21,000  ████████████████████  (45 new claims)
May  $18,755  ██████████████████    (34)
Jun  $17,315  ████████████████      (32)
Jul  $12,600  ████████████          (28)
Aug   $7,225  ███████               (16)
```

That is a **66% drop in four months**, and it accounts for essentially the
entire slide from April's $39,113 to August's $28,816. August's mix was 87%
re-certifications — the highest in the dataset and the least healthy.

**Why this matters for CSA:** a book living on renewals is a book with a
finite tail. Every EDD claim eventually terminates. Without new-claim
intake, the $36K/month baseline erodes on its own schedule regardless of
what CSA does. This is an argument for CSA urgency, not against it — but it
is *also* a warning that Dr. Z's attention has a real cost right now.

**Open question for Robert:** is the August drop seasonal, a referral-source
change, a competitor, or attention diverted to CSA? The sheet cannot answer
this. Worth knowing before assuming the runway is $36K/month.

---

## 5. Historical Context — 2023

The sheet also holds monthly tabs from 2023. Those tabs are messier (mixed
1099 work, personal-injury cases, CMT, cash deposits, and inline
running-total cells), so treat the figures as directional rather than exact.
The sheet's own month-end tracking cells read:

| Month | Sheet's tracked total |
|---|---:|
| Jul 2023 | $18,037 |
| Aug 2023 | $17,369 |
| Sep 2023 | $15,314 |
| Oct 2023 | $12,390 |

In 2023 EDD work was roughly 40% of income, mixed with 1099 coverage work
for another doctor, personal injury, and CMT. By 2026 the practice has
**specialized almost entirely into EDD/SDI certification and roughly
doubled**, from the mid-teens per month to the mid-thirties.

That specialization is the relevant precedent: **Dr. Z has already built one
niche recurring-revenue practice from scratch.** CSA is the second.

---

## 6. Reconciliation Notes

- The September 2026 tab's footer cell **"Last mos' income: $38,327"** does
  not reconcile to any computed month (August computes to $28,816). It
  appears to be a stale carry-over from an earlier month's formula. Treat
  the computed figures above as authoritative; ask Robert if the $38,327 is
  meaningful.
- The September tab also carries **"EDD Spreadsheet Pt Total: 950"** — the
  lifetime patient roster, not the active roster. Active is ~124/month.
- A separate footer records prior-month case counts: 37 new-patient new
  claims, 14 new-patient mid-claims, 19 existing-patient new claims,
  70 new cases, 164 re-certifications. The month it refers to is unlabeled.
- The `PVs` tab tracks patient visits (NCEP / NCNP / RCNP / RCEP) for
  Oct 2025 – Apr 2026 and is only partly filled in. Dec 2025, Jan 2026, and
  May 2026 onward are blank.
- Amounts of $1, $5, $10, $11, $20, $30, and $31 appear as Zelle test
  payments and are included in totals; their effect is negligible (<$100
  across the full dataset).

---

## 7. What To Do With This

1. **Do not let CSA planning assume unlimited runway.** The base is real but
   trending down ~$10K/month off its April peak.
2. **Diagnose the new-claim slide** before it compounds. It is the single
   highest-leverage financial question in front of the practice right now,
   and it is separate from CSA.
3. **Reuse the ladder logic in CSA.** The SDI ladder works because the entry
   price is low, the renewal is frictionless, and the premium sits on
   intake. CSA Step 6 (Membership → Onboarding → Implementation → Inner
   Circle) should be stress-tested against that same shape.
4. **Keep SDI numbers out of CSA marketing.** This is Dr. Z's private
   practice financial data. It informs strategy; it is never a public proof
   point, and patient data never leaves the sheet.
