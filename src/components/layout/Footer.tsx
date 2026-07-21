import { ArrowUpRight } from 'lucide-react'
import { SITE, NAV_LINKS } from '@/constants/site'
import { FadeUp } from '@/animations/FadeUp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-padding py-12 md:py-16 border-t border-border">
      <div className="container-wide">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="font-semibold tracking-tight mb-1">{SITE.name}</p>
              <p className="text-sm text-text-secondary">{SITE.role}</p>
            </div>

            <ul className="flex flex-wrap gap-6">
              {NAV_LINKS.filter((l) => l.href !== '#home').map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-6">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-text-secondary hover:text-text transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-text-secondary hover:text-text transition-colors"
              >
                X
                <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" />
              </a>
            </div>
          </div>

          <p className="mt-10 text-sm text-text-secondary">
            © {year} {SITE.name}
          </p>
        </FadeUp>
      </div>
    </footer>
  )
}
