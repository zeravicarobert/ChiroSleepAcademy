# Bitcoin Storage & Security — Class Notes

**Course:** BBA — Bitcoin storage class with **Eleanor**
**Date of class:** 2026-07-27
**Student:** Robert
**Status:** Raw notes cleaned up and organized. Items I couldn't verify are
flagged **[ASK ELEANOR]** or **[VERIFY]** — don't treat those as settled fact.

> These are study notes, not investment advice and not a security audit.
> On anything involving real money, verify with Eleanor and a second trusted
> source before acting.

---

## 1. Core idea: how you store Bitcoin is the whole game

- **Deep storage vs. shallow ("not-deep") storage.** Deep (deep cold) storage
  is best — keys are created and kept fully offline, with no realistic path
  for an attacker to reach them.
- The threat you're defending against is mostly **your own keys leaking**, not
  Bitcoin itself being broken.

### Hot wallet vs. cold wallet
| | Hot wallet | Cold wallet |
|---|---|---|
| Example | Exodus | Trezor / paper / offline-generated |
| Keys generated | **while connected to the internet** | **offline, and never exposed online** |
| Main risk | malware on the computer can steal keys | must protect the physical backup |
| Best for | small "spending" amounts | long-term / large holdings |

**Takeaway:** generate the private key **offline** so there is no possibility
of it being captured while it's being created.

---

## 2. Keys, seed phrases, and splitting control

- **Seed phrase** (recovery phrase) sits "on top" — it's the master secret
  that regenerates all the keys/addresses in the wallet.
- **Private key (PK)** is the specific secret that controls the funds at an
  address.
- **Protect the seed phrase (or the PK where the funds actually are)** — that
  is the thing that moves money.

### Splitting the key so no one person can move funds
Robert's note: *"multiple PKs to give to people, a piece... and 3 need to come
together to move the money."*

This is one of two related techniques — worth confirming which one Eleanor
meant **[ASK ELEANOR]**:

- **Multisig (M-of-N):** funds require, say, **3 of 5** independent keys to
  sign before anything moves. No single key can spend.
- **Shamir Secret Sharing (SLIP-39):** the *backup* is split into shares (e.g.
  any 3 of 5 shares reconstruct the seed). Trezor Model T supports this
  natively.

Both let you hand pieces to different people/places so recovery needs a quorum.
"Want the money back? Jump through these hoops" = that quorum requirement by
design.

---

## 3. Generating a key offline, from scratch

Robert's shorthand: *"flip-coin : hexadecimal : bitaddress.org : bitcoin-address
(base2 (binary) → base16 → base58)."*

The full chain, cleaned up:

1. **Coin flips = raw entropy (base 2 / binary).** Flip a coin 256 times →
   256 bits of true randomness. Heads/tails = 1/0.
2. **Convert to hexadecimal (base 16).** That 256-bit number becomes the
   private key in hex.
3. **Derive the Bitcoin address (base 58 / Base58Check).** Bitcoin addresses
   use Base58 encoding (drops ambiguous characters like 0/O, l/I).
4. **`bitaddress.org`** is the classic tool that does the hex → key → address
   step, and is meant to be run **offline** (download it, disconnect, run it on
   an air-gapped machine).

> **Reality check:** the strength of this method depends entirely on doing it
> on a clean, offline machine and never letting the key touch a networked
> device. Real coin flips for entropy is legit; a compromised computer is the
> failure point.

---

## 4. Hardware wallets — Trezor

*(Robert wrote "Tresor" — the brand is spelled **Trezor**.)*

- **Training point:** if you buy a Trezor, buy it **directly from Trezor's own
  website / official store** — never third-party/used (supply-chain tampering
  risk).
- Class claim: *"Trezor wallets have never lost money, because it's not
  possible."*
  - **[VERIFY / nuance]** Treat this as marketing-strong, not literally
    absolute. A hardware wallet dramatically reduces risk, but people still
    lose funds through **phishing, entering the seed into a fake site, physical
    coercion, or losing the backup.** The device is strong; the human around it
    is the weak point. Good thing to teach *honestly* if Robert builds a class.

---

## 5. Other concepts that came up

- **Airdrop** — free distribution of tokens/coins to holders or participants.
  **[ASK ELEANOR]** what kind — a new token? a fork? conditions to qualify?
- **Notarization** — using the blockchain to timestamp/prove a document
  existed at a point in time (publish the document's hash on-chain).
- **Hashing / "hash it, all the code."** *(Robert wrote "bithub.")* Bitcoin
  relies on cryptographic **hash functions (SHA-256)** everywhere — for
  addresses, blocks, and digital verification generally. A hash is a
  fixed-length fingerprint of data.
  - **[ASK ELEANOR]** whether "bithub" meant **hashing in general**, or
    literally **GitHub** (where open-source Bitcoin code lives and is verified).
    The note reads like hashing, but confirm.

---

## 6. Coins / tickers mentioned (verify before repeating in a class)

- **XRP** = the asset on the **XRP Ledger** (Ripple). Note said *"XRP isn't
  XAB."* **[VERIFY]** — "XAB" isn't a mainstream ticker I can confirm; may be a
  specific token Eleanor named. Don't confuse with **XLM (Stellar)**, which is
  the common look-alike.
- **"XAB scam from Anarcapulco (only Derek's)."** **[ASK ELEANOR]** — sounds
  like a warning about a specific scam token promoted around the Anarcapulco
  conference. Get the exact name/details before citing it.
- **BSV (Bitcoin SV)** — note: *"find BSV via exchanges for XRP."* **[ASK
  ELEANOR]** what the actual action was (swap XRP → BSV on an exchange? find a
  BSV listing?). Unclear as written.

> Because tickers and scam names are easy to get wrong, everything in this
> section is **flagged to confirm with Eleanor** before it goes into any class.

---

## 7. "Zappo bank" → almost certainly **Xapo Bank**

- Robert wrote *"Zappo bank."* This is very likely **Xapo Bank** — a
  Bitcoin-focused, Swiss/Gibraltar-style private bank. Matches the notes:
  *"Swiss bankery-type stuff,"* moving **BTC to the bank**, and name-dropping
  **Adam Back** (Blockstream) and **Michael Saylor ("Mr. Saylor,"**
  MicroStrategy/Strategy) as the caliber of people associated with serious
  Bitcoin institutions.
- Notes: *invited to a Xapo/"Zappo" event; "BTC(07262026)"* (a dated
  reference, 07/26/2026).
- **[VERIFY]** the exact bank name and what the event/invite actually is before
  relying on it.

**Bigger point from the class:** *"Bitcoin security is more robust than the
military / industrial complex / centralized banks."* — the argument that
well-implemented Bitcoin self-custody can be harder to breach than traditional
centralized institutions.

---

## 8. Robert's own ideas captured during class

*(These are your thoughts, kept separate from what Eleanor taught.)*

- **Class concept + slogan:** *"Don't get cryptoscammed — take my class."*
  A consumer-protection / education angle: teach normal people safe storage and
  how to spot scams. Strong, honest positioning.
- **Comparison site idea (Eleanor's, that you noted):** Eleanor wants to build
  an **alternative/comparison website or app to `bitaddress.org`** — a modern,
  trustworthy offline key-generation / education tool. Possible collaboration.
- **Brainstorm flash (parked, not an action item):** *"what if member-only,
  scam-like coins need to exist as the world goes digital — to mimic the
  offline cliques/in-groups that form in group dynamics."* Noted as a raw idea
  only. If this ever becomes real, it has to stay on the **honest, disclosed,
  no-one-gets-defrauded** side of the line to be worth doing — which fits the
  "don't get cryptoscammed" brand, not against it.

---

## 9. Open questions for Eleanor (next class / follow-up)

1. Airdrops — what type did you mean (token / fork), and how do you qualify?
2. Splitting the key — **multisig (M-of-N)** or **Shamir shares (SLIP-39)**?
   Which is the recommended default?
3. "bithub" — did you mean **hashing (SHA-256)** or **GitHub**?
4. "XAB" — exact name/ticker, and the Anarcapulco scam story ("Derek's").
5. BSV via exchanges "for XRP" — what's the actual step?
6. Confirm the bank is **Xapo** and what the event invite is.
7. Details on the `bitaddress.org` alternative you want to build — where can I
   help (design, code, content)?

---

## 10. One-line summary

**Generate keys offline, store them deep and cold, split control so no single
key or person can move funds, buy hardware wallets only from the source, and
teach people to avoid scams — that's the whole storage-and-security game.**
