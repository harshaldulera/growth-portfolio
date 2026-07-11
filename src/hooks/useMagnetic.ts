import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface MagneticOptions {
  strength?: number
  radius?: number
}

export function useMagnetic<T extends HTMLElement>(options: MagneticOptions = {}) {
  const { strength = 0.35, radius = 100 } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < radius) {
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.4,
          ease: 'power3.out',
        })
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' })
      }
    }

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' })
    }

    window.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength, radius])

  return ref
}
