import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Mail } from 'lucide-react'
import { cn } from '@/utils/cn'

interface FloatingCTAProps {
  onContact: () => void
}

export function FloatingCTA({ onContact }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
      setShowTop(window.scrollY > 1200)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
        >
          <AnimatePresence>
            {showTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={cn(
                  'flex items-center justify-center w-11 h-11 rounded-full',
                  'bg-bg-elevated border border-border shadow-card',
                  'transition-colors hover:border-text/20',
                )}
              >
                <ArrowUp size={18} strokeWidth={1.5} />
              </motion.button>
            )}
          </AnimatePresence>
          <button
            onClick={onContact}
            aria-label="Contact"
            className={cn(
              'flex items-center gap-2 px-5 py-3 rounded-full',
              'bg-text text-bg text-sm font-medium shadow-card',
              'transition-all duration-300 hover:shadow-card-hover',
            )}
          >
            <Mail size={16} strokeWidth={1.5} />
            <span className="hidden sm:inline">Get in touch</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
