import './App.css'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage.jsx";
import About from './components/about/About.jsx';
import Project from './components/projects/Project.jsx';
import Skills from './components/skills/Skills.jsx';
import Register from './components/register/Register.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;