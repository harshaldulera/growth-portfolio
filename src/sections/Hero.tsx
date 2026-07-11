import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { SITE } from '@/constants/site'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { TextReveal } from '@/animations/TextReveal'

interface HeroProps {
  onNavigate: (href: string) => void
}

export function Hero({ onNavigate }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        })
      }
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.5,
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32 pb-20 noise-bg"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label-sm mb-6 md:mb-8"
        >
          {SITE.name}
        </motion.p>

        <h1
          ref={titleRef}
          className="heading-xl text-balance max-w-4xl mb-6 md:mb-8"
        >
          {SITE.role}
          <br />
          <span className="text-text-secondary">
            <TextReveal text={SITE.headline} delay={0.6} />
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="body-lg max-w-2xl mb-10 md:mb-12"
        >
          {SITE.tagline}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton onClick={() => onNavigate('#work')}>
            View My Work
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => window.open(SITE.resumeUrl, '_blank')}
          >
            <FileText size={16} strokeWidth={1.5} />
            Download Resume
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => onNavigate('#about')}
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-text transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  )
}
