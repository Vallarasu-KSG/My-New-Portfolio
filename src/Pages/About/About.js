import React from 'react';
import './About.css'; // Import the CSS file
import profilePic from '../../Assets/img/my-img.png'; // Update with your actual path


const About = () => {
  return (
    <div className='about-main'>
    <div className="project-header-sec">
        <h2 className='abouth2'>ABOUT <span>ME</span></h2>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Vallarasu Profile" />
        </div>
        <div className="about-text-box">
          <p className="about-text">
            Hi, I'm <strong>Vallarasu</strong>, a self-motivated and passionate <strong>Full Stack Web Developer</strong>.
            I recently completed my training in <strong>Frontend and Backend Development</strong>, and I'm excited to start my journey in the tech industry.
          </p>
          <p className="about-text">
            Even though I'm a fresher in development, I've built several real-world projects using:
            <br />
            <strong>HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js</strong>.
          </p>
          <p className="about-text">
            I enjoy learning new technologies and solving problems through code. I'm always curious and focused on building
            smart and user-friendly web applications. I'm now looking for an opportunity to grow and contribute as a developer.
          </p>
        </div>
      </div>
    </div>

  );
};

export default About;
