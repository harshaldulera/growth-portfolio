import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { SelectedWork } from '@/sections/SelectedWork'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Writing } from '@/sections/Writing'
import { Contact } from '@/sections/Contact'

interface HomeProps {
  onNavigate: (href: string) => void
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <SelectedWork />
      <Experience />
      <Projects />
      <Writing />
      <Contact onNavigate={onNavigate} />
    </>
  )
}
