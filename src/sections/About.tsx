import { FadeUp } from '@/animations/FadeUp'
import { TextHighlight } from '@/animations/TextHighlight'
import { StaggerChildren, StaggerItem } from '@/animations/StaggerChildren'
import { SKILL_CATEGORIES } from '@/constants/skills'

export function About() {
  return (
    <section id="about" className="section-padding section-spacing">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-4">About</p>
          <h2 className="heading-lg max-w-3xl mb-8 md:mb-12">
            I build <TextHighlight>systems that acquire users</TextHighlight> — not
            one-off campaigns.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeUp delay={0.1}>
            <div className="space-y-6 body-md">
              <p>
                I'm a Growth Operator focused on helping startups acquire users through
                scalable systems instead of one-off campaigns. I solve growth problems
                by combining creator partnerships, operations, automation, analytics,
                and experimentation.
              </p>
              <p>
                I believe growth comes from building repeatable systems rather than
                chasing hacks. That means designing CRM workflows, structuring creator
                pipelines, planning campaigns with clear deliverables, and building the
                internal tools that make it all run.
              </p>
              <p>
                I enjoy working in fast-moving startups where ownership matters more
                than job titles. My technical background — React, Python, Firebase —
                lets me build the systems I design, not just document them.
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="space-y-8">
            {SKILL_CATEGORIES.map((category) => (
              <StaggerItem key={category.id}>
                <div>
                  <p className="label-sm mb-3">{category.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm text-text-secondary border border-border rounded-full bg-bg-elevated transition-colors hover:border-text/20 hover:text-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
