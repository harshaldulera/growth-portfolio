export const SITE = {
  name: 'Harshal Dulera',
  role: 'Growth Operator',
  headline: 'Building creator acquisition systems at The5ers.',
  focus: ['Creator Partnerships', 'Growth Operations', 'Marketing Systems'] as const,
  about: [
    'Growth operator focused on creator partnerships, growth operations, and acquisition systems.',
    'Currently building creator acquisition at The5ers while helping startups design growth processes.',
  ] as const,
  email: 'harshaldulera02@gmail.com',
  resumeUrl: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/harshal-dulera',
    instagram: 'https://instagram.com/harshal.dulera',
    twitter: 'https://x.com/harshal0x01',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
