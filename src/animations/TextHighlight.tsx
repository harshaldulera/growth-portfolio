import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/utils/cn'

gsap.registerPlugin(ScrollTrigger)

interface TextHighlightProps {
  children: string
  className?: string
}

export function TextHighlight({ children, className }: TextHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { backgroundSize: '0% 100%' },
      {
        backgroundSize: '100% 100%',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [])

  return (
    <span
      ref={ref}
      className={cn(
        'bg-no-repeat bg-left-bottom',
        'bg-[linear-gradient(transparent_60%,rgba(15,98,254,0.15)_60%)]',
        'dark:bg-[linear-gradient(transparent_60%,rgba(59,130,246,0.2)_60%)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
