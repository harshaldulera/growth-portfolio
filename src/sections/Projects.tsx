import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { PROJECTS, PROJECT_CATEGORIES, type Project, type ProjectCategory } from '@/constants/projects'
import { FadeUp } from '@/animations/FadeUp'
import { StaggerChildren, StaggerItem } from '@/animations/StaggerChildren'
import { cn } from '@/utils/cn'

function ProjectCard({ project }: { project: Project }) {
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
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="label-sm">{project.category}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm md:text-base">
              {project.subtitle}
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
          {project.tags.map((tag) => (
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
              {project.sections.map((section, i) => (
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  View project
                  <ArrowUpRight size={14} strokeWidth={1.5} className="shrink-0" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory)

  return (
    <section id="projects" className="section-padding section-spacing bg-bg-elevated/50">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-4">Projects</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <h2 className="heading-lg max-w-2xl">
              Systems I've designed and built.
            </h2>
            <p className="body-md max-w-md">
              From internal CRM tools to growth analysis — each project started with
              a problem that needed a system, not a campaign.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 text-sm rounded-full border transition-all duration-300',
                  activeCategory === cat.id
                    ? 'bg-text text-bg border-text'
                    : 'bg-bg-elevated text-text-secondary border-border hover:border-text/20 hover:text-text',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeUp>

        <StaggerChildren className="space-y-4 md:space-y-5">
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
