import "./About.css";

function About() {
  return (
    <div className="aboutContainer">
      {/* Background canvas effect via CSS */}
      <div className="about-bg"></div>

      <div className="about-inner">
        {/* Title */}
        <div className="about-title-wrap">
          <span className="about-tag">// about me</span>
          <h1 className="h1-about">About Me</h1>
          <p className="about-h2">
            Hi! I'm <span className="about-highlight">Temur Alisherov</span>, a
            frontend developer. I enjoy building websites and creating creative
            UI/UX designs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left — Cards */}
          <div className="leftAbout">
            {/* Skills Card */}
            <div className="card-about">
              <div className="card-line"></div>
              <div className="card-icon">🧑🏻‍💻</div>
              <b className="b-cardAbout">Skills</b>
              <p className="p-cardAbout">
                I build professional web applications using HTML, CSS,
                JavaScript, Bootstrap, and React. I follow responsive design,
                clean code practices, and modern UI/UX principles.
              </p>
              <div className="card-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
              </div>
              <div className="card-tools">
                <span className="tool-item">⚙️ GitHub</span>
                <span className="tool-item">💻 VS Code</span>
              </div>
            </div>

            {/* Goals Card */}
            <div className="card-about card-about--goals">
              <div className="card-line"></div>
              <div className="card-icon">🎯</div>
              <b className="b-cardAbout">Goals</b>
              <p className="p-cardAbout">
                My goal is to create interactive and creative web projects that
                provide users with the best experience.
              </p>
              <p className="p-scndAbout">
                I constantly learn new technologies and enjoy writing code.
              </p>

              <div className="goal-steps">
                <div className="goal-step">
                  <span className="step-dot"></span>
                  <span>Master React & TypeScript</span>
                </div>
                <div className="goal-step">
                  <span className="step-dot"></span>
                  <span>Learn Node.js & backend</span>
                </div>
                <div className="goal-step">
                  <span className="step-dot"></span>
                  <span>Become a Fullstack Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="rightAbout">
            <div className="img-wrapper">
              <div className="img-glow"></div>
              <img src="comp-me.png" className="about-img" alt="Temur coding" />
              <div className="img-badge">
                <span>6+</span> Projects
              </div>
              <div className="img-badge img-badge--right">
                <span>10+</span> Achievements
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;