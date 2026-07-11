export interface ProjectSection {
  label: string
  content: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  sections: ProjectSection[]
  tags: string[]
  link?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'creator-crm',
    title: 'Creator CRM',
    subtitle: 'Internal tool for managing creator partnerships at scale',
    category: 'Growth Systems',
    sections: [
      {
        label: 'Problem',
        content:
          'Creator partnerships were managed across spreadsheets, DMs, and scattered notes. There was no visibility into who was active, what deliverables were due, or how creators were performing over time.',
      },
      {
        label: 'Solution',
        content:
          'Built a custom CRM designed specifically for creator operations — not adapted from a sales tool, but built around how creator partnerships actually work.',
      },
      {
        label: 'Features',
        content:
          'Tracks active and inactive creators, deliverables, payments, social links, campaign history, and monthly performance. Serves as the single source of truth for the entire creator channel.',
      },
      {
        label: 'Why I Built It',
        content:
          'Off-the-shelf CRMs don\'t understand creator workflows. Creator partnerships are long-term, deliverable-driven, and relationship-heavy. I needed a tool that matched the work — so I built one.',
      },
      {
        label: 'Lessons Learned',
        content:
          'The best internal tools come from living the problem daily. Building the CRM taught me that operations is an underrated growth skill — the system behind the channel matters as much as the channel itself.',
      },
    ],
    tags: ['CRM Design', 'React', 'Firebase', 'Operations'],
  },
  {
    id: 'creator-growth-system',
    title: 'Creator Growth System',
    subtitle: 'Operational framework for creator acquisition and management',
    category: 'Growth Systems',
    sections: [
      {
        label: 'Sourcing',
        content:
          'Built workflows to find trading creators across platforms — focusing on educators and traders whose audiences align with prop trading, not generic finance influencers.',
      },
      {
        label: 'Evaluation',
        content:
          'Defined criteria for creator fit: audience relevance, content quality, engagement patterns, and alignment with brand positioning across The5ers, The5ers Futures, Trade Set Go, and Trade The Pool.',
      },
      {
        label: 'Tracking',
        content:
          'Tracked every creator through stages — discovered, contacted, in conversation, onboarded, active, inactive. No creator fell through the cracks because the system made status visible.',
      },
      {
        label: 'Campaign Planning',
        content:
          'Planned campaigns with clear deliverable expectations, timelines, and review cycles. Each campaign tied back to a brand objective — not content for content\'s sake.',
      },
      {
        label: 'Operations',
        content:
          'Improved operations by connecting sourcing, CRM, deliverable tracking, and performance reporting into one workflow. The goal was repeatability — anyone on the team should be able to run the system.',
      },
    ],
    tags: ['Creator Management', 'Pipeline Design', 'Growth Operations'],
  },
  {
    id: 'and-coffee',
    title: 'AND Coffee Growth Analysis',
    subtitle: 'Consulting case study on local business growth strategy',
    category: 'Growth Strategy',
    sections: [
      {
        label: 'Context',
        content:
          'Analyzed the growth strategy of AND Coffee, a local café — breaking down how a physical business can grow through community, retention, and experience rather than paid advertising alone.',
      },
      {
        label: 'Community',
        content:
          'Evaluated how the café could build a local community around its space — repeat visitors, regulars, and word-of-mouth as primary growth drivers for a neighborhood business.',
      },
      {
        label: 'Customer Retention',
        content:
          'Mapped retention levers: consistency of experience, loyalty mechanics, and reasons for customers to return weekly rather than visit once.',
      },
      {
        label: 'Branding',
        content:
          'Assessed how brand identity — visual, tonal, and experiential — creates differentiation in a crowded local market where customers choose based on feel, not features.',
      },
      {
        label: 'Creator Marketing',
        content:
          'Explored how local creators and micro-influencers could drive awareness without the budget of national campaigns — focusing on authentic local partnerships over reach.',
      },
      {
        label: 'Customer Experience',
        content:
          'Identified experience as the core growth lever for a café — every touchpoint from ordering to ambiance affects whether someone comes back and tells others.',
      },
    ],
    tags: ['Consulting', 'Local Growth', 'Strategy', 'Analysis'],
  },
  {
    id: 'stakefit',
    title: 'StakeFit',
    subtitle: 'Fitness product with a focus on user engagement and growth',
    category: 'Product',
    sections: [
      {
        label: 'Problem',
        content:
          'Fitness apps struggle with retention — users sign up motivated but drop off when the experience doesn\'t keep them engaged or accountable over time.',
      },
      {
        label: 'My Contribution',
        content:
          'Contributed to product growth thinking and technical implementation — focusing on how to structure the user experience, engagement mechanics, and the systems that support consistent usage.',
      },
      {
        label: 'Technology',
        content:
          'Built with React, Node.js, and Firebase — combining frontend product work with backend infrastructure to create a functional, scalable application.',
      },
      {
        label: 'Impact',
        content:
          'Applied growth thinking to a product problem — treating retention and engagement as systems to design, not features to add. The project reinforced that technical skills and growth strategy work best together.',
      },
    ],
    tags: ['React', 'Node', 'Firebase', 'Product Growth'],
  },
]

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'growth systems', label: 'Growth Systems' },
  { id: 'growth strategy', label: 'Growth Strategy' },
  { id: 'product', label: 'Product' },
] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]['id']
