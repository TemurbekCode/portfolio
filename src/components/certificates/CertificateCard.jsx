import { Award, Eye } from 'lucide-react'
import Reveal from '../ui/Reveal'

export default function CertificateCard({ certificate, delay, onView }) {
  return (
    <Reveal as="li" variant="up" delay={delay} className="card cert-card">
      <span className="cert-card__icon"><Award size={24} aria-hidden="true" /></span>
      <h3 className="cert-card__title">{certificate.title}</h3>
      <p className="cert-card__org">{certificate.organization}</p>
      <dl className="cert-card__meta">
        <div>
          <dt>Credential ID</dt>
          <dd>{certificate.credentialId}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{certificate.date}</dd>
        </div>
      </dl>
      <button type="button" className="btn btn--secondary" onClick={onView}>
        <Eye size={18} aria-hidden="true" /> View Certificate
      </button>
    </Reveal>
  )
}
