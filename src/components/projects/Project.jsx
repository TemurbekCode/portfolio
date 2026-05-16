import "./Project.css"

const projects = [
    {
        num: "01",
        title: "School WebSite",
        desc: "Made for 103-Public School in Samarkand Urgut",
        img: "schoolSite.png",
        tools: ["React js", "JavaScript", "HTML", "CSS"],
        live: "https://urgut-103-maktab.netlify.app/",
        github: "https://github.com/TemurbekCode",
    },
    {
        num: "02",
        title: "Pero Travel",
        desc: "Copy site made for the final exam of FrontEnd development course",
        img: "travelSite.png",
        tools: ["React js", "JavaScript", "HTML", "CSS"],
        live: "https://perotravel-my-portfolio-temur.netlify.app/",
        github: "https://github.com/TemurbekCode",
    },
    {
        num: "03",
        title: "Rustam's Portfolio",
        desc: "The Portfolio WebSite that made for the hight school student",
        img: "rustam.jpg",
        tools: ["React js", "JavaScript", "HTML", "CSS"],
        live: "https://teacher-rustam.netlify.app/",
        github: "https://github.com/TemurbekCode",
    },
    {
        num: "04",
        title: "Portfolio Site",
        desc: "Made to describe myself without a job or university interview",
        img: "portfolioSite.png",
        tools: ["React js", "JavaScript", "HTML", "CSS"],
        live: "https://portfolio-temurbek.netlify.app/",
        github: "https://github.com/TemurbekCode",
    },
    {
        num: "05",
        title: "Restaurant Site",
        desc: "Foodly — a restaurant landing page with menu and booking",
        img: "restaurant.jpg",
        tools: ["React js", "JavaScript", "HTML", "CSS"],
        live: "https://foodly-restaurant.netlify.app/",
        github: "https://github.com/TemurbekCode",
    },
    {
        num: "06",
        title: "Web Company Site",
        desc: "Webrivo — agency site built for practice",
        img: "webrivo.jpg",
        tools: ["React js", "JavaScript", "HTML", "CSS"],
        live: "https://webrivo.netlify.app/",
        github: "https://github.com/TemurbekCode",
    },
]

const smallProjects = [
    { label: "Images Animation", href: "https://expanding-card-animation.netlify.app/" },
    { label: "To Do App", href: "https://todo-small-temur.netlify.app/" },
    { label: "Small To Do App", href: "https://todo-unn-temur.netlify.app/" },
    { label: "Check Button Message Animation", href: "https://message-animation.netlify.app/" },
    { label: "Business Web Card", href: "https://temur-business-card.netlify.app/" },
]

function ProjectCard({ num, title, desc, img, tools, live, github }) {
    return (
        <div className="proj-card">
            <div className="proj-card-img">
                <span className="proj-card-num">{num}</span>
                <img src={img} alt={title} />
            </div>
            <div className="proj-card-body">
                <h2 className="proj-card-title">{title}</h2>
                <p className="proj-card-desc">{desc}</p>
                <div className="proj-tags">
                    {tools.map((t) => (
                        <span key={t} className="proj-tag">{t}</span>
                    ))}
                </div>
                <div className="proj-btns">
                    <a href={live} target="_blank" rel="noreferrer" className="proj-btn proj-btn-live">
                        live &rarr;
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-gh">
                        github
                    </a>
                </div>
            </div>
        </div>
    )
}

function Project() {
    return (
        <div className="projectContainer">
            <div className="proj-header">
                <p className="proj-eyebrow">// what i built</p>
                <h1 className="proj-title">
                    my <span className="proj-title-accent">projects_</span>
                </h1>
                <p className="proj-subtitle">selected work — hover to explore</p>
            </div>

            <div className="proj-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.num} {...p} />
                ))}
            </div>

            <div className="smalls-section">
                <p className="smalls-label">// small projects</p>
                {smallProjects.map((s) => (
                    <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="small-link">
                        <span>{s.label}</span>
                        <span className="small-arr">↗</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project