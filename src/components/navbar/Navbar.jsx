import { forwardRef, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import './Navbar.css'

// Full-width tab bar under the masthead; sticks to the top while scrolling.
// Each tab switches the visible page (see HomePage). On mobile it becomes a menu.
const Navbar = forwardRef(function Navbar({ active, onNavigate }, ref) {
  const [open, setOpen] = useState(false)
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

  const go = (event, id) => {
    event.preventDefault()
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header ref={ref} className={`tabs ${open ? 'is-open' : ''}`}>
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
                aria-current={active === item.id ? 'page' : undefined}
                onClick={(e) => go(e, item.id)}
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
})

export default Navbar
