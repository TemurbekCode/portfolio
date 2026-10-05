import { journey } from '../../data/journey'
import { useInView } from '../../hooks/useInView'
import SectionHeading from '../ui/SectionHeading'
import './Experience.css'

function TimelineItem({ item, isLast }) {
  const [ref, visible] = useInView({ threshold: 0.3 })
  return (
    <li ref={ref} className={`timeline__item ${visible ? 'is-visible' : ''} ${isLast ? 'is-last' : ''}`}>
      <span className="timeline__dot" aria-hidden="true" />
      <span className="timeline__line" aria-hidden="true" />
      <p className="timeline__period">{item.period}</p>
      <div className="timeline__card">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section section--alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="04"
          title="Developer Journey"
          id="experience-title"
          subtitle="How I am growing as a developer: by building real things and learning in public."
        />
        <ol className="timeline">
          {journey.map((item, i) => (
            <TimelineItem key={item.title} item={item} isLast={i === journey.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}
