import { ArrowDown, Download, FileText } from 'lucide-react'
import { profile, cv } from '../../data/socials'
import { profileImage } from '../../data/about'
import { useCvAvailable } from '../../hooks/useCvAvailable'
import MediaImage from '../ui/MediaImage'
import SocialLinks from '../ui/SocialLinks'
import './Hero.css'

export default function Hero() {
  const cvAvailable = useCvAvailable()

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow anim anim--1">Portfolio</p>
          <h1 id="hero-title" className="hero__name anim anim--2">
            Temur
            <br />
            Alisherov
          </h1>
          <p className="hero__role anim anim--3">Frontend Developer</p>
          <p className="hero__intro anim anim--4">{profile.intro}</p>

          <div className="hero__actions anim anim--5">
            <a className="btn btn--primary" href="#projects">
              View projects
            </a>
            {cvAvailable ? (
              <a className="btn btn--secondary" href={cv.url} download={cv.fileName}>
                <Download size={18} aria-hidden="true" /> Download CV
              </a>
            ) : (
              <span className="btn btn--secondary is-disabled" aria-disabled="true">
                <FileText size={18} aria-hidden="true" /> CV coming soon
              </span>
            )}
          </div>

          <SocialLinks className="hero__social anim anim--6" />
        </div>

        <div className="hero__media">
          <div className="hero__photo">
            <MediaImage path={profileImage.src} alt={profileImage.alt} eager />
          </div>
          <span className="hero__frame" aria-hidden="true" />
        </div>
      </div>

      <a href="#about" className="hero__scroll anim anim--7" aria-label="Scroll to About section">
        <span>Scroll</span>
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  )
}
