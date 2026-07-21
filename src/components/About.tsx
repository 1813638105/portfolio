import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { personalInfo } from '../data'
import { useState, useRef, useEffect } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0 })
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = photoRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setTooltip({ show: true, x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const leave = () => setTooltip({ show: false, x: 0, y: 0 })
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, [])
  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-glow  blur-[180px] opacity-15" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="section-container relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">About</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-4 text-white tracking-tight">关于我</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div variants={itemVariants} className="relative">
            <div
              ref={photoRef}
              className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none overflow-hidden border border-white/5 transition-transform duration-500 hover:scale-[1.03]"
            >
              <img
                src={personalInfo.photo}
                alt="个人照片"
                className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0"
              />
              {/* Tooltip */}
              {tooltip.show && (
                <div
                  className="absolute z-20 pointer-events-none bg-accent text-black text-xs font-medium px-2.5 py-1 whitespace-nowrap"
                  style={{ left: tooltip.x + 12, top: tooltip.y - 28 }}
                >
                  吴俊贤 UX/UI设计师
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 -z-10" />
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                {personalInfo.role}
              </h3>
              <p className="text-text-secondary leading-relaxed">{personalInfo.intro}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5  bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all duration-500 group glow-card"
                >
                  <div className="text-3xl font-black text-accent mb-1">{stat.value}</div>
                  <div className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2.5  bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-all duration-300 group"
              >
                <Phone size={16} className="text-accent" />
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                  {personalInfo.phone}
                </span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2.5  bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-all duration-300 group"
              >
                <Mail size={16} className="text-accent" />
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                  {personalInfo.email}
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
