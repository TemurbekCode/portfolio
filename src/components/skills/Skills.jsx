import { skills } from '../../data/skills'
import { useInView } from '../../hooks/useInView'
import SectionHeading from '../ui/SectionHeading'
import SkillIcon from './SkillIcon'
import './Skills.css'

function SkillCard({ skill, index, visible }) {
  return (
    <li
      className={`skill-card ${visible ? 'is-visible' : ''} ${skill.learning ? 'is-learning' : ''}`}
      style={{ '--delay': `${index * 70}ms`, '--value': `${skill.value}%` }}
    >
      <div className="skill-card__top">
        <span className="skill-card__icon"><SkillIcon name={skill.icon} /></span>
        <span className={`skill-card__level ${skill.learning ? 'skill-card__level--learning' : ''}`}>{skill.level}</span>
      </div>
      <h3 className="skill-card__name">{skill.name}</h3>
      <div
        className="skill-card__bar"
        role="progressbar"
        aria-label={`${skill.name} — ${skill.level}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.value}
      >
        <span className="skill-card__fill" />
      </div>
    </li>
  )
}

export default function Skills() {
  const [listRef, visible] = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="02"
          title="Skills"
          id="skills-title"
          subtitle="The technologies I work with. Bars are my own estimates of where I am today, not exact measurements."
        />
        <ul ref={listRef} className="skills__grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} visible={visible} />
          ))}
        </ul>
      </div>
    </section>
  )
}
