import { FadeUp } from '@/animations/FadeUp'
import { SITE } from '@/constants/site'
import { CORE_SKILLS } from '@/constants/skills'

export function About() {
  return (
    <section id="about" className="section-padding section-spacing">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-4">About</p>
          <div className="max-w-2xl space-y-4 mb-12">
            {SITE.about.map((line) => (
              <p key={line} className="text-xl md:text-2xl font-medium tracking-tight leading-snug">
                {line}
              </p>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="label-sm mb-4">Core Skills</p>
          <div className="flex flex-wrap gap-2">
            {CORE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm text-text-secondary border border-border rounded-full bg-bg-elevated"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
