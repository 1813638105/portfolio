import PillNav from './components/PillNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import LineField from './components/LineField'

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '能力', href: '#skills' },
  { label: '联系', href: '#contact' },
]

export default function App() {
  return (
    <main className="relative min-h-screen bg-black text-text-primary overflow-x-hidden">
      <LineField />
      <div className="page-noise" />
      <CustomCursor />
      <PillNav items={navItems} activeHref="#hero" />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
