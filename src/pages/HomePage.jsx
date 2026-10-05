import { useCallback, useEffect, useRef, useState } from 'react'
import { navItems } from '../data/navigation'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import Certificates from '../components/certificates/Certificates'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

// One "page" is visible at a time. The masthead (Hero) and tab bar stay on top;
// clicking a tab swaps the page below. The URL hash (#skills ...) is kept in sync,
// so links, refresh and the browser back button all work.
const pages = {
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  certificates: Certificates,
  contact: Contact,
}
const DEFAULT_PAGE = navItems[0].id

const pageFromHash = () => {
  const id = window.location.hash.replace('#', '')
  return id in pages ? id : DEFAULT_PAGE
}

export default function HomePage() {
  const [page, setPage] = useState(pageFromHash)
  const tabsRef = useRef(null)

  // After switching, bring the top of the new page into view
  // (only if the visitor had scrolled down past the tab bar).
  const scrollToPageTop = useCallback(() => {
    const bar = tabsRef.current
    if (!bar) return
    const top = bar.offsetTop
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'auto' })
  }, [])

  const navigate = useCallback(
    (id) => {
      if (!(id in pages)) return
      if (id !== page) {
        window.history.pushState(null, '', `#${id}`)
        setPage(id)
      }
      scrollToPageTop()
    },
    [page, scrollToPageTop],
  )

  useEffect(() => {
    const onPop = () => setPage(pageFromHash())
    window.addEventListener('popstate', onPop)
    window.addEventListener('hashchange', onPop)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('hashchange', onPop)
    }
  }, [])

  const Page = pages[page]

  return (
    <>
      <a className="skip-link" href="#page-content">Skip to content</a>
      <Hero />
      <Navbar ref={tabsRef} active={page} onNavigate={navigate} />
      <main id="page-content" key={page} className="page">
        <Page />
      </main>
      <Footer onNavigate={navigate} />
    </>
  )
}
