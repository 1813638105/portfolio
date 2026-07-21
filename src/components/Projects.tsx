import { motion } from 'framer-motion'
import { projects } from '../data'
import InfiniteMenu from './InfiniteMenu'

const menuItems = projects.map(p => ({
  image: p.image || 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="${p.color}22" width="400" height="400"/><text x="200" y="220" text-anchor="middle" fill="${p.color}" font-family="monospace" font-size="14">${p.title}</text></svg>`),
  link: `#project-${p.id}`,
  title: p.title,
  description: p.subtitle,
}))

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">Projects</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-4 text-white tracking-tight">精选项目</h2>
        </motion.div>
        <div style={{ height: '650px', position: 'relative' }}>
          <InfiniteMenu items={menuItems} scale={1.0} />
        </div>
      </div>
    </section>
  )
}
