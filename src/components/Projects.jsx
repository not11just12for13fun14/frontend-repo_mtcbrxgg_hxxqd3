import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Eye, Waveform } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 'nlp',
    title: 'Neural Language Pipeline',
    subtitle: 'From tokens to meaning',
    icon: Cpu,
    color: 'from-purple-600/20 to-fuchsia-500/10',
    accent: 'shadow-[0_0_40px_rgba(168,85,247,0.35)]',
  },
  {
    id: 'vision',
    title: 'Vision Classifier',
    subtitle: 'Seeing structure in pixels',
    icon: Eye,
    color: 'from-cyan-500/20 to-sky-500/10',
    accent: 'shadow-[0_0_40px_rgba(34,211,238,0.35)]',
  },
  {
    id: 'series',
    title: 'Temporal Forecaster',
    subtitle: 'Forecasts that explain themselves',
    icon: Waveform,
    color: 'from-orange-500/20 to-amber-500/10',
    accent: 'shadow-[0_0_40px_rgba(249,115,22,0.35)]',
  }
]

export default function Projects() {
  const sectionRef = useRef(null)
  const streamRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flowing data stream background
      gsap.to(streamRef.current, {
        xPercent: -20,
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: 'sine.inOut'
      })

      // Reveal cards on scroll
      gsap.utils.toArray('.project-card').forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 bg-[#050515] overflow-hidden">
      {/* Moving data stream */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <svg ref={streamRef} className="absolute left-0 top-1/3 w-[140%] h-48" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M0,100 C150,50 300,150 450,100 C600,50 750,150 900,100 C1050,50 1200,150 1350,100" fill="none" stroke="url(#grad)" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-white/95">Projects</h2>
        <p className="mt-3 text-purple-200/80 max-w-2xl">A flowing algorithmic pipeline where each node reveals a story. Click any to open a dedicated, animated detail view.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map(({ id, title, subtitle, icon: Icon, color, accent }) => (
            <a key={id} href={`#/project/${id}`} className={`project-card group relative rounded-2xl border border-white/10 bg-gradient-to-b ${color} p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${accent}`}>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-black/50 p-3 border border-white/10">
                  <Icon className="h-6 w-6 text-white/90" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white/95">{title}</h3>
                  <p className="text-sm text-purple-200/80">{subtitle}</p>
                </div>
              </div>
              <div className="mt-4 h-24 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-purple-200/70">
                <span className="text-xs">Abstract module preview</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
