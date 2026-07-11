export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: string
  problem: string
  context: string
  approach: string
  execution: string
  outcome: string
  lessons: string
  tags: string[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'creator-acquisition-the5ers',
    title: 'Creator Acquisition at The5ers',
    subtitle: 'Building a repeatable creator channel for a prop trading firm',
    category: 'User Acquisition',
    problem:
      'The5ers needed a structured way to acquire users through trading creators — not one-off partnerships, but a system that could be run consistently across multiple brands.',
    context:
      'Prop trading is a niche space. The audience trusts creators who actually trade, not generic influencers. The challenge was finding the right creators, onboarding them properly, and managing relationships across The5ers, The5ers Futures, Trade Set Go, and Trade The Pool — each with different positioning.',
    approach:
      'I treated creator acquisition like building a product. Define the ideal creator profile, build a sourcing pipeline, create onboarding standards, and design the operational layer that keeps everything tracked.',
    execution:
      'Built creator sourcing systems to find and evaluate trading educators. Developed onboarding workflows, content strategies aligned with each brand, and campaign management processes. Managed active partnerships, tracked deliverables, and reported on performance monthly. Researched competitors to identify gaps and propose new initiatives.',
    outcome:
      'Creator partnerships became a structured acquisition channel with clear processes — from discovery to deliverable tracking to performance review. The team can see which creators are active, what\'s due, and how campaigns are performing without relying on memory or scattered spreadsheets.',
    lessons:
      'Creator acquisition only works when you treat it as operations, not outreach. The hard part isn\'t finding creators — it\'s building the system that keeps relationships, deliverables, and performance visible.',
    tags: ['User Acquisition', 'Creator Partnerships', 'Fintech', 'Trading'],
  },
  {
    id: 'creator-crm',
    title: 'Creator CRM',
    subtitle: 'An internal system built because off-the-shelf tools didn\'t fit',
    category: 'Marketing Operations',
    problem:
      'Creator relationships were spread across spreadsheets, messages, and notes. There was no single place to see who was active, what was owed, or how campaigns were performing.',
    context:
      'Standard CRMs are built for sales pipelines — not creator partnerships. Creator work is relationship-heavy, deliverable-driven, and spans months. I needed a tool that matched how the work actually happened.',
    approach:
      'Map the full creator lifecycle first — from discovery to onboarding to active partnership to inactive status. Then build a lightweight CRM around that workflow.',
    execution:
      'Designed and built the CRM from scratch. It tracks active and inactive creators, deliverables, payments, social links, campaign history, and monthly performance. Built it to be the single source of truth for the creator channel.',
    outcome:
      'The team has full visibility into creator operations. Follow-ups don\'t get missed. Deliverables are tracked. Performance is reviewable month over month. New initiatives can be planned with actual data instead of guesswork.',
    lessons:
      'When your workflow doesn\'t fit existing tools, build what you need. A simple system that matches your process beats a complex CRM that doesn\'t.',
    tags: ['CRM Design', 'Operations', 'Creator Management', 'Systems'],
  },
  {
    id: 'creator-growth-system',
    title: 'Creator Growth System',
    subtitle: 'End-to-end pipeline for finding, evaluating, and managing creators',
    category: 'Growth Systems',
    problem:
      'Without a defined process, creator sourcing was inconsistent. There was no standard for evaluating creators, no tracking for outreach, and no framework for planning campaigns.',
    context:
      'Scaling creator partnerships requires more than finding people with followers. You need criteria for fit, a way to track conversations, and a rhythm for campaign planning and review.',
    approach:
      'Break the work into stages: source, evaluate, onboard, manage, review. Document each stage so the process is repeatable — not dependent on one person\'s memory.',
    execution:
      'Built sourcing workflows to find trading creators across platforms. Created evaluation criteria based on audience fit, content quality, and alignment with brand positioning. Tracked outreach and onboarding status. Planned campaigns with clear deliverable expectations and review cycles.',
    outcome:
      'Creator operations became a defined system. Sourcing, evaluation, and campaign planning follow a consistent process. The team knows what stage each creator is in and what comes next.',
    lessons:
      'Growth systems aren\'t glamorous — they\'re the unsexy work of defining stages, setting criteria, and making sure nothing falls through the cracks. That\'s what makes a channel scalable.',
    tags: ['Growth Systems', 'Pipeline Design', 'Creator Sourcing', 'Operations'],
  },
  {
    id: 'growth-initiatives',
    title: 'Growth Initiatives',
    subtitle: 'Proposing and structuring new acquisition channels',
    category: 'Growth Strategy',
    problem:
      'Creator partnerships were the foundation, but the brands needed additional acquisition levers — programs and channels that could complement the creator work.',
    context:
      'Working across The5ers, The5ers Futures, Trade Set Go, and Trade The Pool meant thinking about growth at the portfolio level — not just one brand, but how initiatives could work across the ecosystem.',
    approach:
      'Research competitors, identify gaps, and propose structured initiatives — each with a clear hypothesis, target audience, and operational requirements.',
    execution:
      'Proposed and structured initiatives including a Creator Trading Competition, Trader Spotlight Program, Creator Mentorship Program, Trading House concept, email acquisition funnels, a creator lifecycle framework, influencer sourcing systems, and cross-brand creator strategy.',
    outcome:
      'Created a pipeline of growth ideas grounded in research and structured thinking — each initiative mapped to a specific acquisition problem rather than generic marketing activity.',
    lessons:
      'Good growth ideas come from understanding the market and the user — not from copying what worked elsewhere. Structure your proposals so they can be evaluated, resourced, and executed.',
    tags: ['Growth Strategy', 'Initiative Design', 'Cross-Brand', 'Research'],
  },
]
