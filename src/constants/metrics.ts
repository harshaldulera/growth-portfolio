export interface Metric {
  value: number
  suffix?: string
  label: string
}

export const METRICS: Metric[] = [
  { value: 100, suffix: '+', label: 'Creators evaluated' },
  { value: 60, suffix: '+', label: 'Partnerships managed' },
  { value: 4, label: 'Brands supported' },
  { value: 1, label: 'Creator CRM built' },
]
