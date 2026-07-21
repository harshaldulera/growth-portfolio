import { FadeUp } from '@/animations/FadeUp'
import { RevealOnScroll } from '@/animations/RevealOnScroll'
import { EXPERIENCE } from '@/constants/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding section-spacing bg-bg-muted border-y border-border">
      <div className="container-narrow">
        <FadeUp>
          <p className="label-sm mb-4">Experience</p>
          <h2 className="heading-lg mb-12 md:mb-16">Roles.</h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-0 md:left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10 md:space-y-12">
            {EXPERIENCE.map((item) => (
              <RevealOnScroll key={item.id}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-border bg-bg">
                    <div className="absolute inset-[3px] rounded-full bg-accent" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-text-secondary">{item.company}</p>
                    </div>
                    <p className="text-sm text-text-secondary tabular-nums">{item.period}</p>
                  </div>

                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-text-secondary flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
