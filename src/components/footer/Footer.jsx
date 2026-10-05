import { ArrowUp, Mail, MapPin } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { profile, contactDetails, socialLinks } from '../../data/socials'
import SocialIcon from '../ui/SocialIcon'
import './Footer.css'

export default function Footer({ onNavigate }) {
  const filledSocials = socialLinks.filter((s) => s.url)

  const go = (event, id) => {
    event.preventDefault()
    onNavigate(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.role}</p>
          <p className="footer__text">
            Building modern, responsive web interfaces and learning something new with every project.
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h2 className="footer__heading">Pages</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={(e) => go(e, item.id)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Get in touch</h2>
          <ul className="footer__contact">
            {contactDetails.email && (
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </li>
            )}
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{profile.location}</span>
            </li>
          </ul>
          <ul className="footer__social">
            {filledSocials.map((s) => (
              <li key={s.key}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <SocialIcon name={s.key} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <button type="button" className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
