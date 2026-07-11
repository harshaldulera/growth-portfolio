export interface WritingItem {
  id: string
  title: string
  excerpt: string
  category: 'article' | 'thought' | 'framework'
  date: string
  readTime: string
  link?: string
  comingSoon?: boolean
}

export const WRITING: WritingItem[] = [
  {
    id: 'zero-budget-growth',
    title: "How I'd Grow a Startup With $0",
    excerpt:
      'A practical framework for early-stage startups that need users but don\'t have a marketing budget — focusing on channels that cost time, not money.',
    category: 'framework',
    date: 'Coming soon',
    readTime: '—',
    comingSoon: true,
  },
  {
    id: 'systems-not-campaigns',
    title: 'Building Systems Instead of Campaigns',
    excerpt:
      'Why the best growth operators think in systems — and how to shift from running one-off campaigns to building repeatable acquisition channels.',
    category: 'thought',
    date: 'Coming soon',
    readTime: '—',
    comingSoon: true,
  },
  {
    id: 'creator-partnerships',
    title: 'Lessons From Managing Creator Partnerships',
    excerpt:
      'What I\'ve learned building and running creator acquisition systems — the operational realities that nobody talks about in growth content.',
    category: 'article',
    date: 'Coming soon',
    readTime: '—',
    comingSoon: true,
  },
  {
    id: 'operations-as-growth',
    title: 'Why Operations Is an Underrated Growth Skill',
    excerpt:
      'CRM design, deliverable tracking, and pipeline management aren\'t glamorous — but they\'re what make growth channels actually scale.',
    category: 'thought',
    date: 'Coming soon',
    readTime: '—',
    comingSoon: true,
  },
  {
    id: 'not-about-viral',
    title: "Growth Isn't About Going Viral",
    excerpt:
      'The startups that grow sustainably don\'t chase viral moments. They build systems — creator pipelines, retention loops, and operational infrastructure.',
    category: 'framework',
    date: 'Coming soon',
    readTime: '—',
    comingSoon: true,
  },
]

export const WRITING_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'article', label: 'Articles' },
  { id: 'thought', label: 'Thoughts' },
  { id: 'framework', label: 'Frameworks' },
] as const

export type WritingCategory = (typeof WRITING_CATEGORIES)[number]['id']
