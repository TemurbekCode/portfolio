import { SiHtml5, SiCss, SiSass, SiJavascript, SiReact, SiVite, SiGit, SiGithub, SiPython, SiFastapi, SiFlutter } from 'react-icons/si'

const icons = {
  html5: SiHtml5,
  css: SiCss,
  sass: SiSass,
  javascript: SiJavascript,
  react: SiReact,
  vite: SiVite,
  git: SiGit,
  github: SiGithub,
  python: SiPython,
  fastapi: SiFastapi,
  flutter: SiFlutter,
}

export default function SkillIcon({ name, size = 26 }) {
  const Icon = icons[name]
  return Icon ? <Icon size={size} aria-hidden="true" /> : null
}
