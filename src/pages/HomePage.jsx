//components
import Header from "../components/header/Header";
import About from "../components/about/About";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";
import Register from "../components/register/Register";
import Footer from "../components/footer/Footer";

function HomePage() {

    return (
        <>
            <Header />
            <About />
            <Project />
            <Skills />
            <Register />
            <Footer />
        </>
    )
}


export default HomePage;