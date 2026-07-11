import { useState } from 'react'
import { ArrowUpRight, Clock } from 'lucide-react'
import { WRITING, WRITING_CATEGORIES, type WritingCategory } from '@/constants/writing'
import { FadeUp } from '@/animations/FadeUp'
import { StaggerChildren, StaggerItem } from '@/animations/StaggerChildren'
import { cn } from '@/utils/cn'

const categoryLabels: Record<string, string> = {
  article: 'Article',
  thought: 'Thought',
  framework: 'Framework',
}

export function Writing() {
  const [activeCategory, setActiveCategory] = useState<WritingCategory>('all')

  const filtered =
    activeCategory === 'all'
      ? WRITING
      : WRITING.filter((w) => w.category === activeCategory)

  return (
    <section id="writing" className="section-padding section-spacing">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-4">Writing</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
            <h2 className="heading-lg max-w-2xl">
              Frameworks and thinking on growth.
            </h2>
            <p className="body-md max-w-md">
              Articles on systems, operations, and the work behind scalable acquisition.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
            {WRITING_CATEGORIES.map((cat) => (
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

        <StaggerChildren className="space-y-0 divide-y divide-border border border-border rounded-[var(--radius-card)] bg-bg-elevated overflow-hidden">
          {filtered.map((item) => {
            const Wrapper = item.comingSoon ? 'div' : 'a'
            const wrapperProps = item.comingSoon
              ? { className: 'group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 md:p-8 opacity-80' }
              : {
                  href: item.link ?? '#',
                  className:
                    'group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 md:p-8 transition-colors hover:bg-bg/50',
                }

            return (
              <StaggerItem key={item.id}>
                <Wrapper {...wrapperProps}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-accent">
                        {categoryLabels[item.category]}
                      </span>
                      <span className="text-xs text-text-secondary">{item.date}</span>
                      {item.comingSoon && (
                        <span className="text-xs text-text-secondary border border-border rounded-full px-2 py-0.5">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <h3
                      className={cn(
                        'text-lg md:text-xl font-semibold tracking-tight mb-2',
                        !item.comingSoon && 'group-hover:text-accent transition-colors',
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-text-secondary flex-shrink-0">
                    {!item.comingSoon && (
                      <>
                        <span className="flex items-center gap-1.5 text-xs">
                          <Clock size={14} strokeWidth={1.5} />
                          {item.readTime}
                        </span>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </div>
                </Wrapper>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
