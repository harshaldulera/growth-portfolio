import { Mail } from 'lucide-react'
import { SITE } from '@/constants/site'
import { FadeUp } from '@/animations/FadeUp'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function Contact() {
  return (
    <section id="contact" className="section-padding section-spacing">
      <div className="container-narrow">
        <FadeUp>
          <div className="text-center">
            <p className="label-sm mb-4">Contact</p>
            <h2 className="heading-md mb-4">Open to conversations.</h2>
            <p className="body-md max-w-md mx-auto mb-8">
              Growth, partnerships, marketing operations, or founder office roles.
            </p>
            <MagneticButton
              onClick={() => window.open(`mailto:${SITE.email}`, '_blank')}
            >
              <Mail size={16} strokeWidth={1.5} />
              {SITE.email}
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
