import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import './Navbar.css'

const sectionIds = navItems.map((item) => item.id)

// Full-width tab bar. Sits right under the masthead and sticks to the top
// of the screen while scrolling. On mobile it collapses into a menu.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const current = navItems.find((item) => item.id === active)

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

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 761px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`tabs ${open ? 'is-open' : ''}`}>
      <nav className="tabs__bar" aria-label="Main navigation">
        <button
          type="button"
          className="tabs__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="tab-list"
        >
          <span>{current ? current.label : 'Menu'}</span>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <ul id="tab-list" className="tabs__list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`tabs__link ${active === item.id ? 'is-active' : ''}`}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="tabs__overlay" onClick={() => setOpen(false)} aria-hidden="true" />
    </header>
  )
}
