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
          Hi, I'm Vallarasu, a passionate Full Stack Developer with a deep interest in creating dynamic and user-friendly web applications.
        </p>
        <p>
          I love transforming ideas into reality through clean, efficient code and innovative design. My core expertise lies in technologies like React.js, Node.js, Express, and MongoDB. I'm always eager to learn new frameworks and tools that enhance the web development experience.
        </p>
        <p>
          My career goal is to become a highly skilled Full Stack Developer, contributing to meaningful projects that make a real difference.
        </p>
        <p>
          Beyond coding, I enjoy gaming, photo/video editing, and diving into history documentaries, which fuel my creativity and curiosity.
        </p>
      </div>
    </div>
    </div>

  );
};

export default About;
