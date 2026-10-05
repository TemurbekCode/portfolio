import { socialLinks } from '../../data/socials'
import SocialIcon from './SocialIcon'

// Icon row for Hero and Footer. Socials without a URL yet are hidden.
export default function SocialLinks({ className = '' }) {
  const filled = socialLinks.filter((s) => s.url)
  return (
    <ul className={`social-row ${className}`.trim()}>
      {filled.map((s) => (
        <li key={s.key}>
          <a className="social-row__link" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            <SocialIcon name={s.key} />
          </a>
        </li>
      ))}
    </ul>
  )
}
