import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ isDark, onToggle, className }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative flex items-center justify-center w-9 h-9 rounded-full',
        'border border-border bg-bg-elevated/80 backdrop-blur-sm',
        'transition-colors duration-300 hover:border-text/20',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Sun size={16} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
      >
        <Moon size={16} strokeWidth={1.5} />
      </motion.div>
    </button>
  )
}
