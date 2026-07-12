import { ArrowUpRight } from 'lucide-react'
import { SITE, NAV_LINKS } from '@/constants/site'
import { FadeUp } from '@/animations/FadeUp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-padding section-spacing border-t border-border">
      <div className="container-wide">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5">
              <p className="text-2xl font-semibold tracking-tight mb-3">{SITE.name}</p>
              <p className="body-md max-w-sm">{SITE.tagline}</p>
            </div>

            <div className="md:col-span-3">
              <p className="label-sm mb-4">Navigation</p>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="label-sm mb-4">Connect</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-text-secondary hover:text-text transition-colors link-underline inline-flex items-center gap-1"
                  >
                    {SITE.email}
                    <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text transition-colors link-underline inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text transition-colors link-underline inline-flex items-center gap-1"
                  >
                    X
                    <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-sm text-text-secondary">
              © {year} {SITE.name}. All rights reserved.
            </p>
            <p className="text-sm text-text-secondary">
              Built with intention.
            </p>
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
