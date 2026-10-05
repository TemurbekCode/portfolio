import { Puzzle, BookOpen, Lightbulb, RefreshCw, MessagesSquare, Users } from 'lucide-react'
import { aboutParagraphs, aboutMedia, personalInfo, softSkills } from '../../data/about'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import MediaCarousel from './MediaCarousel'
import CvCard from './CvCard'
import './About.css'

const softSkillIcons = { Puzzle, BookOpen, Lightbulb, RefreshCw, MessagesSquare, Users }

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" title="About Me" id="about-title" />

        <div className="about__grid">
          <div className="about__main">
            {aboutParagraphs.map((text, i) => (
              <Reveal as="p" variant="left" delay={i * 90} className="about__text" key={text}>
                {text}
              </Reveal>
            ))}
            <Reveal variant="up" delay={120}>
              <MediaCarousel slides={aboutMedia} />
            </Reveal>
          </div>

          <aside className="about__side">
            <Reveal variant="right">
              <CvCard />
            </Reveal>

            <Reveal variant="right" delay={100} className="card info-card">
              <h3 className="card__title">Profile</h3>
              <dl className="info-card__list">
                {personalInfo.map((row) => (
                  <div key={row.label} className="info-card__row">
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal variant="right" delay={200} className="card">
              <h3 className="card__title">Soft Skills</h3>
              <ul className="tags">
                {softSkills.map((skill) => {
                  const Icon = softSkillIcons[skill.icon]
                  return (
                    <li key={skill.label} className="tag">
                      {Icon && <Icon size={16} aria-hidden="true" />}
                      {skill.label}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
