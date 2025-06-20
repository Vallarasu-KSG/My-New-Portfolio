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
      <div className="about-text">
        {/* <h1>About Me</h1> */}
        <p>
          Hi, I'm Vallarasu - a passionate and self-motivated Full Stack Web Developer from Madurai, TamilNadu, India.
        </p>
        <p>
          I come from a non-IT background with a degree in B.A. History from Pachaiyappa’s College, but I’ve always been driven by a deep curiosity for technology.
        </p>
        <p>
          After gaining 3.5 years of experience in the retail sector at Reliance Trends, I made a bold decision to switch careers and follow my interest in web development.
        </p>
        <p>
          I recently completed intensive training in MERN Stack Development (MongoDB, Express.js, React.js, Node.js) and have built multiple real-world projects — including e-commerce, invoice management, and utility apps.
        </p>
        <p>
          I enjoy turning ideas into reality using clean and efficient code. I'm particularly interested in building responsive web apps, working on backend logic, and creating smooth user experiences.
        </p>
      </div>
    </div>
    </div>

  );
};

export default About;
