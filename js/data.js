// All CV content lives here. Edit this file to update the site.

export const profile = {
  name: 'Luca du Toit',
  role: 'Junior Software Developer',
  location: 'Cape Town, South Africa',
  about:
    'Creative and motivated student who loves solving problems efficiently through code. A team player looking for an opportunity where I can contribute while learning and growing.',
  email: 'me@lucadutoit.co.za',
  github: 'https://github.com/lucadutoit',
  website: 'https://lucadutoit.co.za',
  cv: 'Luca-du-Toit-CV.pdf'
};

export const stats = [
  { value: 15, label: 'Distinctions at Eduvos' },
  { value: 29, label: 'Modules completed' },
  { value: 93, suffix: '%', label: 'Top third-year mark' },
  { value: 2, label: 'Golden Key invitations' }
];

export const experience = [
  {
    title: 'IT Helpdesk Assistant',
    org: 'Beco Bearings',
    place: 'Cape Town',
    dates: 'Jun 2022 – Nov 2023',
    points: [
      'Installed, configured, and updated business software across employee workstations.',
      'Troubleshot basic on-site network connectivity issues and maintained office hardware (printers, routers, and PCs).'
    ]
  }
];

export const education = [
  {
    title: 'BSc Information Technology – Software Development (Java)',
    org: 'Eduvos',
    place: 'Tyger Valley, Cape Town',
    dates: '2024 – Present',
    points: [
      '15 distinctions from 29 modules so far, including third-year Web Development & e-Commerce (93%), Object Oriented Systems Analysis & Design (84%) and Enterprise Programming in Java (81%).',
      'Invited to join the Golden Key International Honour Society for academic excellence in both 2025 and 2026.'
    ]
  },
  {
    title: 'National Senior Certificate (Matric)',
    org: 'Elkanah House',
    place: 'Sunningdale, Cape Town',
    dates: '2017 – 2021',
    points: [
      'Distinction (81%) in Engineering Graphics & Design: CAD (Paper 3), an optional extra IEB paper.',
      'Attended Elkanah House on a rugby scholarship.'
    ]
  }
];

export const projects = [
  {
    title: 'Audio Codec Battery Usage App',
    year: '2026',
    kind: 'University group project',
    description:
      'An Android app that measures battery drain during MP3, AAC, Opus and FLAC playback. The results were analysed in Python using ANOVA and Tukey tests, with charts.',
    tags: ['Java', 'Android', 'Python', 'Data analysis'],
    link: 'https://github.com/lucadutoit/miniature-journey'
  },
  {
    title: 'SwiftSwap: C2C Marketplace',
    year: '2026',
    kind: 'University project',
    description:
      'A consumer-to-consumer marketplace where users list, search and buy items, message sellers and arrange safe meetups. Includes SA ID verification (hashed), an escrow wallet, reviews and an admin panel.',
    tags: ['PHP 8.2', 'MySQL', 'JavaScript', 'Docker'],
    link: 'https://github.com/lucadutoit/jubilant-eureka'
  }
];

export const skills = [
  { name: 'Java', level: 4 },
  { name: 'Python', level: 3 },
  { name: 'HTML + CSS', level: 3 },
  { name: 'PHP', level: 3 },
  { name: 'C#', level: 2 },
  { name: 'SQL', level: 2 }
];

export const strengths = ['Problem-solving', 'Teamwork', 'Communication', 'Time management'];

export const languages = [
  { name: 'English', level: 5 },
  { name: 'Afrikaans', level: 3 }
];

export const achievements = [
  { text: 'IT Specialist certification: Python (Certiport / Pearson)', year: '2023' },
  { text: 'First-team cricket, hockey, swimming and rugby (high school)', year: '2021' }
];

export const interests = ['Cricket', 'Hiking and nature walks', 'Video games'];
