import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight, Volume2, VolumeX } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoMuted, setVideoMuted] = useState(true)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setVideoMuted(!videoMuted)
  }

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ===== Video Background ===== */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="./bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Grid only */}
        <div className="absolute inset-0 bg-grid opacity-8 pointer-events-none" />
      </motion.div>

      {/* ===== Noise Texture Overlay ===== */}
      <div className="noise-overlay absolute inset-0 z-[2]" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-[2]" />

      {/* ===== Content ===== */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-start justify-center section-container"
      >
        {/* Tag badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5  border border-accent/30 bg-accent/5 text-accent text-xs font-mono tracking-[0.2em] uppercase" data-hover>
            <span className="w-1.5 h-1.5  bg-accent animate-pulse" />
            UI/UX Designer · Portfolio 2026
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="relative overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-left"
          >
            <span className="block text-white">以设计</span>
            <span className="block gradient-text">驱动未来</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg lg:text-xl text-text-secondary max-w-xl text-left mb-12 leading-relaxed font-light"
        >
          交互设计 × 界面设计 × 动效设计
          <br />
          <span className="text-text-muted text-base">
            全链路设计师—从原型到落地，用设计驱动产品价值。
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-4 flex-wrap justify-start"
        >
          <a href="#projects" className="btn-primary group">
            查看作品
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="#contact" className="btn-outline group">
            联系我
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* ===== Video Control ===== */}
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-24 right-8 z-10 w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        aria-label={videoMuted ? '开启声音' : '静音'}
        data-hover
      >
        {videoMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </motion.button>

      {/* ===== Scroll Indicator ===== */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
