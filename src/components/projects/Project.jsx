import { color } from "three/src/nodes/tsl/TSLCore.js";
import "./Project.css"


function Project() {

    return (
        <div className="projectContainer">
            <h1 className="h1-project">Projects</h1>

            <div className="cards">
                <div className="card">
                    <div className="imgSchool">
                        <img className="imgSchool" src="schoolSite.png" />
                    </div>

                    <h1 className="h1-card">School WebSite</h1>
                    <p className="p-proj">This WebSite made for 103-Public School in Samarkand Urgut</p>
                    <div className="tools-proj">
                        <div className="tool-proj">React js</div>
                        <div className="tool-proj">Java Script</div>
                        <div className="tool-proj">HTML</div>
                        <div className="tool-proj">CSS</div>
                    </div>

                    <div className="btns-projects">
                        <a href="https://urgut-103-maktab.netlify.app/">
                            <button className="btn-project btn-live">🔴 Live</button>
                        </a>

                        <a href="https://github.com/TemurbekCode">
                            <button className="btn-project btn-github">⚙️ GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSchool">
                        <img className="imgSchool" src="travelSite.png" />
                    </div>

                    <h2 className="h1-card">Pero Travel Fake Made for Practice</h2>
                    <p className="p-proj">Pero Travel copy site made for pass the final exam of FrontEnd development course!</p>
                    <div className="tools-proj">
                        <div className="tool-proj">React js</div>
                        <div className="tool-proj">Java Script</div>
                        <div className="tool-proj">HTML</div>
                        <div className="tool-proj">CSS</div>
                    </div>

                    <div className="btns-projects">
                        <a href="https://perotravel-my-portfolio-temur.netlify.app/">
                            <button className="btn-project btn-live">🔴 Live</button>
                        </a>

                        <a href="https://github.com/TemurbekCode">
                            <button className="btn-project btn-github">⚙️ GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSchool">
                        <img className="imgSchool" src="fontSite.png" />
                    </div>

                    <h2 className="h1-card">Font Fake Made for Practice</h2>
                    <p className="p-proj">Font - This site made for pass the mid term of FrontEnd course!</p>
                    <div className="tools-proj">
                        <div className="tool-proj">React js</div>
                        <div className="tool-proj">Java Script</div>
                        <div className="tool-proj">HTML</div>
                        <div className="tool-proj">CSS</div>
                    </div>

                    <div className="btns-projects">
                        <a href="https://fonte-fake-temur.netlify.app/">
                            <button className="btn-project btn-live">🔴 Live</button>
                        </a>

                        <a href="https://github.com/TemurbekCode">
                            <button className="btn-project btn-github">⚙️ GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSchool">
                        <img className="imgSchool" src="portfolioSite.png" />
                    </div>

                    <h1 className="h1-card">Portfolio Site</h1>
                    <p className="p-proj">Protfolio Site - Made for describe myself without (job or univercity) interview!</p>
                    <div className="tools-proj">
                        <div className="tool-proj">React js</div>
                        <div className="tool-proj">Java Script</div>
                        <div className="tool-proj">HTML</div>
                        <div className="tool-proj">CSS</div>
                    </div>

                    <div className="btns-projects">
                        <a href="https://portfolio-temurbek.netlify.app/">
                            <button className="btn-project btn-live">🔴 Live</button>
                        </a>

                        <a href="https://github.com/TemurbekCode">
                            <button className="btn-project btn-github">⚙️ GitHub</button>
                        </a>
                    </div>
                </div>
            </div>

            <details className="smallsCont">
                <summary className="check">
                    <mark>Small Projects</mark>
                </summary>
                <a className="links-summ" href="https://expanding-card-animation.netlify.app/">Images Animation</a>
                <a className="links-summ" href="https://todo-small-temur.netlify.app/">To Do App</a>
                <a className="links-summ" href="https://todo-unn-temur.netlify.app/">Small To Do App</a>
                <a className="links-summ" href="https://message-animation.netlify.app/">Check Button Message Animation</a>
            </details>
        </div>
    )
}

export default Project;