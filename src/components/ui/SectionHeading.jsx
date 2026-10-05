import Reveal from './Reveal'

export default function SectionHeading({ index, title, subtitle, id }) {
  return (
    <Reveal className="section-heading">
      <span className="section-heading__index">{index}</span>
      <h2 id={id} className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </Reveal>
  )
}
