import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.5 }
      )

      // Subtle parallax on scroll
      gsap.to(headlineRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
      gsap.to(subRef.current, {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden bg-[#02030A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(168,85,247,0.45)]">
            Muqammal Khan
          </h1>
          <p ref={subRef} className="mt-4 text-lg md:text-2xl text-purple-200/90">
            Data Scientist • Building signals from noise with ML, NLP, and systems thinking
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-purple-200/80">
            <span className="rounded-full border border-purple-400/30 bg-black/30 px-3 py-1">ML Engineering</span>
            <span className="rounded-full border border-purple-400/30 bg-black/30 px-3 py-1">NLP</span>
            <span className="rounded-full border border-purple-400/30 bg-black/30 px-3 py-1">Time Series</span>
            <span className="rounded-full border border-purple-400/30 bg-black/30 px-3 py-1">MLOps</span>
          </div>
        </div>
      </div>
    </section>
  )
}
