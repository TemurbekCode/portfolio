import { Download, FileText } from 'lucide-react'
import { profile, cv } from '../../data/socials'
import { profileImage } from '../../data/about'
import { useCvAvailable } from '../../hooks/useCvAvailable'
import MediaImage from '../ui/MediaImage'
import SocialLinks from '../ui/SocialLinks'
import './Hero.css'

// Short labels for the strip under the name (edit freely, keep them true).
const focusAreas = ['Frontend Development', 'React & JavaScript', 'Dashboards & Landing Pages', 'Learning Python & FastAPI']

export default function Hero() {
  const cvAvailable = useCvAvailable()

  return (
    <section id="top" className="masthead" aria-labelledby="hero-title">
      <div className="container">
        <div className="masthead__top">
          <div className="masthead__portrait anim anim--1">
            <MediaImage path={profileImage.src} alt={profileImage.alt} eager />
          </div>

          <div className="masthead__title">
            <p className="kicker anim anim--2">Building real interfaces through practice and curiosity</p>
            <h1 id="hero-title" className="masthead__name anim anim--3">Temur Alisherov</h1>
            <p className="masthead__role anim anim--4">Frontend Developer</p>
            <p className="masthead__intro anim anim--5">{profile.intro}</p>
          </div>

          <div className="masthead__status anim anim--4">
            <span className="stamp">Graduating {profile.graduation}</span>
            <span className="masthead__place">{profile.location}</span>
          </div>
        </div>

        <div className="masthead__strip anim anim--6">
          <ul className="masthead__areas">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <div className="masthead__tools">
            {cvAvailable ? (
              <a className="btn btn--secondary" href={cv.url} download={cv.fileName}>
                <Download size={14} aria-hidden="true" /> CV
              </a>
            ) : (
              <span className="btn btn--secondary is-disabled" aria-disabled="true">
                <FileText size={14} aria-hidden="true" /> CV coming soon
              </span>
            )}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
