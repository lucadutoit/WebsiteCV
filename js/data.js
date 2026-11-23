// All site content lives here. Edit this file to update the site.
// Written for the web: short and personal. The full detail lives in the downloadable CV.

export const profile = {
  name: 'Luca du Toit',
  greeting: "Hi, I'm Luca.",
  // Age is worked out from birth year and month so it updates itself each year.
  // Only year and month are stored on purpose: a full date of birth shouldn't be public.
  born: { year: 2003, month: 3 },
  intro: "I'm a {age}-year-old software developer in Cape Town, in my third year of a BSc IT at Eduvos.",
  email: 'me@lucadutoit.co.za',
  github: 'https://github.com/lucadutoit',
  cv: 'Luca-du-Toit-CV.pdf'
};

export const work = [
  {
    title: 'Audio Codec Battery Study',
    blurb:
      'Does your music format drain your battery? Our team built an Android app to measure MP3, AAC, Opus and FLAC playback, then put the numbers through proper statistics in Python.',
    stack: 'Java · Android · Python',
    link: 'https://github.com/lucadutoit/miniature-journey'
  },
  {
    title: 'SwiftSwap',
    blurb:
      'A second-hand marketplace for buying and selling between people, with messaging, an escrow wallet, reviews and suggested safe meetup spots.',
    stack: 'PHP · MySQL · JavaScript · Docker',
    link: 'https://github.com/lucadutoit/jubilant-eureka'
  }
];

export const about =
  "Before university I spent a year and a half on the IT helpdesk at Beco Bearings, keeping software, networks and printers running for the office. Outside of code, you'll find me playing cricket, hiking or gaming.";

export const facts = [
  { value: 15, label: 'distinctions so far at Eduvos' },
  { value: 85, suffix: '%', label: 'average in programming modules' },
  { value: 2, suffix: '×', label: 'invited to the Golden Key Honour Society' }
];

export const timeline = [
  { when: 'Now', what: 'BSc IT, Software Development', where: 'Eduvos' },
  { when: '2022 – 23', what: 'IT Helpdesk Assistant', where: 'Beco Bearings' }
];

export const toolbox = ['Java', 'Python', 'PHP', 'SQL', 'C#', 'HTML & CSS'];
