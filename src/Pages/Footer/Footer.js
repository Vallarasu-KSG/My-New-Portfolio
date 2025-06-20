import React from 'react';
import './Footer.css';
import github from '../../Assets/Footer Logo/github logo.png';
import linkedin from '../../Assets/Footer Logo/linked-in logo.png';
import instagram from '../../Assets/Footer Logo/instagram logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Content */}
        <div className="footer-left">
          <h4>Vallarasu K</h4>
          <p>Full Stack Developer | React & Node.js Enthusiast</p>
        </div>

        {/* Center Copyright */}
        <div className="footer-center">
          © 2025 Vallarasu | All Rights Reserved
        </div>

        {/* Right Social Icons */}
        <div className="footer-right">
          <a href="https://github.com/Vallarasu-KSG" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub Logo" />
          </a>
          <a href="https://linkedin.com/in/vallarasu-kasimayan" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn Logo" />
          </a>
          <a href="https://www.instagram.com/jithan__yt/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram Logo" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
