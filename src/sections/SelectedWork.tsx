import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { CASE_STUDIES, type CaseStudy } from '@/constants/work'
import { FadeUp } from '@/animations/FadeUp'
import { StaggerChildren, StaggerItem } from '@/animations/StaggerChildren'
import { cn } from '@/utils/cn'

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false)

  const sections = [
    { label: 'Problem', content: study.problem },
    { label: 'Context', content: study.context },
    { label: 'Approach', content: study.approach },
    { label: 'Execution', content: study.execution },
    { label: 'Outcome', content: study.outcome },
    { label: 'Lessons', content: study.lessons },
  ]

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
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="label-sm">{study.category}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
              {study.title}
            </h3>
            <p className="text-text-secondary text-sm md:text-base">
              {study.subtitle}
            </p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 mt-1 text-text-secondary"
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-text-secondary border border-border rounded-full"
            >
              {tag}
            </span>
          ))}
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
              {sections.map((section, i) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <p className="label-sm mb-2">{section.label}</p>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export function SelectedWork() {
  return (
    <section id="work" className="section-padding section-spacing bg-bg-elevated/50">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-4">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <h2 className="heading-lg max-w-2xl">
              How I think about growth problems.
            </h2>
            <p className="body-md max-w-md">
              Case studies from building creator acquisition systems, internal tools,
              and growth initiatives at The5ers.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren className="space-y-4 md:space-y-5">
          {CASE_STUDIES.map((study) => (
            <StaggerItem key={study.id}>
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors link-underline"
          >
            Get in touch
            <ArrowUpRight size={16} strokeWidth={1.5} className="shrink-0" />
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
