import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';

import MyPic from '../../Assets/img/my-img.png';
import resumeFile from '../../Assets/resume_file/Entri Resum 2.0.pdf'

const Home = () => {
    const texts = useMemo(() => ["Front-end Developer", "Back-end Developer", "Full Stack Developer", "Mern Stack Developer"], []);

    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        const fullText = texts[textIndex];

        if (!isDeleting && charIndex === fullText.length) {
            setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
            return;
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            return;
        }

        const typingEffect = () => {
            setCurrentText(fullText.substring(0, charIndex + (isDeleting ? -1 : 1)));
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        };

        const timeout = setTimeout(typingEffect, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts]);

    return (
    <div className="Home-Header">
        <header className="header-main-section">
            <div className="header-left-sec-main">
                <div className="header-left-sec-1">
                    <p className="header-left-text-1">Hi, <span>I'M</span></p>
                    <p className="header-left-text-2">Vallarasu K</p>
                    <p className="header-left-text-3">I am a <span className="skillschangetext">{currentText}</span></p>
                    <p className="header-left-text-4">
                        I am a passionate Full Stack Developer with expertise in Frontend, Backend, and React Development. 
                        With a strong foundation in web technologies, I specialize in building dynamic, responsive, and 
                        user-friendly applications. I am always eager to learn and implement new technologies to create 
                        high-quality solutions.
                    </p>
                </div>
                <div className="header-left-sec-2">
                    <a href={resumeFile} download="Resume.pdf">
                        <button>Download Resume</button>
                    </a>
                </div>
            </div>
            <div className="header-right-sec">
                <div className="header-right-sec-img">
                    <img src={MyPic} alt="Vallarasu" />
                </div>
            </div>
        </header>
    </div>
    );
};

export default Home;
