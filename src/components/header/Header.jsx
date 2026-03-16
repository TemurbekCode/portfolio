import "./Header.css"
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // stars
        const stars = [];
        for (let i = 0; i < 500; i++) {
            const geometry = new THREE.SphereGeometry(0.1, 8, 8);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            star.position.x = (Math.random() - 0.5) * 50;
            star.position.y = (Math.random() - 0.5) * 50;
            star.position.z = (Math.random() - 0.5) * 50;
            scene.add(star);
            stars.push(star);
        }

        const animate = () => {
            requestAnimationFrame(animate);
            stars.forEach(star => {
                star.rotation.x += 0.01;
                star.rotation.y += 0.01;
                star.position.z += 0.05;
                if (star.position.z > 25) star.position.z = -25;
            });
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="headerContainer">
            <canvas ref={canvasRef} className="headerCanvas" />
            <div className="headerContent">
                <div className="leftHead">
                    <h1 className="head-h1" data-aos="fade-up">Hi, I'm Temur</h1>
                    <h1 className="head-h1" data-aos="zoom-in">Frontend Developer</h1><br />
                    <h3 className="h3-head">I'm a junior frontend developer with limited experience, currently improving my skills and learning backend to become a fullstack web developer.</h3>
                    <div className="btns-head">
                        <button className="header-btn">View Projects</button>
                        <button className="header-bt">Contact</button>
                    </div>

                    <div className="cards-head">
                        <div className="headCard">
                            <h1>6 +</h1>
                            <h2>Projects</h2>
                        </div>
                        <div className="headCard">
                            <h1>1 +</h1>
                            <h2>Achievements</h2>
                        </div>
                    </div>
                </div>

                <div className="rightHead">
                    <div className="laptop">
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>

                        <div className="laptopText">
                            <img src="/me.jpg" className="text-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;