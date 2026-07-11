import { useEffect } from 'react'
import { NAV_LINKS } from '@/constants/site'

const SECTION_MAP: Record<string, string> = {
  '1': '#home',
  '2': '#work',
  '3': '#experience',
  '4': '#projects',
  '5': '#writing',
  '6': '#contact',
}

export function useKeyboardNav(onNavigate: (href: string) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.key >= '1' && e.key <= '6') {
        const href = SECTION_MAP[e.key]
        if (href) {
          e.preventDefault()
          onNavigate(href)
        }
      }

      if (e.key === '?' && e.shiftKey) {
        e.preventDefault()
        const shortcuts = NAV_LINKS.map((link, i) => `${i + 1} → ${link.label}`).join('\n')
        // eslint-disable-next-line no-alert
        alert(`Keyboard shortcuts:\n\n${shortcuts}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onNavigate])
}
