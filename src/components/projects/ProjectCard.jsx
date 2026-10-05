import { useState } from 'react'
import { ArrowUpRight, Maximize2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import MediaImage from '../ui/MediaImage'
import Modal from '../ui/Modal'
import Reveal from '../ui/Reveal'

function LinkButton({ href, icon, label, variant, soonLabel }) {
  if (!href) {
    return (
      <span className={`btn btn--${variant} is-disabled`} aria-disabled="true">
        {icon} {soonLabel}
      </span>
    )
  }
  return (
    <a className={`btn btn--${variant}`} href={href} target="_blank" rel="noopener noreferrer">
      {icon} {label}
    </a>
  )
}

export default function ProjectCard({ project, reversed }) {
  const [preview, setPreview] = useState(null)

  return (
    <article className={`project ${reversed ? 'project--reversed' : ''}`} aria-labelledby={`project-${project.number}`}>
      <Reveal variant={reversed ? 'right' : 'left'} className="project__gallery">
        {project.images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className={`project__shot project__shot--${i === 0 ? 'main' : 'small'}`}
            onClick={() => setPreview(image)}
            aria-label={`Open larger preview: ${image.alt}`}
          >
            <MediaImage path={image.src} alt={image.alt} />
            <span className="project__shot-overlay" aria-hidden="true">
              <Maximize2 size={22} />
            </span>
          </button>
        ))}
      </Reveal>

      <Reveal variant={reversed ? 'left' : 'right'} delay={120} className="project__info">
        <span className="project__number">{project.number}</span>
        <h3 id={`project-${project.number}`} className="project__name">{project.name}</h3>
        <p className="project__category">{project.category}</p>
        <p className="project__description">{project.description}</p>

        <ul className="tags tags--compact" aria-label={`${project.name} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech} className="tag">{tech}</li>
          ))}
        </ul>

        <div className="project__actions">
          <LinkButton href={project.github} variant="primary" icon={<FaGithub size={18} aria-hidden="true" />} label="GitHub" soonLabel="GitHub soon" />
          <LinkButton href={project.live} variant="secondary" icon={<ArrowUpRight size={18} aria-hidden="true" />} label="Live Demo" soonLabel="Live Demo coming soon" />
        </div>
      </Reveal>

      {preview && (
        <Modal title={`${project.name} — preview`} onClose={() => setPreview(null)} wide>
          <MediaImage path={preview.src} alt={preview.alt} className="modal__image" />
        </Modal>
      )}
    </article>
  )
}
