import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs'

const distPath = './dist/index.html'
let html = readFileSync(distPath, 'utf-8')

// Remove Google Fonts links
html = html.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com"[^>]*>\s*/g, '')
html = html.replace(/<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*/g, '')
html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*>\s*/g, '')
writeFileSync(distPath, html)

// Copy root-level media
const media = ['bg-video.mp4', 'photo.jpg', 'photo-placeholder.svg', 'favicon.svg']
for (const f of media) {
  const src = `./public/${f}`, dest = `./dist/${f}`
  if (existsSync(src) && !existsSync(dest)) { copyFileSync(src, dest); console.log(`  Copied ${f}`) }
}

// Copy projects/
const projSrc = './public/projects', projDest = './dist/projects'
if (existsSync(projSrc)) {
  if (!existsSync(projDest)) mkdirSync(projDest, { recursive: true })
  for (const f of readdirSync(projSrc)) {
    const s = `${projSrc}/${f}`, d = `${projDest}/${f}`
    if (!existsSync(d)) { copyFileSync(s, d); console.log(`  Copied projects/${f}`) }
  }
}
console.log('✅ Post-processed dist/')
