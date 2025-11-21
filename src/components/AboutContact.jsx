import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutContact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: '.timeline', start: 'top 85%' } })
      gsap.fromTo('.contact-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: '.contact-card', start: 'top 85%' } })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#0a0b1f]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="timeline">
            <h2 className="text-3xl md:text-5xl font-semibold text-white/95">About</h2>
            <p className="mt-4 text-purple-200/85">
              I design, build, and ship ML systems that turn ambiguity into insight — from NLP to time series forecasting. I love translating research into production and crafting interfaces where data itself tells the story.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-purple-200/80">2024 — Led a multi-modal analytics platform; improved inference throughput 3x</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-purple-200/80">2023 — Productionized NLP pipelines with monitoring and drift alerts</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-purple-200/80">2022 — Built explainable time-series forecaster for operations planning</p>
              </div>
            </div>
          </div>

          <div className="contact-card rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-2xl font-semibold text-white/90">Contact</h3>
            <form className="mt-4 grid gap-3">
              <input className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Your name" />
              <input className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Email" />
              <textarea rows="4" className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder:text-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Message" />
              <button type="button" className="mt-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 font-semibold text-white hover:opacity-90 transition-opacity">Send</button>
              <div className="mt-2 text-sm text-purple-200/70">
                <a href="https://www.linkedin.com" target="_blank" className="underline hover:text-purple-300">LinkedIn</a> • <a href="https://github.com" target="_blank" className="underline hover:text-purple-300">GitHub</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
