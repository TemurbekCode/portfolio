import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import Certificates from '../components/certificates/Certificates'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
