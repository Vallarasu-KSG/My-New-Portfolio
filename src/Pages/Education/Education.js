import React from "react";
import "./Education.css";
// import img11 from '../../Assets/Certification/aaa.jpg'
const educationData = [
  {
    year: "2016 - 2018",
    title: "Higher Secondary Education",
    institution: "Government Higher Secondary School",
    description: "Focused on History stream with Computer Science specialization.",
    // img: img11, 
  },
  {
    year: "2018 - 2021",
    title: "Bachelor of Arts (B.A) - History",
    institution: "Pachaiyappa's College, Madras University",
    description: "Explored the political, cultural, and economic evolution of societies from ancient to modern times.",
    // img: img11, 
  },
  {
    year: "2022 - 2023",
    title: "Diploma in Computer Application [DCA]",
    institution: "Computer Software College [CSC]",
    description: "Acquired foundational skills in MS Office, and developed programming knowledge in C and C++ languages.",
    // img: img11,
  },
  {
    year: "2023 - 2024",
    title: "Certificate Course in Python [CCP]",
    institution: "Computer Software College [CSC]",
    description: "Completed a professional certification in Python, covering fundamentals, object-oriented programming, and real-world project development.",
    // img: img11,
  },
  {
    year: "2024 - 2025",
    title: "Full Stack Developer [FSD]",
    institution: "Entri Elavate",
    description: "Mastered front-end, back-end, database, and deployment skills to build complete web applications.",
    // img: img11,
  },
];

const Education = () => {
  return (
    <div className="education-container">
        <div className="project-header-sec">
            <h2 className="education-title">EDUC<span>A</span>TION</h2>
        </div>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`education-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="education-content">
              {/* Image and text side-by-side */}
              <div className="education-row">
                {index % 2 === 0 && item.img && (
                  <div className="education-img">
                    <img src={item.img} alt="certificate" />
                  </div>
                )}
                <div className="education-text">
                  <h3 className="education-year">{item.year}</h3>
                  <h4 className="education-degree">{item.title}</h4>
                  <h5 className="education-institution">{item.institution}</h5>
                  <p className="education-description">{item.description}</p>
                </div>
                {index % 2 !== 0 && item.img && (
                  <div className="education-img">
                    <img src={item.img} alt="certificate" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
