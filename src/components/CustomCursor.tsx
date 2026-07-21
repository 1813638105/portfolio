import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const targetRef = useRef({ x: -100, y: -100 })
  const hoverRef = useRef(false)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return
    let raf = 0

    const move = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const hovering = !!(el && (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a') || el.closest('button') || el.closest('[data-hover]')))
      if (hovering !== hoverRef.current) {
        hoverRef.current = hovering
        if (hovering) {
          outer.style.borderColor = '#00ff41'; outer.style.backgroundColor = 'rgba(0, 255, 65, 0.08)'
          outer.style.width = '40px'; outer.style.height = '40px'
          inner.style.backgroundColor = '#00ff41'; inner.style.transform = 'rotate(45deg) scale(0.5)'
        } else {
          outer.style.borderColor = 'rgba(255,255,255,0.2)'; outer.style.backgroundColor = 'transparent'
          outer.style.width = '32px'; outer.style.height = '32px'
          inner.style.backgroundColor = '#ffffff'; inner.style.transform = 'rotate(45deg) scale(1)'
        }
      }
    }

    const animate = () => {
      const t = targetRef.current, p = posRef.current
      const speed = 0.35
      p.x += (t.x - p.x) * speed; p.y += (t.y - p.y) * speed
      const size = hoverRef.current ? 20 : 16
      outer.style.transform = `translate3d(${p.x - size}px, ${p.y - size}px, 0)`
      inner.style.transform = `translate3d(${p.x - 1.5}px, ${p.y - 1.5}px, 0) rotate(45deg) ${hoverRef.current ? 'scale(0.5)' : 'scale(1)'}`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move, { passive: true })
    animate()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move) }
  }, [])

  return (
    <>
      <div ref={outerRef} className="fixed top-0 left-0 z-[9999] pointer-events-none  border border-white/20 bg-transparent transition-[width,height,border-color,background-color] duration-300"
        style={{ width: 32, height: 32, transform: 'translate3d(-100px, -100px, 0)', willChange: 'transform', opacity: 1 }} />
      <div ref={innerRef} className="fixed top-0 left-0 z-[9999] pointer-events-none bg-white transition-[background-color] duration-300"
        style={{ width: 5, height: 5, transform: 'translate3d(-100px, -100px, 0) rotate(45deg)', willChange: 'transform' }} />
      <style>{`html,a,button,[data-hover]{cursor:none!important}`}</style>
    </>
  )
}
