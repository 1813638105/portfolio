import { useEffect, useRef } from 'react'

export default function LineField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove, { passive: true })

    const spacing = 60
    const step = 12

    const draw = () => {
      const { x: mx, y: my } = mouseRef.current
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      const t = Date.now() * 0.0004

      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.04)'
      ctx.lineWidth = 0.5

      for (let x = spacing; x < w; x += spacing) {
        ctx.beginPath()
        for (let y = 0; y < h; y += step) {
          const dx = x - mx, dy = y - my, dist = Math.sqrt(dx * dx + dy * dy)
          const influence = dist < 350 ? (1 - dist / 350) : 0
          const push = influence * influence * 60 * Math.sin(t * 3 + x * 0.005)
          const wave = Math.sin(x * 0.02 + t) * 12 + Math.cos(y * 0.012 + t * 0.6) * 8 + push
          if (y === 0) ctx.moveTo(x + wave, y)
          else ctx.lineTo(x + wave, y)
        }
        ctx.stroke()
      }

      for (let y = spacing; y < h; y += spacing) {
        ctx.beginPath()
        for (let x = 0; x < w; x += step) {
          const dx = x - mx, dy = y - my, dist = Math.sqrt(dx * dx + dy * dy)
          const influence = dist < 350 ? (1 - dist / 350) : 0
          const push = influence * influence * 50 * Math.cos(t * 2.5 + y * 0.005)
          const wave = Math.cos(y * 0.02 + t * 0.5) * 10 + Math.sin(x * 0.01 + t) * 7 + push
          if (x === 0) ctx.moveTo(x, y + wave)
          else ctx.lineTo(x, y + wave)
        }
        ctx.stroke()
      }

      if (mx > 0 && my > 0) {
        const g1 = ctx.createRadialGradient(mx, my, 0, mx, my, 300)
        g1.addColorStop(0, 'rgba(0, 255, 65, 0.05)')
        g1.addColorStop(0.5, 'rgba(0, 255, 65, 0.015)')
        g1.addColorStop(1, 'rgba(0, 255, 65, 0)')
        ctx.fillStyle = g1; ctx.fillRect(mx - 300, my - 300, 600, 600)
        const g2 = ctx.createRadialGradient(mx, my, 0, mx, my, 80)
        g2.addColorStop(0, 'rgba(0, 255, 65, 0.08)')
        g2.addColorStop(1, 'rgba(0, 255, 65, 0)')
        ctx.fillStyle = g2; ctx.fillRect(mx - 80, my - 80, 160, 160)
      }
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" />
}
