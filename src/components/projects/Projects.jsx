import { FaGithub } from 'react-icons/fa6'
import { projects } from '../../data/projects'
import { allProjectsUrl } from '../../data/socials'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="03"
          title="Projects"
          id="projects-title"
          subtitle="A few of the projects I am proudest of. More landing pages and experiments live on GitHub."
        />

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} reversed={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="projects__more">
          <a className="btn btn--secondary" href={allProjectsUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} aria-hidden="true" /> View all projects on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
