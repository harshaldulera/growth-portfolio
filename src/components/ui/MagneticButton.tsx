import { forwardRef, type ButtonHTMLAttributes, type MutableRefObject } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/utils/cn'

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, variant = 'primary', children, ...props }, forwardedRef) => {
    const magneticRef = useMagnetic<HTMLButtonElement>({ strength: 0.25, radius: 120 })

    return (
      <button
        ref={(node) => {
          ;(magneticRef as MutableRefObject<HTMLButtonElement | null>).current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] font-medium',
          'px-6 py-2.5 text-sm transition-colors duration-300 ease-[var(--ease-premium)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          variant === 'primary'
            ? 'bg-text text-bg hover:bg-text/90'
            : 'bg-bg-elevated text-text border border-border hover:border-text/20',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

MagneticButton.displayName = 'MagneticButton'
