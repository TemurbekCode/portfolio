import "./Skills.css"

function Skills() {
    return (
        <div className="skillsContainer">
            <h1 className="h1-skills">My Skills</h1>

            <div className="skillsCard">
                <div className="cont-topic">
                    <h1 className="h1-cont">FrontEnd Development</h1>
                    <p className="p-cont">Using HTML, CSS, JavaScript, React</p>
                </div>

                {/* Skill 1 */}
                <div className="skill">
                    <div className="skill-info">
                        <span>HTML5 & CSS3</span>
                        <span>95%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-fill html"></div>
                    </div>
                </div>

                {/* Skill 2 */}
                <div className="skill">
                    <div className="skill-info">
                        <span>JavaScript</span>
                        <span>88%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-fill js"></div>
                    </div>
                </div>

                {/* Skill 3 */}
                <div className="skill">
                    <div className="skill-info">
                        <span>React & Vite</span>
                        <span>98%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-fill react"></div>
                    </div>
                </div>

                {/* Skill 4 */}
                <div className="skill">
                    <div className="skill-info">
                        <span>Bootstrap</span>
                        <span>20%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-fill bootstrap"></div>
                    </div>
                </div>

                {/* Skill 5 */}
                <div className="skill">
                    <div className="skill-info">
                        <span>Git & GitHub</span>
                        <span>85%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-fill git"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;