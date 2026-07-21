export interface FeaturedWork {
  id: string
  title: string
  subtitle: string
  challenge: string
  built: string[]
  impact: string
  tags: string[]
}

export const FEATURED_WORK: FeaturedWork[] = [
  {
    id: 'creator-acquisition',
    title: 'Creator Acquisition',
    subtitle: 'The5ers',
    challenge: 'Needed a creator acquisition system that could run across multiple brands.',
    built: [
      'Creator sourcing framework',
      'Onboarding workflow',
      'Campaign operations',
      'Performance tracking',
      'Creator CRM',
    ],
    impact: 'A creator acquisition process used across The5ers and The5ers Futures.',
    tags: ['User Acquisition', 'Partnerships'],
  },
  {
    id: 'creator-crm',
    title: 'Creator CRM',
    subtitle: 'Designed & Built',
    challenge: 'Creator relationships lived in spreadsheets, DMs, and notes.',
    built: [
      'Active / inactive status',
      'Deliverables tracking',
      'Payments',
      'Campaign history',
      'Monthly performance',
    ],
    impact: 'Single source of truth for creator operations.',
    tags: ['CRM Design', 'Operations'],
  },
  {
    id: 'creator-growth-system',
    title: 'Creator Growth System',
    subtitle: 'Pipeline & Operations',
    challenge: 'No defined process for finding, evaluating, or managing creators.',
    built: [
      'Sourcing criteria',
      'Evaluation framework',
      'Stage-based tracking',
      'Campaign planning',
      'Review cycles',
    ],
    impact: 'Clear stages from discovery to active partnership.',
    tags: ['Growth Systems', 'Pipeline'],
  },
  {
    id: 'and-coffee',
    title: 'AND Coffee',
    subtitle: 'Growth Analysis',
    challenge: 'Local café growth beyond paid ads.',
    built: [
      'Community strategy',
      'Retention levers',
      'Brand positioning',
      'Local creator partnerships',
      'Experience as growth',
    ],
    impact: 'A growth map focused on community, retention, and experience.',
    tags: ['Strategy', 'Consulting'],
  },
]
