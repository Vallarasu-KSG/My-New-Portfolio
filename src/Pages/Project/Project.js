import React, { useState } from 'react';
import './Project.css';

import FoodieCart from '../../Assets/Project_Img/FoodOrder1.png';
import StudentDashboard from '../../Assets/Project_Img/Student Dashboard.png';
import Netflix from '../../Assets/Project_Img/Netflix Clone Website Image.png';
import ProjectS from '../../Assets/Project_Img/Project-1.png';
import Independence from '../../Assets/Project_Img/Independence Day Website.png';
import BillingImg from '../../Assets/Project_Img/Dry-wash-Billing-website-img.JPG'
import MongoDBlg from '../../Assets/Project_Img/MongoDB-LogIn-imge.JPG'
import WeatherApp from '../../Assets/Project_Img/Weather-App-image.png'
import LogInUIDesign1 from '../../Assets/Project_Img/LogIn-UI-Design1.JPG'
import ToDoListSimple from '../../Assets/Project_Img/To-Do-List-Simple-Img.JPG'

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
    category: "Invoice Management",
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
    title: "Independence Day Website",
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
  {
    id:6,
    img: BillingImg,
    title: "Dry Wash Billing App",
    category:"Invoice Management",
    overview: "This app helps manage dry wash services including billing, customer management, and invoice generation.",
    keySections: [
      {
        heading: "Dashboard",
        description: "View total orders, income, customers and real-time stats."
      },
      {
        heading: "Billing Section",
        description: "Create, view, and print detailed invoices."
      },
      {
        heading: "Customer Management",
        description: "Add, edit, and manage customer details."
      }
  ],
  designHighlights: [
    "Responsive design with mobile-first layout",
    "Invoice formatted for A4 printing",
    "Dark/light theme switcher",
    "Smooth animations and transitions"
  ],
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "CSS Modules"
  ],
  purposeGoals: [
    "Digitize the dry wash billing process",
    "Provide real-time invoice management",
    "Improve customer experience with digital receipts",
    "Enable small businesses to maintain records"
  ],
  liveDemo: "https://dry-wash-billing-app.netlify.app/"
  },
  {
    id:7,
    img: MongoDBlg,
    title: "MongoDB Login Page Clone",
    category: "Authentication UI",
    overview: "This project is a frontend-only clone of the official MongoDB login page built using React. It mimics the structure, styling, and responsiveness of the original design.",
    keySections: [
      {
        heading: "Login Form UI",
        description: "Includes email and password fields with remember me checkbox and login button."
      },
      {
        heading: "Responsive Design",
        description: "The page adapts cleanly across mobile, tablet, and desktop screens."
      },
      {
        heading: "Branding & Styling",
        description: "Uses MongoDB green shades and modern flat UI for aesthetics."
      }
    ],
    designHighlights: [
      "Accurate MongoDB branding and layout",
      "Responsive layout using CSS Flexbox/Grid",
      "Form validation (frontend only)",
      "Minimal, clean interface"
    ],
    technologies: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    purposeGoals: [
      "Improve UI cloning skills",
      "Understand pixel-perfect design implementation",
      "Practice form design and responsiveness",
      "Serve as a reference for future auth-based projects"
    ],
    liveDemo: "https://mongodb-login-page-clone.netlify.app/"
  },
  {
    id:8,
    title: "Simple Weather App",
    img: WeatherApp,
    category: "Weather App",
    overview: "A simple weather application that fetches and displays real-time weather data using OpenWeatherMap API. Built with clean UI and responsive design.",
    keySections: [
      {
        heading: "City Weather Search",
        description: "Allows users to enter a city and fetch current weather details."
      },
      {
        heading: "API Integration",
        description: "Connects with OpenWeatherMap API to fetch live weather info."
      },
      {
        heading: "Responsive Layout",
        description: "Optimized for mobile and desktop views."
      }
    ],
    designHighlights: [
      "Minimalistic and clean UI",
      "Real-time API data display",
      "Mobile-first design",
      "Subtle hover and input animations"
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)",
      "OpenWeatherMap API"
    ],
    purposeGoals: [
      "Practice API integration",
      "Build a utility-based mini project",
      "Improve UI and search functionality",
      "Learn how to handle real-time user input"
    ],
    liveDemo: "https://weather-app-simple1.netlify.app/"
  },
  {
    id:9,
    img: LogInUIDesign1,
    title: "Login & Registration Form-1",
    category: "Authentication UI",
    overview: "A user authentication interface built using React. Includes both login and registration forms with basic form validations and responsive design.",
    keySections: [
      {
        heading: "Login Form",
        description: "Email and password input with validation checks."
      },
      {
        heading: "Registration Form",
        description: "Name, email, and password fields with password confirmation."
      },
      {
        heading: "React State Management",
        description: "Handles form data and switching between login/register views using useState."
      }
    ],
    designHighlights: [
      "Modern and clean UI layout",
      "Form validation messages",
      "Toggle between login and register",
      "Fully responsive"
    ],
    technologies: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    purposeGoals: [
      "Practice authentication form UI",
      "Implement form validation in React",
      "Enhance state management skills",
      "Build a reusable auth form component"
    ],
    liveDemo: "https://reactjs-login-registration-form.netlify.app/"
  },

  {
    id: 10,
    img: ToDoListSimple,
    title: "Simple To-Do List",
    category: "To-Do App",
    overview: "A basic to-do list application that enables users to manage tasks — including adding, marking as complete, and deleting them. Built with vanilla JavaScript.",
    keySections: [
      {
        heading: "Task Input Field",
        description: "Allows users to add new tasks."
      },
      {
        heading: "Task Display Section",
        description: "Shows pending and completed tasks."
      },
      {
        heading: "Task Management",
        description: "Mark tasks as complete or delete them."
      }
    ],
    designHighlights: [
      "Simple and clean UI",
      "Task highlight on completion",
      "Delete functionality",
      "Responsive for mobile and desktop"
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (Vanilla)"
    ],
    purposeGoals: [
      "Practice DOM manipulation",
      "Understand basic JavaScript logic",
      "Build a utility app for daily use",
      "Create a minimalistic project for portfolio"
    ],
    liveDemo: "https://todo-list-app-my.netlify.app/"
  }



];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((proj) => proj.category))];

  const filteredProjects = projects.filter((proj) =>
    selectedCategory === "All" || proj.category === selectedCategory
  );

  return (
    <div className="project-main-section">
      <div className="project-header-sec">
        <h2>PRO<span>J</span>ECT</h2>
      </div>

      <div className="filter-search-wrapper">
        <div className="filter-project-section">
          <div className="category">
            <ul>
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className={selectedCategory === cat ? "active-category" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="project-box-sec">
        <div className="project-inbox-sec">
          <div className="project-section-1">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <button onClick={() => {
                  console.log("Clicked:", project);
                  setSelectedProject(project);
                }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

{selectedProject && (
  <div className="project-detail-overlay" onClick={() => setSelectedProject(null)}>
    <div className="project-detail" onClick={(e) => e.stopPropagation()}>

      <button className="close-top-btn" onClick={() => setSelectedProject(null)}>✖</button>

      <h2>{selectedProject.title}</h2>
      <img src={selectedProject.img} alt={selectedProject.title} />

      <section className="overview-section">
        <h2>Project Overview</h2>
        <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-280v-400l200 200-200 200Z"/></svg>{selectedProject.overview}</p>
      </section>

      <section className="key-sections">
        <h2>Key Sections</h2>
        {selectedProject.keySections.map((section, index) => (
          <div key={index} className="key-section-item">
            <h3>{section.heading}</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-280v-400l200 200-200 200Z"/></svg>{section.description}</p>
          </div>
        ))}
      </section>

      <section className="design-highlights">
        <h2>Design Highlights</h2>
        <ul>
          {selectedProject.designHighlights.map((highlight, index) => (
            <li key={index}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-280v-400l200 200-200 200Z"/></svg>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="technologies-used">
        <h2>Technologies Used</h2>
        <ul>
          {selectedProject.technologies.map((tech, index) => (
            <li key={index}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-280v-400l200 200-200 200Z"/></svg>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="purpose-goals">
        <h2>Purpose and Goals</h2>
        <ul>
          {selectedProject.purposeGoals.map((goal, index) => (
            <li key={index}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-280v-400l200 200-200 200Z"/></svg>{goal}</li>
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
    </div>
  </div>
)}

    </div>
  );
};

export default Project;
