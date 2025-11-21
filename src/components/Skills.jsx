import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillGraph = [
  { branch: 'ML', skills: ['Regression', 'Classification', 'NLP', 'Vision'] },
  { branch: 'Programming', skills: ['Python', 'SQL', 'PyTorch', 'FastAPI'] },
  { branch: 'MLOps', skills: ['Docker', 'CI/CD', 'Model Serving', 'Monitoring'] }
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.branch').forEach((branch, i) => {
        gsap.fromTo(branch, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.8, delay: i * 0.1,
          scrollTrigger: { trigger: branch, start: 'top 85%' }
        })
      })

      gsap.utils.toArray('.leaf').forEach((leaf, i) => {
        gsap.fromTo(leaf, { scale: 0.8, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.5, delay: i * 0.05,
          scrollTrigger: { trigger: leaf, start: 'top 90%' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#07071a]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-white/95">Skills & Expertise</h2>
        <p className="mt-3 text-purple-200/80 max-w-2xl">An abstract knowledge tree where branches glow and leaves bloom as you scroll.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {skillGraph.map(({ branch, skills }) => (
            <div key={branch} className="branch rounded-2xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-white/90">{branch}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {skills.map((s) => (
                  <div key={s} className="leaf rounded-lg border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-purple-100/90">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
