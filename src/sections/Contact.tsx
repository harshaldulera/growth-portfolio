import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE } from '@/constants/site'
import { FadeUp } from '@/animations/FadeUp'
import { MagneticButton } from '@/components/ui/MagneticButton'

interface ContactProps {
  onNavigate: (href: string) => void
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <section id="contact" className="section-padding section-spacing">
      <div className="container-narrow">
        <FadeUp>
          <div className="rounded-[var(--radius-card)] bg-bg-elevated border border-border p-8 md:p-12 lg:p-16 text-center shadow-[var(--shadow-card)]">
            <p className="label-sm mb-4">Contact</p>
            <h2 className="heading-md mb-4">
              Open to conversations.
            </h2>
            <p className="body-md max-w-lg mx-auto mb-8 md:mb-10">
              If you're hiring for growth, partnerships, marketing operations, or
              founder office roles — or building something early-stage and need
              someone who thinks in systems — reach out.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                onClick={() => window.open(`mailto:${SITE.email}`, '_blank')}
              >
                <Mail size={16} strokeWidth={1.5} />
                {SITE.email}
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                onClick={() => onNavigate('#work')}
              >
                View my work
              </MagneticButton>
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors link-underline"
              >
                LinkedIn
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors link-underline"
              >
                X
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
