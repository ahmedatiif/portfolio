import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'


import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="page-header container">
        <p className="site-brand">Ahmed Atif Mostafa</p>
        <Navbar />
      </header>
      <main id="main-content" className="page-main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="page-footer container">
        <p>&copy; 2026 Ahmed Atif Mostafa</p>
      </footer>
    </>
  )
}

export default App
