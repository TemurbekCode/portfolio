import "./About.css"


function About() {

    return (
        <div className="aboutContainer">
            <h1 className="h1-about">About Me</h1>
            <h2 className="about-h2">Hi! I'm Temur Alisherov, a frontend developer. I enjoy building websites and creating creative UI/UX designs.</h2>
            <div className="leftAbout">
                <div className="card-about1">
                    <div className="line"></div>
                    <b className="b-cardAbout">Skills</b>
                    <p className="p-cardAbout">I build professional web applications using HTML, CSS, JavaScript, Bootstrap, and React. I follow responsive design, clean code practices, and modern UI/UX principles.</p>
                    <div className="front">
                        <p className="icons-about">🧑🏻‍💻</p>
                        <p>- Frontend: HTML, CSS, BOOSTRAP, JS, React</p>
                    </div>
                    <div className="tool">
                        <p className="icons-about">⚙️</p>
                        <p>- Tools: GitHub, VS Code</p>
                    </div>
                </div>
                <div className="card-about">
                    <div className="line"></div>
                    <b className="b-cardAbout">Goals</b>
                    <p className="p-cardAbout">My goal is to create interactive and creative web projects that provide users with the best experience.
                        <p className="p-scndAbout">I constantly learn new technologies and enjoy writing code.</p></p>
                </div>
            </div>

            <div className="rightAbout">
                <div className="logoAbout">
                    <img src="comp-me.png" className="logoAbout" />
                </div>
            </div>
        </div>
    )
}

export default About;