export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'growth',
    label: 'Growth',
    skills: [
      'User Acquisition',
      'Partnerships',
      'Influencer Marketing',
      'Growth Strategy',
      'Marketing Operations',
      'CRM Design',
      'Creator Management',
      'Lifecycle Systems',
      'Campaign Management',
    ],
  },
  {
    id: 'business',
    label: 'Business',
    skills: ['Notion', 'Google Workspace', 'Excel', 'PowerPoint'],
  },
  {
    id: 'technical',
    label: 'Technical',
    skills: [
      'React',
      'TypeScript',
      'Node',
      'Firebase',
      'MongoDB',
      'Python',
      'Automation',
    ],
  },
]
