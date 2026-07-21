import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { FEATURED_WORK, type FeaturedWork } from '@/constants/work'
import { FadeUp } from '@/animations/FadeUp'
import { StaggerChildren, StaggerItem } from '@/animations/StaggerChildren'
import { cn } from '@/utils/cn'

function WorkCard({ work }: { work: FeaturedWork }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className={cn(
        'rounded-[var(--radius-card)] bg-bg-elevated border border-border',
        'shadow-[var(--shadow-card)] transition-all duration-500',
        'hover:shadow-[var(--shadow-card-hover)]',
        expanded && 'shadow-[var(--shadow-card-hover)]',
      )}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-[var(--radius-card)]"
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label-sm mb-2">{work.subtitle}</p>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {work.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-text-secondary border border-border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 mt-1 text-text-secondary"
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 border-t border-border pt-6">
              <div>
                <p className="label-sm mb-2">Challenge</p>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {work.challenge}
                </p>
              </div>

              <div>
                <p className="label-sm mb-3">What I Built</p>
                <ul className="space-y-2">
                  {work.built.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm md:text-base text-text-secondary"
                    >
                      <Check
                        size={16}
                        strokeWidth={1.5}
                        className="mt-0.5 flex-shrink-0 text-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label-sm mb-2">Impact</p>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {work.impact}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export function FeaturedWork() {
  return (
    <section id="work" className="section-padding section-spacing bg-bg-elevated/50">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-4">Featured Work</p>
          <h2 className="heading-lg max-w-2xl mb-12 md:mb-16">
            Systems I've designed and built.
          </h2>
        </FadeUp>

        <StaggerChildren className="space-y-4 md:space-y-5">
          {FEATURED_WORK.map((work) => (
            <StaggerItem key={work.id}>
              <WorkCard work={work} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
