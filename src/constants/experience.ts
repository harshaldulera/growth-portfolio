export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'the5ers',
    role: 'Content Strategist',
    company: 'The5ers',
    period: 'May 2026 — Present',
    description:
      'Building creator acquisition systems for a prop trading firm. The role sits at the intersection of partnerships, operations, and growth — finding creators, onboarding them, managing relationships, and designing the internal systems that make the channel repeatable.',
    highlights: [
      'Built creator acquisition and onboarding systems from scratch across The5ers, The5ers Futures and Trade Set Go',
      'Designed and built an internal Creator CRM to track active and inactive creators, deliverables, payments, social links, campaign history, and monthly performance',
      'Manage creator relationships, campaign execution, deliverable tracking, and performance reporting',
      'Research competitors and propose new growth initiatives — including creator competitions, spotlight programs, mentorship frameworks, and email acquisition funnels',
      'Develop creator content strategies and cross-brand partnership approaches',
    ],
  },
  {
    id: 'proof-of-you',
    role: 'Business Development',
    company: 'Proof Of You',
    period: 'Previous role',
    description:
      'Worked on the business development side of a fintech company — outbound prospecting, partnership development, and the operational work that keeps a sales pipeline moving.',
    highlights: [
      'Outbound prospecting and lead qualification for fintech partnerships',
      'CRM management and sales operations',
      'Partnership outreach and relationship development',
    ],
  },
  {
    id: 'deepcytes',
    role: 'Cyber Security Analyst',
    company: 'Deepcytes',
    period: 'Previous role',
    description:
      'Technical foundation in security research, penetration testing, and cloud infrastructure. This role shaped how I approach systems thinking — structured, methodical, and detail-oriented.',
    highlights: [
      'Penetration testing and cybersecurity research',
      'AI and cloud infrastructure work',
      'Analytical approach to complex technical problems',
    ],
  },
]
