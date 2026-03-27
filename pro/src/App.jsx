import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Research from './components/Research'
import Contact from './components/Contact'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Research />
        <Contact />
      </main>
    </div>
  )
}

export default App
