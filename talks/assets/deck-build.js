const pptxgen = require('pptxgenjs');
const path = require('path');

const REPO = '/home/user/ChiroSleepAcademy';
const IMG_NIGHT = path.join(REPO, 'talks/assets/airway-night.png');
const IMG_AIRWAY = path.join(REPO, 'talks/assets/open-vs-narrowed.png');

// Palette pulled from Robert's own images
const INK      = '0A1626'; // deep navy, near black
const INK2     = '112A44'; // lifted navy
const GOLD     = 'E3A857'; // the glow
const GOLD_DIM = '8A6534';
const CREAM    = 'F4F1EA';
const MUTED    = '93A7BC';

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9'; // 10 x 5.625
pres.author = 'Dr. Robert Zeravica, DC';
pres.title  = 'Three Things That Keep You In Alignment';

const W = 10, H = 5.625, M = 0.62;

function dark(s) {
  s.background = { color: INK };
}

// giant translucent numeral, the repeating motif
function numeral(s, txt, x, y) {
  s.addText(txt, {
    x, y, w: 2.6, h: 2.2, margin: 0,
    fontFace: 'Cambria', fontSize: 150, bold: true,
    color: INK2, align: 'left', valign: 'middle',
  });
}

/* ---------------------------------------------------------- 1. COLD OPEN */
let s = pres.addSlide();
dark(s);
s.addImage({ path: IMG_NIGHT, x: 0, y: 0, w: W, h: H });
s.addNotes(
  'HOLD IN SILENCE FOR 3 SECONDS BEFORE SPEAKING.\n\n' +
  '"I am a chiropractor. For twenty years my job has been to look at a person and see what is carrying weight the wrong way.\n\n' +
  'Some of you were here last time. Last time I showed you the pipe — the nose, the skull, the airway, and the fact that almost nobody checks whether it is bent.\n\n' +
  'Tonight is the other half. Not what it is. What to do about it."\n\n' +
  'CALLBACK DONE. Do not re-teach the pipe.'
);

/* ------------------------------------------------------- 2. THE FRAME */
s = pres.addSlide();
dark(s);
s.addText('GEOMETRY GOVERNS BREATH.', {
  x: M, y: 1.75, w: W - M * 2, h: 0.78, margin: 0,
  fontFace: 'Cambria', fontSize: 40, bold: true, color: CREAM, align: 'left',
});
s.addText('BREATH GOVERNS SLEEP.', {
  x: M, y: 2.55, w: W - M * 2, h: 0.85, margin: 0,
  fontFace: 'Cambria', fontSize: 40, bold: true, color: GOLD, align: 'left',
});
s.addText('DR. ROBERT ZERAVICA, DC', {
  x: M, y: 4.35, w: W - M * 2, h: 0.35, margin: 0,
  fontFace: 'Calibri', fontSize: 13, color: MUTED, charSpacing: 3, align: 'left',
});
s.addNotes(
  'Say the line out loud as this comes up.\n\n' +
  '"The shape you are built in decides how you breathe. How you breathe decides how you sleep. And how you sleep decides almost everything else."\n\n' +
  'Then: sleep is not rest, sleep is work. Brain clears, body repairs, hormones reset — only if it goes deep, and it only goes deep if you are breathing well.\n\n' +
  'SCOPE LINE HERE: "I do not diagnose sleep apnea. No chiropractor does. A medical doctor does. My lane is the structure around the airway. Tonight I am teaching, not treating."'
);

/* ------------------------------------------------- 3. THE THREE, UP FRONT */
s = pres.addSlide();
dark(s);
s.addText('THREE THINGS', {
  x: M, y: 0.62, w: W - M * 2, h: 0.4, margin: 0,
  fontFace: 'Calibri', fontSize: 13, color: GOLD, charSpacing: 4,
});
const three = [
  ['01', 'CLOSE YOUR\nMOUTH', 'Open the gate.'],
  ['02', 'LIFT YOUR\nHEAD', 'Straighten the pipe.'],
  ['03', 'FIND OUT', 'Measure it.'],
];
three.forEach(([n, t, sub], i) => {
  const x = M + i * 3.0;
  s.addText(n, {
    x, y: 1.35, w: 2.6, h: 0.7, margin: 0,
    fontFace: 'Cambria', fontSize: 44, bold: true, color: GOLD_DIM,
  });
  s.addText(t, {
    x, y: 2.15, w: 2.6, h: 1.2, margin: 0,
    fontFace: 'Cambria', fontSize: 27, bold: true, color: CREAM, lineSpacing: 30,
  });
  s.addText(sub, {
    x, y: 3.5, w: 2.6, h: 0.45, margin: 0,
    fontFace: 'Calibri', fontSize: 15, italic: true, color: MUTED,
  });
});
s.addText('Two are free and start tonight. The third is a phone call.', {
  x: M, y: 4.55, w: W - M * 2, h: 0.4, margin: 0,
  fontFace: 'Calibri', fontSize: 15, color: MUTED,
});
s.addNotes(
  '"So tonight, three things. Not ten. Three.\n\nOpen the gate. Straighten the pipe. Measure it.\n\n' +
  'Two of them are free and you can start tonight. The third is a phone call."\n\n' +
  'Then: "I am going to keep this tight, because I want real time for your questions."\n\n' +
  'CLOCK: leave this slide by 3:00.'
);

/* ------------------------------------------------ 4. SECTION — POINT ONE */
s = pres.addSlide();
dark(s);
numeral(s, '1', 0.45, 1.6);
s.addText('CLOSE YOUR MOUTH', {
  x: 3.1, y: 2.0, w: 6.3, h: 0.9, margin: 0,
  fontFace: 'Cambria', fontSize: 40, bold: true, color: CREAM,
});
s.addText('Open the gate.', {
  x: 3.1, y: 2.95, w: 6.3, h: 0.5, margin: 0,
  fontFace: 'Calibri', fontSize: 20, italic: true, color: GOLD,
});
s.addNotes(
  '3:00 - 7:00\n\n' +
  'LINE: "Your mouth is for eating and talking. Your nose is for breathing. Most people have those two jobs mixed up."\n\n' +
  'WHY (90 sec):\n' +
  '- Nose warms, cleans, wets the air. Mouth does none of it — cold, dry, dirty air straight down.\n' +
  '- The nose is the FIRST GATE and it is meant to be tight. That resistance is not a fault. Mouth breathing is like taking the door off the house because the door slowed you down.\n' +
  '- Nose breathing puts the TONGUE UP on the roof of the mouth, which helps hold the airway open behind it. Mouth open -> tongue drops back -> airway narrows.\n\n' +
  'OPTIONAL CALLBACK (one line only): "Last time I read you the line from Genesis — breathed into his nostrils. Not the mouth."'
);

/* ------------------------------------------- 5. POINT ONE — IS IT YOU? */
s = pres.addSlide();
dark(s);
s.addText('IS IT YOU?', {
  x: M, y: 0.65, w: 4.6, h: 0.6, margin: 0,
  fontFace: 'Cambria', fontSize: 30, bold: true, color: CREAM,
});
s.addText(
  [
    { text: 'Dry mouth in the morning', options: { bullet: true, breakLine: true } },
    { text: 'Sore or scratchy throat', options: { bullet: true, breakLine: true } },
    { text: 'Waking up thirsty', options: { bullet: true, breakLine: true } },
    { text: 'Drool on the pillow', options: { bullet: true, breakLine: true } },
    { text: 'Ask whoever sleeps next to you', options: { bullet: true } },
  ],
  {
    x: M, y: 1.5, w: 4.6, h: 2.4, margin: 0,
    fontFace: 'Calibri', fontSize: 19, color: CREAM, paraSpaceAfter: 10,
  }
);
s.addShape(pres.ShapeType.roundRect, {
  x: 5.55, y: 1.35, w: 3.83, h: 2.75, rectRadius: 0.08,
  fill: { color: INK2 },
});
s.addText('TONIGHT', {
  x: 5.9, y: 1.62, w: 3.2, h: 0.35, margin: 0,
  fontFace: 'Calibri', fontSize: 12, color: GOLD, charSpacing: 4,
});
s.addText('Walk 30–40 minutes\nwith your mouth closed.', {
  x: 5.9, y: 2.05, w: 3.2, h: 1.0, margin: 0,
  fontFace: 'Cambria', fontSize: 19, bold: true, color: CREAM, lineSpacing: 25,
});
s.addText('If you cannot hold it on a slow walk,\nyou will not hold it asleep.', {
  x: 5.9, y: 3.15, w: 3.2, h: 0.7, margin: 0,
  fontFace: 'Calibri', fontSize: 13, italic: true, color: MUTED, lineSpacing: 17,
});
s.addText('Do not tape your mouth shut at night until you know whether you have untreated sleep apnea.', {
  x: M, y: 4.45, w: W - M * 2, h: 0.6, margin: 0,
  fontFace: 'Calibri', fontSize: 13, color: GOLD,
});
s.addNotes(
  'Read the signs SLOWLY. People are checking themselves.\n\n' +
  'On the warning, say it out loud: "Do not tape your mouth shut because you saw it online. Not until you know whether you have untreated sleep apnea. Taping over a real problem is covering the alarm, not putting out the fire. Point three tells you how to find out."\n\n' +
  'If the nose feels too small for the job, that is usually because it has not been used in years. Easier in about two weeks.\n\n' +
  'LAND IT: "That is the gate. It is free, it starts tonight, and you have been walking around with it open."'
);

/* ------------------------------------------------ 6. SECTION — POINT TWO */
s = pres.addSlide();
dark(s);
numeral(s, '2', 0.45, 1.6);
s.addText('LIFT YOUR HEAD', {
  x: 3.1, y: 2.0, w: 6.3, h: 0.9, margin: 0,
  fontFace: 'Cambria', fontSize: 40, bold: true, color: CREAM,
});
s.addText('Straighten the pipe.', {
  x: 3.1, y: 2.95, w: 6.3, h: 0.5, margin: 0,
  fontFace: 'Calibri', fontSize: 20, italic: true, color: GOLD,
});
s.addNotes(
  '7:00 - 11:00\n\n' +
  'LINE: "Your head weighs about five kilos. Every centimeter it drifts forward, your neck carries it like it weighs more."\n\n' +
  'THE BIG IDEA — say this slowly:\n' +
  '- The airway is NOT just a tube. It is held open, or squeezed shut, by everything around it: bone, soft tissue, your tongue, your jaw, the position of your neck, even how wound up your nervous system is.\n' +
  '- The bones of your face are not decoration. They are the architecture your breath moves through.\n' +
  '- It runs the whole way up: feet, hips, spine, ribs, neck, jaw, palate, skull.\n\n' +
  'Then: put a phone in that system. Head forward, neck bends, throat narrows. NEXT SLIDE SHOWS IT.'
);

/* --------------------------------------------- 7. THE TEACHING IMAGE */
s = pres.addSlide();
s.background = { color: CREAM };
s.addImage({ path: IMG_AIRWAY, x: 1.72, y: 0.1, w: 6.56, h: 4.92 });
s.addText('Your posture and your breathing are the same subject.', {
  x: M, y: 5.06, w: W - M * 2, h: 0.4, margin: 0,
  fontFace: 'Calibri', fontSize: 15, italic: true, color: '3C4A5A', align: 'center',
});
s.addNotes(
  'THE MONEY SLIDE. Let them look before you talk.\n\n' +
  '"When the head goes forward, the neck bends and the space at the front of your throat gets smaller. Your posture and your breathing are the same subject. I cannot separate them and neither can you."\n\n' +
  'CALLBACK: "This is the kink I showed you last time. And it is the one you are doing to yourself right now, looking down at a phone."\n\n' +
  'PRINT THIS ONE. It works on stage even with no screen.'
);

/* --------------------------------------------- 8. POINT TWO — WHAT TO DO */
s = pres.addSlide();
dark(s);
s.addText('WHAT TO DO', {
  x: M, y: 0.65, w: 6, h: 0.6, margin: 0,
  fontFace: 'Cambria', fontSize: 30, bold: true, color: CREAM,
});
const todo = [
  ['Screen to eye level', 'Phone off your lap. Biggest one, costs nothing.'],
  ['Walk every day', 'The spine has no pump. Discs feed on movement.'],
  ['Long exhale before bed', 'Out longer than in. Five minutes. Same routine nightly.'],
  ['Notice your jaw', 'Clicking, morning tightness, worn teeth. It sits on the airway.'],
];
todo.forEach(([t, d], i) => {
  const y = 1.45 + i * 0.85;
  s.addText(String(i + 1), {
    x: M, y, w: 0.45, h: 0.5, margin: 0,
    fontFace: 'Cambria', fontSize: 24, bold: true, color: GOLD_DIM,
  });
  s.addText(t, {
    x: M + 0.55, y: y - 0.03, w: 3.5, h: 0.4, margin: 0,
    fontFace: 'Cambria', fontSize: 20, bold: true, color: CREAM,
  });
  s.addText(d, {
    x: M + 4.15, y: y + 0.02, w: 4.6, h: 0.5, margin: 0,
    fontFace: 'Calibri', fontSize: 14, color: MUTED,
  });
});
s.addNotes(
  'Keep this brisk — four items, about 90 seconds total.\n\n' +
  'On walking: "I am not going to tell you to stand up every thirty minutes. Nobody does that in real life. Walk."\n\n' +
  'LAND IT: "Bodies take the shape you hold most. That is not a character flaw, that is how tissue works. But it does mean the shape you hold most is a choice — even when it does not feel like you are choosing."'
);

/* ---------------------------------------------- 9. SECTION — POINT THREE */
s = pres.addSlide();
dark(s);
numeral(s, '3', 0.45, 1.6);
s.addText('FIND OUT', {
  x: 3.1, y: 2.0, w: 6.3, h: 0.9, margin: 0,
  fontFace: 'Cambria', fontSize: 40, bold: true, color: CREAM,
});
s.addText('Measure it.', {
  x: 3.1, y: 2.95, w: 6.3, h: 0.5, margin: 0,
  fontFace: 'Calibri', fontSize: 20, italic: true, color: GOLD,
});
s.addNotes(
  '11:00 - 15:00\n\n' +
  'LINE: "Snoring is not a personality. It is the sound of tissue shaking in a narrow airway. It is information."\n\n' +
  'Next slide: read the signs slowly. People are checking themselves and their partner.'
);

/* ------------------------------------------------------ 10. THE SIGNS */
s = pres.addSlide();
dark(s);
s.addText('GO FIND OUT IF', {
  x: M, y: 0.65, w: 6, h: 0.6, margin: 0,
  fontFace: 'Cambria', fontSize: 30, bold: true, color: CREAM,
});
const signsL = [
  'You snore loudly',
  'Someone has watched you stop breathing',
  'You gasp or choke awake',
  'You wake up tired after a full night',
];
const signsR = [
  'You get morning headaches',
  'You fall asleep in the daytime',
  'Your blood pressure will not come down',
];
[[signsL, M], [signsR, 5.25]].forEach(([list, x]) => {
  s.addText(
    list.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < list.length - 1 } })),
    {
      x, y: 1.5, w: 4.05, h: 2.4, margin: 0,
      fontFace: 'Calibri', fontSize: 16, color: CREAM, paraSpaceAfter: 12,
    }
  );
});
s.addText('Two or three of those is not a sleep habit. It is a question that needs an answer.', {
  x: M, y: 4.3, w: W - M * 2, h: 0.7, margin: 0,
  fontFace: 'Cambria', fontSize: 16, italic: true, color: GOLD,
});
s.addNotes(
  'Read these SLOWLY. This is the slide people photograph.\n\n' +
  'Then the two ways to measure:\n\n' +
  'CHEAP, TONIGHT: a ring, a band, or a phone app. Any of them. Every night matters more than the brand. Watch the TREND, not one night. It is a mirror, not a medical test.\n\n' +
  'REAL: a home sleep test. Small device comes to your house, you wear it one night in your own bed, a doctor reads it. "I do not read it and I do not diagnose it. A medical doctor does. I read the structure."\n\n' +
  'CPAP, oral devices, surgery WORK for the right people. Do not attack them.\n' +
  'CALLBACK: "Same as last time. I am not throwing rocks at the mask. I do not have to."'
);

/* --------------------------------------- 11. WHY NOT WAIT (the best line) */
s = pres.addSlide();
dark(s);
s.addText('The system waits until you qualify.', {
  x: M, y: 1.55, w: W - M * 2, h: 0.7, margin: 0,
  fontFace: 'Cambria', fontSize: 32, bold: true, color: CREAM,
});
s.addText('A symptom. A diagnosis. A label.', {
  x: M, y: 2.3, w: W - M * 2, h: 0.6, margin: 0,
  fontFace: 'Calibri', fontSize: 22, color: MUTED,
});
s.addText('I start before you are anyone’s patient.', {
  x: M, y: 3.15, w: W - M * 2, h: 0.7, margin: 0,
  fontFace: 'Cambria', fontSize: 32, bold: true, color: GOLD,
});
s.addNotes(
  'Slow down here. This is your strongest line and they heard it last time as an idea — tonight it is the instruction.\n\n' +
  'Set it up first: "Pain and tiredness are LATE signals. Bodies cover. They borrow from one place to hide a loss in another, and they do it quietly. I feel fine is not proof — it means the cover-up is still holding."\n\n' +
  'LAND IT: "Get a picture while you feel good. Then look again later. A first measurement you never compare to is just a souvenir."'
);

/* ------------------------------------------------------- 12. THE RECAP */
s = pres.addSlide();
dark(s);
s.addText('THREE THINGS', {
  x: M, y: 0.62, w: W - M * 2, h: 0.4, margin: 0,
  fontFace: 'Calibri', fontSize: 13, color: GOLD, charSpacing: 4,
});
const recap = [
  ['CLOSE YOUR MOUTH', 'Open the gate.'],
  ['LIFT YOUR HEAD', 'Straighten the pipe.'],
  ['FIND OUT', 'Measure it.'],
];
recap.forEach(([t, sub], i) => {
  const y = 1.35 + i * 1.0;
  s.addText(String(i + 1), {
    x: M, y: y - 0.05, w: 0.5, h: 0.6, margin: 0,
    fontFace: 'Cambria', fontSize: 30, bold: true, color: GOLD_DIM,
  });
  s.addText(t, {
    x: M + 0.7, y: y - 0.08, w: 4.6, h: 0.55, margin: 0,
    fontFace: 'Cambria', fontSize: 30, bold: true, color: CREAM,
  });
  s.addText(sub, {
    x: M + 5.4, y: y + 0.02, w: 3.4, h: 0.45, margin: 0,
    fontFace: 'Calibri', fontSize: 17, italic: true, color: MUTED,
  });
});
s.addText('Two are free and start tonight.', {
  x: M, y: 4.5, w: W - M * 2, h: 0.4, margin: 0,
  fontFace: 'Calibri', fontSize: 16, color: MUTED,
});
s.addNotes(
  '15:00 - 17:00\n\n' +
  '"Two of those are free and they start tonight. Walk with your mouth closed. Get your screen up to eye level."\n\n' +
  'Then the one you chase them down the hall about: "If you snore, if you gasp, if somebody has watched you stop breathing, or if you wake up tired after a full night — go find out what is happening. Do not wait until you qualify for a label."\n\n' +
  '"You spend a third of your life doing this work. It is worth knowing whether you are doing it well."\n\n' +
  'Do NOT thank them yet. Straight into Q&A.'
);

/* ---------------------------------------------------------- 13. Q&A */
s = pres.addSlide();
dark(s);
s.addImage({ path: IMG_NIGHT, x: 0, y: 0, w: W, h: H, transparency: 72 });
s.addText('ASK ME ANYTHING', {
  x: M, y: 2.35, w: W - M * 2, h: 0.9, margin: 0,
  fontFace: 'Cambria', fontSize: 44, bold: true, color: CREAM, align: 'center',
});
s.addNotes(
  '17:00 - 27:00. TEN MINUTES. Open with: "Now. Ten minutes. Ask me anything."\n\n' +
  'NO MIC — THEY SHOUT. Six rules:\n' +
  '1. REPEAT EVERY QUESTION OUT LOUD. Every one. Recording only has my voice.\n' +
  '2. Name the order: "you, then you in blue, then the back."\n' +
  '3. WALK toward whoever is asking.\n' +
  '4. Did not hear it? "Say that again, louder." Never guess.\n' +
  '5. Call on the BACK of the room. Then wait.\n' +
  '6. About 45 seconds an answer.\n\n' +
  'Rambler: "Let me take a couple more and I will find you after" — then TURN MY BODY.\n' +
  'Say "last question" at 26:00.\n\n' +
  'If the room freezes, ask my own: "How do I know if I breathe through my mouth at night, when I am asleep for the whole thing?" — dry mouth, sore throat, thirsty, drool, ask your partner.\n\n' +
  'NEVER: cure claims, telling anyone to stop CPAP, attacking sleep doctors or dentists, promises about someone I have not examined.'
);

/* --------------------------------------------------- 14. LAST WORD */
s = pres.addSlide();
dark(s);
s.addText('Close your mouth.', {
  x: M, y: 1.4, w: W - M * 2, h: 0.62, margin: 0,
  fontFace: 'Cambria', fontSize: 34, bold: true, color: CREAM,
});
s.addText('Lift your head.', {
  x: M, y: 2.1, w: W - M * 2, h: 0.62, margin: 0,
  fontFace: 'Cambria', fontSize: 34, bold: true, color: CREAM,
});
s.addText('And if you snore, go find out why.', {
  x: M, y: 2.8, w: W - M * 2, h: 0.62, margin: 0,
  fontFace: 'Cambria', fontSize: 34, bold: true, color: GOLD,
});
s.addText('Dr. Robert Zeravica, DC   ·   ChiropracticSleepAcademy.net', {
  x: M, y: 4.5, w: W - M * 2, h: 0.4, margin: 0,
  fontFace: 'Calibri', fontSize: 14, color: MUTED,
});
s.addNotes(
  '27:00 - 28:00. Do NOT let Q&A be the ending.\n\n' +
  '"One last thing and I will let you go. Close your mouth. Lift your head. And if you snore, go find out why.\n\n' +
  'If any of that sounded like you, come find me after. It costs nothing to ask."\n\n' +
  'THANK VIT BY NAME. Stop.\n\n' +
  'After: take names on your phone. Anyone who mentions snoring, gasping, or waking tired is a real conversation. Follow up within two days.'
);

pres.writeFile({ fileName: '/tmp/claude-0/-home-user-ChiroSleepAcademy/ee34f5c2-f0e1-555c-a8f4-e965dff1dd88/scratchpad/deck/liberland-three-things.pptx' })
  .then(f => console.log('WROTE', f));
