import { Download, Eye, FileText } from 'lucide-react'
import { cv } from '../../data/socials'
import { useCvAvailable } from '../../hooks/useCvAvailable'

export default function CvCard() {
  const available = useCvAvailable()

  return (
    <div className="card cv-card">
      <h3 className="card__title">Curriculum Vitae</h3>
      <div className="cv-card__preview" aria-hidden="true">
        <FileText size={40} strokeWidth={1.25} />
        <span>{available ? 'CV ready' : 'CV preview'}</span>
      </div>

      {available ? (
        <div className="cv-card__actions">
          <a className="btn btn--secondary" href={cv.url} target="_blank" rel="noopener noreferrer">
            <Eye size={18} aria-hidden="true" /> View CV
          </a>
          <a className="btn btn--primary" href={cv.url} download={cv.fileName}>
            <Download size={18} aria-hidden="true" /> Download CV
          </a>
        </div>
      ) : (
        <p className="cv-card__soon">CV coming soon</p>
      )}
    </div>
  )
}
