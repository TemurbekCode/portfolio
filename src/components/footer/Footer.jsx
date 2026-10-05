import { profile } from '../../data/socials'
import SocialLinks from '../ui/SocialLinks'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__copy">© {new Date().getFullYear()} {profile.name}</p>
          <p className="footer__role">{profile.role}</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
