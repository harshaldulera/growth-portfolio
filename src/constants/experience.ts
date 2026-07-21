export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  highlights: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'the5ers',
    role: 'Content Strategist',
    company: 'The5ers',
    period: 'May 2026 — Present',
    highlights: [
      'Built creator acquisition systems across multiple brands, making influencer sourcing and onboarding repeatable.',
      'Designed and implemented a Creator CRM to manage 60+ creator records, partnerships, deliverables, payments, and campaign history.',
      'Managed creator partnerships from outreach and negotiation to campaign execution and performance tracking.',
      'Researched competitors and proposed growth initiatives including creator competitions, mentorship programs, and email acquisition funnels.',
    ],
  },
  {
    id: 'proof-of-you',
    role: 'Business Development',
    company: 'Proof Of You',
    period: 'Apr 2026 - May 2026',
    highlights: [
      'Built outbound lead pipelines for fintech, trading, and Web3 companies.',
      'Executed personalized cold email and LinkedIn outreach to founders and decision-makers.',
      'Researched target accounts, qualified prospects, and supported partnership discussions and sales operations.',
    ],
  },
  {
    id: 'deepcytes',
    role: 'Cyber Security Analyst',
    company: 'Deepcytes',
    period: 'Jul 2023 - Jan 2024',
    highlights: [
      'Built cloud-based environments for penetration testing and red team engagements.',
      'Developed a BERT-powered API trained on dark web data to strengthen AI-driven cybersecurity analysis.',
      'Managed and scaled penetration testing engagements, delivering actionable insights to clients.',
    ],
  },
]
