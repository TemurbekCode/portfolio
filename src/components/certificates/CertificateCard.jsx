import { Award, Eye, Trophy } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function CertificateCard({ certificate, delay, onView }) {
  const Icon = certificate.category === 'sport' ? Trophy : Award
  const rows = [
    certificate.detail && { label: 'Details', value: certificate.detail },
    certificate.credentialId && { label: 'Credential ID', value: certificate.credentialId },
    certificate.date && { label: 'Date', value: certificate.date },
  ].filter(Boolean)

  return (
    <Reveal as="li" variant="up" delay={delay} className="card cert-card">
      <span className="cert-card__icon"><Icon size={22} aria-hidden="true" /></span>
      <h4 className="cert-card__title">{certificate.title}</h4>
      <p className="cert-card__org">{certificate.organization}</p>
      {rows.length > 0 && (
        <dl className="cert-card__meta">
          {rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <button type="button" className="btn btn--secondary" onClick={onView}>
        <Eye size={16} aria-hidden="true" /> View Certificate
      </button>
    </Reveal>
  )
}
