import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Impact } from '@/sections/Impact'
import { FeaturedWork } from '@/sections/FeaturedWork'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'

interface HomeProps {
  onNavigate: (href: string) => void
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <Impact />
      <FeaturedWork />
      <Experience />
      <Contact />
    </>
  )
}
