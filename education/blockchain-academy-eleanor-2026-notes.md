# Blockchain Academy — Eleanor — 2026 Notes

Robert's notes from Eleanor's Bitcoin / Blockchain Academy course
(May 2026). Captured verbatim where possible; organized for future
reference. **Investment:** $1,500 (see CLAUDE.md §20).

## Class schedule (rolling)

- **Tue 5/26/26 — Day 1** (foundational concepts, completed)
- **Thu 5/28/26 — Day 2 — topic: mining**
- **Fri 5/29/26 — Day 3**
- **Mon 6/1/26 — Day 4**
- **Tue 6/2/26 — Day 5**

Additional time with Danielle Shahan that Eleanor is offering; group
(including Robert) invited via the text chat group.

## Day 2 / additional notes — 5/28/26

### Big-picture framing

- **Moore's law** — observation that computing power roughly doubles
  every ~2 years. Eleanor invoked this to contextualize Bitcoin's
  cryptographic security (2^256) — even if Moore's law continues
  indefinitely, 2^256 remains infeasible to brute-force.
- **Bitcoin is designed as a paradigm reset.** Not an incremental
  improvement on existing money — a structural alternative.
- **The transition to digital currency.** Cash isn't going to
  survive long-term. Predominantly, all transactions of all humanity
  will be online.
- **Bitcoin isn't designed to be fringe.** It's designed to be a
  *new form of money* for mainstream use.

### The "trust" thesis

- **Current financial system = trust-based model.** You trust banks,
  governments, payment processors, intermediaries. Each transaction
  passes through multiple trusted gates.
- **Trust implies trusting an intermediary** — and intermediaries
  can fail, freeze accounts, censor, charge fees, go bankrupt.
- **Bitcoin = trustless.** Math + protocol replace trust in
  institutions. The cypherpunk motto: *"Don't trust — verify."*

### Frictionless money

- Bitcoin moves money without the friction layer of intermediaries
  (Western Union, banks, wire transfer fees, currency conversion
  spreads).
- Lower transaction friction = lower transaction cost = more
  economic activity becomes possible.

### Self-custody — the next step from Day 1

- After learning the Private Key / Address concept (Day 1), the
  natural next move is **self-custody.**
- Self-custody means YOU hold the Private Key — not an exchange,
  not a custodian, not Coinbase.
- Self-custody wallet = your money, your responsibility.
- The 256-coin-flip exercise from Day 1 generates a *real* self-
  custody Private Key.

### Tools surfaced
- **BitAddress.org** — Eleanor's recommended tool to create a
  Bitcoin address from your generated Private Key.
- **Hot Wallet vs Cold Wallet** distinction introduced (Eleanor
  will likely deepen in later sessions).
- **Exodus wallet** — Eleanor surfaced as a wallet option. Closed-
  source, hot wallet by default, multi-cryptocurrency (not Bitcoin-
  only), beginner-friendly UX, integrates with Trezor for added
  security. Sits between exchange custody (Coinbase) and pure
  self-custody (hardware wallet + open-source software). *Open
  question: Eleanor's framing — recommended for beginners, or
  introduced as something to know about?*

### Binary refresher (Day 2 review)
- **Bit** = 1 or 0
- **Nibble** = 4 bits (e.g., `1010`)
- **Byte** = 8 bits (e.g., `10101010`)
- **100,000,000 satoshis = 1 BTC** (confirmed)
- **21,000,000 BTC total** (confirmed; ~95% mined)

## Eleanor's positioning (her worldview as conveyed in class)

- Bitcoin is a **machine**; students will become **operators**
- Students will **own** their own Bitcoin, be their **own bank**, and
  not rely on others
- **Money is a database of transactions** held in banks (e.g., Chase
  server) controlled by government → controlled by military →
  military does war and genocide. *(Cypherpunk framing; durable
  context for how Eleanor teaches.)*
- Banks require **opt-in**; ~20% of lower socioeconomic class doesn't
  have a bank account
- **Eleanor's explicit warning at start of class:** Robert is being
  recruited into a movement. *(This is captured separately in
  CLAUDE.md §19 — Robert's discernment is intact.)*

## Core concepts (Day 1)

### Money / Currency
- **Fiat money:** currency declared by a country's government to be
  legal tender
- **Inflation:** US dollar dropping in value due to inflation
- **Bitcoin's max supply** = no inflation possible
- $21,000,000 BTC = fixed max supply
- **~95% has been mined** as of class date

### Privacy vs Anonymity *(distinction Eleanor drew)*
- Privacy = others know you're doing it, not the contents
- Anonymity = others see what's done, not who did it
- Bitcoin = **pseudonymous** (addresses public, identities not, but
  traceable through chain analysis)
- Monero = designed for stronger anonymity
- Eleanor: "commerce can't onboard to an autonomous payment protocol"
  like Monero *(meaning: businesses can't easily accept Monero
  because of regulatory + tracing limits)*

### Key terms surfaced
- **DLT** = Distributed Ledger Tech = blockchain
- **Crypto proof** = replaces "trust" in a bank / military / government
- **Coinbase transaction** = the special first transaction in every
  block that creates new BTC and pays the miner. Coinbase the
  company is named after this.
- **Node operators** = keep the database alive, compensated
- **Miners** = the operators creating new blocks
- **Genesis Block** = block 0 = 1/3/2009. Satoshi mined 50 BTC in it.
- **TimeChain / Time-stamping server** = Bitcoin as an ordered chain
- **Bitcoin Address** = Bitcoin Account # = randomized number with a
  balance
- **Private Key** = randomly generated number from 2^256 possibilities
- **ECDSA** = Elliptic Curve Digital Signature Algorithm. A "trap
  door" function — turns Private Key → Bitcoin Address. One-way.
- **Satoshi** = the smallest BTC unit. 100,000,000 satoshis = 1 BTC

### Bitcoin's structure
- Bitcoin currently on version 31.0; started at 0.1
- Blocks = "folders" of transactions
- ~3,000–6,000 transactions per block
- Block reward halves every 4 years (the halving)
- Top 100 Bitcoin holders: ~2/3 billionaires, ~1/3 millionaires
- All transactions are **public** on the blockchain
- Bitcoin **has never been hacked**. (Robert's note: it's been
  *hijacked* — likely the 2017 Block Size War / BCH fork. Worth
  asking Eleanor next class.)
- **No permission to join** the peer-to-peer network — only equipment
- **No personal info** required to create a Private Key

### Responsibility / paradigm shift
- Owner of Private Key = sole authority to move BTC
- Lose Private Key = no recovery. *Teaches responsibility — a
  paradigm shift for those used to "call the bank to reset."*

### Binary / cryptographic foundations
- 2^256 = derivative of binary code
- Binary = the fundamental language of electricity (0s and 1s)
- **Bit / Byte / Nibble** = groupings of binary
  - 1 bit = a single 0 or 1
  - 4 bits = 1 nibble
  - 8 bits = 1 byte
- **Coin flip exercise** = flip a coin 256 times (heads=1, tails=0)
  to generate a real Private Key. ~20 minutes. Teaches entropy /
  randomness.

### NFTs (briefly)
- NFTs = like the metadata encoded in binary in BTC transactions
- Metadata is encoded in binary; like a newspaper showing a transaction

### Bitcoin slogan
> "Bitcoin is math, not men."

### Famous loss
- **James Howells** — accidentally threw out a hard drive containing
  significant BTC; now in a landfill

## Open questions Robert has flagged (to ask Eleanor or research)

### Answered in chat with Claude (5/26/26)
- ~~What is *legal tender*?~~ → Government-declared currency that must
  be accepted to settle debts
- ~~What is a cryptographer? Cryptography?~~ → Cryptography is the
  math of secret communication; a cryptographer practices it
- ~~Difference between privacy and anonymity?~~ → See above
- ~~Coinbase transaction vs Coinbase the company?~~ → Yes, named after
  it. First transaction of each block, creates new BTC for miner
- ~~Has Bitcoin been hijacked?~~ → Protocol never; governance fights
  yes (2017 Block Size War → BCH fork)
- ~~What if everyone lost Private Keys?~~ → Coins permanently
  inaccessible; ~20% of all BTC already lost this way

### Still open — for Eleanor or self-study
- What does "*BTC protocol is baked into Genesis Block*" mean?
- Is **1 block = 1 MB** still true? (No — SegWit raised effective
  limit; ask Eleanor when she covers it)
- What is **Segregated Witness (SegWit)**? *(Eleanor said she'd
  cover next class)*
- What does "**all math starts with 0**" mean?
- What is **Secured Stored Value**?
- What is an **API to blockchain**?
- How secure is 2^256? *(Watch the YouTube video Robert flagged:
  [youtube.com/watch?v=S9JGmA5_unY](https://www.youtube.com/watch?v=S9JGmA5_unY))*
- Why is **USD the in/out currency** for BTC? *(On-ramps and off-ramps
  use USD because that's the world we live in; Eleanor's deeper
  framing is that this measures our fiat dependence)*
- **Hot Wallet vs Cold Wallet** — Eleanor introduced; depth coming
  in later sessions. Quick framing answered in chat 5/28/26 (see
  below).
- **BitAddress.org** — Eleanor's recommended tool. Safe for the
  educational coin-flip exercise; for real BTC storage, modern best
  practice is a hardware wallet (Ledger, Trezor) > paper wallet.
  Discussed in chat 5/28/26.

## Reading / resource list Eleanor recommended

- **Cypherpunk Manifesto** — Eric Hughes, 1993. ~1 page. Search
  "Eric Hughes Cypherpunk Manifesto."
- **Blind Signatures for Untraceable Payments** — David Chaum, 1983.
  Foundational academic paper on private digital cash.
- **Digicash** — 1989. First cryptocurrency (Chaum's company).
- **Satoshi Nakamoto white paper** — 8 pages (Robert thinks ~8;
  actual length is 9 pages). Title: *"Bitcoin: A Peer-to-Peer
  Electronic Cash System"*
- **NakamotoInstitute.org** — Eleanor's recommended resource
- **Blockchain.com** — for looking up real BTC transactions
- **"Kicking the Hornet's Nest"** — additional education (Eleanor
  reference; Robert to follow up on what specifically)

## Action items for Robert

1. **Coin-flip Private Key exercise** — flip a coin 256 times,
   record heads=1 / tails=0. ~20 minutes. Generates a real Private
   Key. Educational, not for production use.
2. **Watch the 2^256 security video** (5 min) before next class
3. **Read the Cypherpunk Manifesto** (~1 page) — context for
   everything else
4. **Bookmark NakamotoInstitute.org** and **Blockchain.com**
5. **Reach out to CA cohort members** for phone/email when CRM is
   selected (see `relationships/eleanor-bitcoin-cohort.md`)

## Note on Robert's typos in his original notes
- "bryptography" = cryptography
- "ane" in "billionaires ane 1/3 are millionaires" = "and"
- "Satoshi is a Pokemon. Nakamoto is a Japanese art." = Eleanor's
  mnemonic for remembering the name (Pokemon character is named
  Satoshi in Japan; Nakamoto refers to Japanese art/aesthetic)
