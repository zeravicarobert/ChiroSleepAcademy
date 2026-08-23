# -*- coding: utf-8 -*-
"""Build the patient-facing Sleep & Airway one-pager PDF (letter, 2 pages).

Uses only the PDF base-14 fonts so the file stays small enough to email/text.
"""
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas as canvasmod
from reportlab.platypus import Paragraph

W, H = letter
M = 52.0                      # side margin
CW = W - 2 * M                # content width

NAVY  = HexColor('#161c2b')
GOLD  = HexColor('#a8874f')
GOLDS = HexColor('#cbb089')
INK   = HexColor('#20242e')
BODY  = HexColor('#3a4050')
MUTED = HexColor('#6c7385')
RULE  = HexColor('#e3ddd2')
TINT  = HexColor('#faf7f1')
WHITE = HexColor('#ffffff')
CREAM = HexColor('#e9e3d7')

SERIF, SERIF_B, SERIF_I = 'Times-Roman', 'Times-Bold', 'Times-Italic'
SANS,  SANS_B,  SANS_I  = 'Helvetica', 'Helvetica-Bold', 'Helvetica-Oblique'


def st(**kw):
    base = dict(fontName=SANS, fontSize=9.8, leading=13.4, textColor=BODY)
    base.update(kw)
    return ParagraphStyle('s', **base)


S_BODY   = st()
S_LEAD   = st(fontSize=10.2, leading=14.2, textColor=INK)
S_DEK    = st(fontName=SERIF_I, fontSize=10.5, leading=14, textColor=MUTED)
S_SMALL  = st(fontSize=9.4, leading=12.6)
S_ITAL   = st(fontName=SERIF_I, fontSize=9.8, leading=13, textColor=MUTED)
S_BUL    = st(fontSize=9.4, leading=12.4, leftIndent=13, firstLineIndent=-13)
S_BULS   = st(fontSize=9.1, leading=12.0, leftIndent=13, firstLineIndent=-13)
S_STEPH  = st(fontName=SANS_B, fontSize=10.2, leading=13, textColor=NAVY)
S_STEPP  = st(fontSize=9.4, leading=12.6)
S_CALL   = st(fontSize=9.6, leading=13.2, textColor=CREAM)
S_NOTE   = st(fontName=SERIF, fontSize=10.6, leading=14.6, textColor=INK)
S_FINE   = st(fontSize=7.7, leading=10.2, textColor=MUTED)

DOT = '<font color="#a8874f">•</font>&nbsp;&nbsp;'


def para(c, text, style, x, y, w):
    """Draw a paragraph with its TOP at y. Return the new y (bottom)."""
    p = Paragraph(text, style)
    _, h = p.wrap(w, 10000)
    p.drawOn(c, x, y - h)
    return y - h


def bullets(c, items, x, y, w, style=S_BUL, gap=3.0):
    for it in items:
        y = para(c, DOT + it, style, x, y, w) - gap
    return y


def heading(c, text, y, w=CW, x=M):
    """Serif section heading with a gold rule under it."""
    c.setFillColor(NAVY)
    c.setFont(SERIF_B, 12.6)
    c.drawString(x, y - 12.6, text)
    ry = y - 12.6 - 5.5
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.3)
    c.line(x, ry, x + w, ry)
    return ry - 9.5


def rrect(c, x, y, w, h, fill=None, stroke=None, lw=1.0, r=8):
    if fill:
        c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(lw)
    c.roundRect(x, y, w, h, r, stroke=1 if stroke else 0, fill=1 if fill else 0)


def tracked(c, text, x, y, font, size, color, space):
    c.saveState()
    t = c.beginText(x, y)
    t.setFont(font, size)
    t.setFillColor(color)
    t.setCharSpace(space)
    t.textOut(text)
    c.drawText(t)
    c._charSpace = 0
    c.restoreState()


def footer(c, page):
    y = 30
    c.setStrokeColor(RULE)
    c.setLineWidth(0.8)
    c.line(M, y + 10, W - M, y + 10)
    c.setFont(SANS, 7.4)
    c.setFillColor(MUTED)
    c.drawString(M, y, 'Robert Zeravica, DC  ·  Sleep & Airway')
    c.drawRightString(W - M, y, 'Page %d of 2' % page)


# --------------------------------------------------------------------------- #
def build(path, logo, phone):
    c = canvasmod.Canvas(path, pagesize=letter)
    c.setTitle('Sleep & Airway Care — Robert Zeravica, DC')
    c.setAuthor('Robert Zeravica, DC')
    c.setSubject('Patient overview of sleep and airway services')

    # ============================ PAGE 1 ============================
    band_h = 92.0
    c.setFillColor(NAVY)
    c.rect(0, H - band_h, W, band_h, stroke=0, fill=1)
    c.drawImage(logo, M, H - band_h + 19, 54, 54, mask=None)
    c.setFillColor(WHITE)
    c.setFont(SERIF, 21)
    c.drawString(M + 70, H - band_h + 52, 'Robert Zeravica, DC')
    tracked(c, 'SLEEP & AIRWAY  ·  SKULL-DOWN, SLEEP-FIRST',
            M + 70, H - band_h + 32, SANS_B, 7.6, GOLDS, 1.7)

    y = H - band_h - 26
    c.setFillColor(NAVY)
    c.setFont(SERIF_B, 19)
    c.drawString(M, y - 19, 'Sleep & Airway Care — what it is and how it works')
    y = y - 19 - 6
    y = para(c, 'A plain-English overview for anyone wondering whether this applies to them.',
             S_DEK, M, y, CW) - 12

    y = heading(c, 'The short version', y)
    y = para(c, 'Most people are told their snoring or exhaustion is a lung problem, a weight '
                'problem, or just getting older. I start somewhere else: <b>the structure around '
                'your airway</b> — your skull, jaw, tongue posture, neck, and the way you hold '
                'your head.', S_LEAD, M, y, CW) - 7
    y = para(c, 'The upper airway is the one part of your breathing passage with no bones holding '
                'it open. It stays open because of muscle tone and because of the structures around '
                'it. When that structure crowds the airway, breathing at night gets harder — '
                'and you feel it the next day.', S_BODY, M, y, CW) - 7
    y = para(c, 'That structural layer is what I work on. It is not a replacement for sleep '
                'medicine. It is the piece the conversation usually skips.', S_BODY, M, y, CW) - 14

    y = heading(c, 'This may be worth a conversation if you', y)
    colw = (CW - 26) / 2
    left = ['Snore, or your partner says you stop breathing',
            'Wake up gasping, choking, or with a dry mouth',
            'Wake up tired no matter how long you slept',
            'Get morning headaches',
            'Grind or clench your teeth']
    right = ['Breathe through your mouth, day or night',
             'Are on CPAP and struggling with it — or gave up',
             'Feel foggy, irritable, or wiped out all afternoon',
             'Have a jaw that clicks, locks, or hurts']
    y1 = bullets(c, left, M, y, colw)
    y2 = bullets(c, right, M + colw + 26, y, colw)
    y = min(y1, y2) - 4
    y = para(c, "You don't need all of these. One or two is reason enough to look.",
             S_ITAL, M, y, CW) - 14

    y = heading(c, 'How it actually works', y)
    steps = [
        ('1', 'We talk — free, no pressure.',
         "A short conversation about your sleep, your breathing, and what's been going on. If this "
         "isn't your problem, I'll tell you that and point you somewhere better."),
        ('2', 'Structural airway exam.',
         'A hands-on look at the structure around your airway — jaw, cranium, neck, posture, '
         'tongue position, how you hold your head. Plus the standard sleep screening questionnaires.'),
        ('3', "Home sleep test, if it's warranted.",
         'You sleep in your own bed with a small device. The data goes to a <b>board-certified '
         'physician</b>, who reads it and makes the call. This is the objective piece — for '
         "sleep and breathing it's what an X-ray is for a spine."),
        ('4', 'Report of findings.',
         'We sit down and go through all of it — your history, the exam, the sleep study, the '
         'imaging if we did any — and I tell you honestly what I see, what I can help with '
         'structurally, and who else you may need on your team.'),
    ]
    tx = M + 30
    tw = CW - 30
    for i, (num, head, textv) in enumerate(steps):
        if i:
            c.setStrokeColor(RULE)
            c.setLineWidth(0.8)
            c.line(M, y, W - M, y)
            y -= 8
        c.setFillColor(GOLD)
        c.setFont(SERIF_B, 18)
        c.drawString(M, y - 14, num)
        yy = para(c, head, S_STEPH, tx, y, tw) - 2
        yy = para(c, textv, S_STEPP, tx, yy, tw)
        y = yy - 8

    footer(c, 1)
    c.showPage()

    # ============================ PAGE 2 ============================
    y = H - 56
    y = heading(c, "What I do — and what I don't", y) - 2

    do = ['Look at the structure around your airway and how it may be affecting your breathing at night',
          'Screen you properly, with real questionnaires and a real exam',
          'Arrange a home sleep test that a physician reads',
          'Provide structural chiropractic care aimed at that structure',
          'Explain your results in language you can actually use',
          'Coordinate with your physician, dentist, or ENT']
    dont = ['<b>Diagnose sleep apnea.</b> A physician does that. I am a chiropractor; my role is structural.',
            'Treat sleep apnea as a medical condition, or tell you to stop a treatment another doctor prescribed',
            'Tell you to abandon your CPAP or your oral appliance. If those are helping you, keep using them. '
            'I work alongside them.',
            'Promise a cure, a number, or a guaranteed result. Anyone who promises you that is selling something.']

    bw = (CW - 18) / 2
    pad = 14

    def measure(items, head):
        h = 4 + 14  # top pad + heading
        for it in items:
            p = Paragraph(DOT + it, S_BULS)
            h += p.wrap(bw - 2 * pad, 10000)[1] + 3
        return h + pad + 4

    bh = max(measure(do, 'I do'), measure(dont, "I don't")) + pad

    for idx, (items, head, bg) in enumerate([(do, 'I do', TINT), (dont, "I don't", WHITE)]):
        bx = M + idx * (bw + 18)
        rrect(c, bx, y - bh, bw, bh, fill=bg, stroke=RULE, lw=0.9, r=8)
        c.setFillColor(NAVY)
        c.setFont(SERIF_B, 11.4)
        c.drawString(bx + pad, y - pad - 11.4, head)
        by = y - pad - 11.4 - 8
        bullets(c, items, bx + pad, by, bw - 2 * pad, style=S_BULS)
    y = y - bh - 15

    # Cost callout
    cost_txt = ("The first conversation is free. If we go further, I'll walk you through exactly what "
                "each step costs and what your insurance may or may not cover <b><font color='#ffffff'>"
                "before</font></b> you commit to anything. No surprises, and no one gets pressured "
                "into a plan they didn't ask for.")
    cp = Paragraph(cost_txt, S_CALL)
    ch = cp.wrap(CW - 40, 10000)[1]
    box_h = ch + 20 + 16 + 22
    rrect(c, M, y - box_h, CW, box_h, fill=NAVY, r=9)
    c.setFillColor(WHITE)
    c.setFont(SERIF, 12)
    c.drawString(M + 20, y - 16 - 12, 'Cost')
    cp.drawOn(c, M + 20, y - box_h + 16)
    y = y - box_h - 15

    # How to start
    rows = [('CALL OR TEXT', phone, True), ('EMAIL', 'DrZeravicaOffice@gmail.com', False),
            ('ONLINE', 'RobertZeravica.com', False)]
    hs_h = 16 + 14 + 6 + 13 + 10 + len(rows) * 17 + 12
    rrect(c, M, y - hs_h, CW, hs_h, fill=TINT, stroke=GOLD, lw=1.4, r=9)
    c.setFillColor(NAVY)
    c.setFont(SERIF_B, 14)
    c.drawString(M + 22, y - 18 - 14, 'How to start')
    c.setFillColor(BODY)
    c.setFont(SANS, 9.8)
    c.drawString(M + 22, y - 18 - 14 - 15, "One short call. That's the whole first step.")
    ry = y - 18 - 14 - 15 - 19
    for lbl, val, placeholder in rows:
        tracked(c, lbl, M + 22, ry, SANS_B, 7.6, GOLD, 1.3)
        if placeholder:
            c.setFillColor(HexColor('#b0873a'))
            c.setFont(SANS_B, 9.0)
            c.drawString(M + 128, ry, val)
            c.setStrokeColor(GOLD)
            c.setLineWidth(1.1)
            c.setDash(1, 2)
            c.line(M + 128, ry - 3.5, M + 128 + max(150, c.stringWidth(val, SANS_B, 9.0)), ry - 3.5)
            c.setDash()
        else:
            c.setFillColor(INK)
            c.setFont(SANS_B, 10.2)
            c.drawString(M + 128, ry, val)
        ry -= 17
    y = y - hs_h - 14

    # A note from me
    note_txt = ("I went through my own sleep test before I ever asked a patient to. I know what it's "
                "like to be tired for years and be told that's just how it is. If you're wondering "
                "whether any of this applies to you, ask me — that part costs you nothing but "
                "the phone call.")
    np_ = Paragraph(note_txt, S_NOTE)
    nh = np_.wrap(CW - 34, 10000)[1]
    nbox = 13 + 10 + 6 + nh + 17 + 13
    rrect(c, M, y - nbox, CW, nbox, fill=TINT, r=6)
    c.setFillColor(GOLD)
    c.rect(M, y - nbox, 3, nbox, stroke=0, fill=1)
    tracked(c, 'A NOTE FROM ME', M + 20, y - 13 - 8, SANS_B, 7.6, GOLD, 1.6)
    np_.drawOn(c, M + 20, y - 13 - 8 - 8 - nh)
    c.setFillColor(NAVY)
    c.setFont(SERIF, 10.4)
    c.drawString(M + 20, y - nbox + 13, '— Robert Zeravica, DC')
    y = y - nbox - 13

    y = para(c, '<para alignment="center">Feel free to forward this to anyone who might need it.</para>',
             st(fontName=SERIF_I, fontSize=10.2, leading=13.6, textColor=MUTED), M, y, CW) - 12

    c.setStrokeColor(RULE)
    c.setLineWidth(0.8)
    c.line(M, y, W - M, y)
    y -= 9
    para(c, 'Chiropractic care for sleep and airway concerns is structural and collaborative. '
            'Chiropractors do not diagnose or treat obstructive sleep apnea; diagnosis is made by a '
            'physician. This material is general education, not medical advice, and does not create '
            "a doctor-patient relationship or address any individual's condition. No specific "
            'outcome, result, or cure is claimed or guaranteed. If you are having a medical '
            'emergency, call 911.', S_FINE, M, y, CW)

    footer(c, 2)
    c.showPage()
    c.save()


if __name__ == '__main__':
    import sys
    build(sys.argv[1], sys.argv[2], sys.argv[3])
