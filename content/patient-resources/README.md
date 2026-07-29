# Patient Resources

Handouts for patients (not DC-facing CSA course content).

## Files

- **`ca-sdi-patient-resource.html` / `.pdf`** — "How to actually get help with
  your California SDI claim." A one-page handout for patients on California State
  Disability Insurance who can't reach EDD by phone. Leads with the legislator /
  constituent-services route (contact your CA Assembly Member or State Senator's
  office to open a case with EDD), then covers EDD phone numbers, myEDD / SDI
  Online, tips to beat the hold, and in-person offices.

  - Phone numbers and hours verified against edd.ca.gov, July 2026. Re-confirm
    before reprinting — EDD changes these.
  - Header is a placeholder (`Dr. Robert Zeravica, D.C.`) — swap in the final
    practice name / logo before distributing.
  - Regenerate the PDF from the HTML with headless Chromium:
    `chrome --headless=new --no-pdf-header-footer --print-to-pdf=ca-sdi-patient-resource.pdf file://<abs-path>/ca-sdi-patient-resource.html`

  Not legal advice; not affiliated with or endorsed by EDD. The office does not
  manage or decide SDI claims.
