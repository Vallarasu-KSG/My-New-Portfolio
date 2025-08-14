import React from 'react'
import './Experience.css'

const experienceData = [
  {
    year: "2019 - 2022",
    role: "Team Leader",
    company: "Reliance Trends ( Retil Sector ) ",
    description: "At Reliance Trends, I worked as a Team Leader overseeing customer service and back-office operations. I led a team of 5+ associates, managed daily sales and accounting entries, ensured smooth POS billing, and handled stock-level reporting and escalated customer issues. My role gave me strong leadership, multitasking, and communication skills in a fast-paced retail environment.",
  },
  {
   year: "2022 - 2023",
   role: "Senior Customer Relationship Officer",
   company: "BabyHug (Brain Bee Solution)",
   description: "As a Senior Customer Relationship Officer, I was responsible for building and maintaining strong relationships with customers to ensure satisfaction, loyalty, and repeat business. I served as the primary point of contact for customer interactions, representing the company's values and commitment to service excellence."
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
    <div className="experience-header-sec">
        <h2 className="experience-title">EXPER<span>I</span>ENCE</h2>
    </div>
    <div className="experience-box">
        {experienceData.map((item, index) => (
        <div key={index} className="experience-card">
            <h5 className="experience-company">🏢 {item.company}</h5>
            <h4 className="experience-role">👔 {item.role}</h4>
            <h3 className="experience-year">📅 {item.year}</h3>
            <p className="experience-description">📝 {item.description}</p>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Experience