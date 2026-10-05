import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/socials'
import { useActiveSection } from '../../hooks/useActiveSection'
import './Navbar.css'

const sectionIds = navItems.map((item) => item.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: Escape closes, body scroll locks while open.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  // Leaving the mobile breakpoint should never leave the menu stuck open.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">TA</span>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`navbar__link ${active === item.id ? 'is-active' : ''}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="icon-btn navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div className="navbar__overlay" onClick={() => setOpen(false)} aria-hidden="true" />
      <nav id="mobile-menu" className="navbar__mobile" aria-label="Mobile navigation">
        <ul>
          {navItems.map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
