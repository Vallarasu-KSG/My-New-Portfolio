import React, { useState } from 'react';
import './Project.css';

import FoodieCart from '../../Assets/Project_Img/FoodOrder1.png';
import StudentDashboard from '../../Assets/Project_Img/Student Dashboard.png';
import Netflix from '../../Assets/Project_Img/Netflix Clone Website Image.png';
import ProjectS from '../../Assets/Project_Img/Project-1.png';
import Independence from '../../Assets/Project_Img/Independence Day Website.png';

const projects = [
  {
    id: 1,
    img: FoodieCart,
    title: "Foodie Cart - Online Orders",
    category: "E-commerce",
    overview: "Foodie Cart is a responsive food ordering platform...",
    keySections: [
      { heading: "Food Listing", description: "Displays a variety of food items..." },
      { heading: "Cart System", description: "Real-time cart updates..." },
      { heading: "Checkout Flow", description: "Simulated checkout experience..." }
    ],
    designHighlights: [
      "Fully responsive across all devices.",
      "Clean, modern food-themed UI.",
      "Interactive cart and smooth state updates.",
      "User-friendly and engaging layout."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    purposeGoals: [
      "Build a functional UI for an online food cart.",
      "Practice React components and state management.",
      "Simulate real-world e-commerce behavior."
    ],
    liveDemo: "https://foodie-cart-online-orders.netlify.app/"
  },
  {
    id: 2,
    img: StudentDashboard,
    title: "Student Dashboard Management",
    category: "Educational",
    overview: "Student Dashboard Management is a user-friendly web application...",
    keySections: [
      { heading: "Dashboard Overview", description: "Displays a summary of student data..." },
      { heading: "Add Student", description: "A form to add student details..." },
      { heading: "Student Records", description: "Table view with edit/delete features." }
    ],
    designHighlights: [
      "Mobile-responsive layout.",
      "Interactive form validations.",
      "Dynamic table updates.",
      "Smooth navigation."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    purposeGoals: [
      "Simplify student data management.",
      "Demonstrate React CRUD functionality.",
      "Practice component-based architecture."
    ],
    liveDemo: "https://student-dashboard-management.netlify.app/"
  },
  {
    id: 3,
    img: Netflix,
    title: "Movie NetFlix Website",
    category: "Entertainment",
    overview: "A dynamic platform for discovering movies with real-time data integration...",
    keySections: [
      { heading: "Homepage Layout", description: "Displays trending movies and trailers." },
      { heading: "Movie Search", description: "Search by name or genre." },
      { heading: "Movie Details", description: "Details with ratings and media." },
    ],
    designHighlights: [
      "Responsive design.",
      "Smooth scrolling.",
      "Modern UI.",
      "API-integrated movie data."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "TMDB API"],
    purposeGoals: [
      "Movie discovery platform.",
      "Showcase API integration skills.",
      "Responsive web experience."
    ],
    liveDemo: "https://movie-net-flix-website.netlify.app/"
  },
  {
    id: 4,
    img: ProjectS,
    title: "Shenba's Skills Portfolio Website",
    category: "Portfolio",
    overview: "Personal portfolio website to showcase technical skills...",
    keySections: [
      { heading: "Home", description: "Intro with name and tagline." },
      { heading: "About", description: "Self-introduction and career goals." },
      { heading: "Skills", description: "Listed skills with visual display." },
      { heading: "Projects", description: "Portfolio of Shenba's work." },
      { heading: "Contact", description: "Email, phone, and social links." }
    ],
    designHighlights: [
      "Minimal UI/UX.",
      "Smooth scrolling.",
      "Mobile responsive.",
      "Fast loading SEO-optimized."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    purposeGoals: [
      "Build an online presence.",
      "Act as an online resume.",
      "Showcase capabilities."
    ],
    liveDemo: "https://shenbas-skills.netlify.app/"
  },
  {
    id: 5,
    img: Independence,
    title: "Independence Day Celebration Website",
    category: "Event",
    overview: "A static front-end website to commemorate India's Independence Day...",
    keySections: [
      { heading: "Hero Section", description: "Bold patriotic message with animations." },
      { heading: "Indian Flag Display", description: "Flag integration with design." },
      { heading: "Contact", description: "Contact section for events." }
    ],
    designHighlights: [
      "Patriotic theme colors.",
      "Smooth animations.",
      "Mobile responsive.",
      "Event-based layout."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    purposeGoals: [
      "Show front-end design skills.",
      "Responsive design principles.",
      "Create an event landing page."
    ],
    liveDemo: "https://independence-day-website-by-jv.netlify.app/"
  },
  
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='project-main-section'>
      <div className="project-header-sec">
        <h2>PRO<span>J</span>ECT</h2>
      </div>

      <div className="project-box-sec">
        <div className="project-inbox-sec">
          <div className="project-section-1">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <button onClick={() => setSelectedProject(project)}>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="project-detail-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-detail" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.img} alt={selectedProject.title} />

            <section className="overview-section">
              <h2>Project Overview</h2>
              <p>{selectedProject.overview}</p>
            </section>

            <section className="key-sections">
              <h2>Key Sections</h2>
              {selectedProject.keySections.map((section, index) => (
                <div key={index} className="key-section-item">
                  <h3>{section.heading}</h3>
                  <p>{section.description}</p>
                </div>
              ))}
            </section>

            <section className="design-highlights">
              <h2>Design Highlights</h2>
              <ul>
                {selectedProject.designHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section className="technologies-used">
              <h2>Technologies Used</h2>
              <ul>
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>

            <section className="purpose-goals">
              <h2>Purpose and Goals</h2>
              <ul>
                {selectedProject.purposeGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </section>

            {selectedProject.liveDemo && (
              <div className="live-demo-button">
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                  <button>Live Demo</button>
                </a>
              </div>
            )}

            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
