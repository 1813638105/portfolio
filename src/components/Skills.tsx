import { motion } from 'framer-motion'
import { skills } from '../data'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-glow  blur-[150px] opacity-10" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">Skills</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-4 text-white tracking-tight">核心能力</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            全链路设计能力矩阵
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/5  p-8 lg:p-10 group hover:border-accent/20 transition-all duration-500 glow-card"
            >
              {/* Icon */}
              <div
                className="w-14 h-14  flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `${skill.color}15`,
                  border: `1px solid ${skill.color}30`,
                }}
              >
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5  text-xs font-mono bg-black border border-white/5 text-text-secondary group-hover:border-accent/20 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
