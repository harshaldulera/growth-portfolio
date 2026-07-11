export const SITE = {
  name: 'Harshal Dulera',
  role: 'Growth Operator',
  headline: 'Helping startups build scalable user acquisition systems.',
  tagline:
    'I design growth systems that combine creator partnerships, operations, automation, and experimentation to help startups grow efficiently.',
  email: 'harshaldulera02@gmail.com',
  resumeUrl: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/harshaldulera',
    twitter: 'https://x.com/harshal0x01',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
