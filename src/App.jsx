import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-[#02030A] text-white">
      <Hero />
      <Projects />
      <Skills />
      <AboutContact />
      <footer className="bg-black/60 border-t border-purple-400/10 py-8 text-center text-purple-300/70">
        © {new Date().getFullYear()} Muqammal Khan — Built with React, GSAP, and Spline
      </footer>
    </div>
  )
}

export default App
