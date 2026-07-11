import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants/site'
import { useScrolled } from '@/hooks/useScrollSpy'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/utils/cn'

interface NavbarProps {
  activeSection: string
  onNavigate: (href: string) => void
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ activeSection, onNavigate, isDark, onToggleTheme }: NavbarProps) {
  const scrolled = useScrolled(20)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (href: string) => {
    onNavigate(href)
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent',
        )}
      >
        <nav className="section-padding flex items-center justify-between h-16 md:h-20 max-w-7xl mx-auto">
          <button
            onClick={() => handleNav('#home')}
            className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            HD
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    'relative text-sm transition-colors duration-300',
                    isActive ? 'text-text' : 'text-text-secondary hover:text-text',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-text"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-text/20 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-bg-elevated border-l border-border z-[70] md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-border"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left py-3 text-lg font-medium hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
