import { ArrowUpRight } from 'lucide-react'
import { socialLinks, contactDetails, profile } from '../../data/socials'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import SocialIcon from '../ui/SocialIcon'
import './Contact.css'

function ContactCard({ icon, label, value, href, delay }) {
  const content = (
    <>
      <span className="contact-card__icon"><SocialIcon name={icon} /></span>
      <span className="contact-card__text">
        <span className="contact-card__label">{label}</span>
        <span className="contact-card__value">{value}</span>
      </span>
      {href && <ArrowUpRight className="contact-card__arrow" size={18} aria-hidden="true" />}
    </>
  )
  return (
    <Reveal as="li" variant="up" delay={delay}>
      {href ? (
        <a className="contact-card" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {content}
        </a>
      ) : (
        <div className="contact-card is-disabled">{content}</div>
      )}
    </Reveal>
  )
}

export default function Contact() {
  const details = [
    contactDetails.email && { icon: 'mail', label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}` },
    contactDetails.phone && { icon: 'phone', label: 'Phone', value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s/g, '')}` },
    { icon: 'location', label: 'Location', value: profile.location },
  ].filter(Boolean)

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          index="06"
          title="Let's Connect"
          id="contact-title"
          subtitle="Have a project idea, want to collaborate, or just want to connect? Feel free to reach out."
        />

        <div className="contact__grid">
          <div>
            <h3 className="contact__group">Details</h3>
            <ul className="contact__list">
              {details.map((d, i) => (
                <ContactCard key={d.label} {...d} delay={i * 80} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="contact__group">Social</h3>
            <ul className="contact__list">
              {socialLinks.map((s, i) => (
                <ContactCard
                  key={s.key}
                  icon={s.key}
                  label={s.label}
                  value={s.url ? s.url.replace(/^https?:\/\/(www\.)?/, '') : 'Link coming soon'}
                  href={s.url}
                  delay={i * 80}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
