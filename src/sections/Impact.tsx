import { FadeUp } from '@/animations/FadeUp'
import { StaggerChildren, StaggerItem } from '@/animations/StaggerChildren'
import { useCounter } from '@/hooks/useCounter'
import { METRICS, type Metric } from '@/constants/metrics'

function MetricCounter({ metric }: { metric: Metric }) {
  const { count, ref } = useCounter(metric.value, { duration: 1600 })

  return (
    <div ref={ref}>
      <p className="text-4xl md:text-5xl font-semibold tracking-tight tabular-nums mb-2">
        {count}
        {metric.suffix}
      </p>
      <p className="text-sm text-text-secondary">{metric.label}</p>
    </div>
  )
}

export function Impact() {
  return (
    <section id="impact" className="section-padding pt-16 md:pt-20 pb-24 md:pb-32 bg-bg-muted border-y border-border">
      <div className="container-wide">
        <FadeUp>
          <p className="label-sm mb-8 md:mb-12">Impact</p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <MetricCounter metric={metric} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
