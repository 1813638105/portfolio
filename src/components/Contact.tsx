import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section
      id="contact"
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Effects */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg-secondary to-bg" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5  blur-[150px]" />
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] pointer-events-none">
          <span className="text-[18vw] font-bold tracking-tighter text-accent select-none whitespace-nowrap">
            CONTACT
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-container relative z-10 text-center max-w-3xl"
      >
        <span className="text-accent-light font-mono text-sm tracking-widest">CONTACT</span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
          期待与您
          <span className="gradient-text"> 共创</span>
        </h2>

        <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          如果您有设计需求或合作意向，欢迎随时联系我
        </p>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-3 px-6 py-4  bg-bg-card border border-bg-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
          >
            <Phone size={20} className="text-accent-light group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-text-muted mb-0.5">电话</div>
              <div className="text-text-primary font-medium">{personalInfo.phone}</div>
            </div>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 px-6 py-4  bg-bg-card border border-bg-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
          >
            <Mail size={20} className="text-accent-light group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs text-text-muted mb-0.5">邮箱</div>
              <div className="text-text-primary font-medium">{personalInfo.email}</div>
            </div>
          </a>

          <div className="flex items-center gap-3 px-6 py-4  bg-bg-card border border-bg-border">
            <MapPin size={20} className="text-accent-light" />
            <div className="text-left">
              <div className="text-xs text-text-muted mb-0.5">所在地</div>
              <div className="text-text-primary font-medium">中国</div>
            </div>
          </div>
        </div>

        {/* Social Links removed */}

        {/* CTA */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4  bg-accent text-white font-medium hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40"
        >
          发送邮件
          <ArrowUp size={18} className="rotate-45" />
        </a>
      </motion.div>

      {/* Back to top */}
      <a
        href="#hero"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-10 h-10  bg-bg-card border border-bg-border flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/40 transition-all duration-300"
      >
        <ArrowUp size={18} />
      </a>
    </section>
  )
}
