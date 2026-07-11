import { useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { FloatingCTA } from '@/components/ui/FloatingCTA'
import { PageTransition } from '@/animations/PageTransition'
import { Home } from '@/pages/Home'
import { useLenis } from '@/hooks/useLenis'
import { useTheme } from '@/hooks/useTheme'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'

const SECTION_IDS = ['home', 'about', 'work', 'experience', 'projects', 'writing', 'contact']

function AppContent() {
  const { scrollTo } = useLenis()
  const { toggleTheme, isDark } = useTheme()
  const activeSection = useScrollSpy(SECTION_IDS)

  const handleNavigate = useCallback(
    (href: string) => {
      scrollTo(href)
    },
    [scrollTo],
  )

  useKeyboardNav(handleNavigate)

  return (
    <>
      <ScrollProgress />
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <FloatingCTA onContact={() => handleNavigate('#contact')} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
