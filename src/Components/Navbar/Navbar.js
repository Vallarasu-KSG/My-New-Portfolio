import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import barIcon from '../../Assets/Icons/navbar-Icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const onScrollOption = (sectionIndex) => {
    window.scrollTo({
      top: window.innerHeight * sectionIndex,
      behavior: 'smooth'
    });
    setIsOpen(false); // close menu on mobile after click
  };
  
  


  return (
    <nav className="navbar-main-section">
      <div className="navbar-left-sec">
      <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <p><span>V</span>ALLARASU <span>K</span></p>
      </Link>
      </div>

      <div className={`navbar-right-sec ${isOpen ? 'open' : ''}`}>
        <Link onClick={() => onScrollOption(0)}>Home</Link>
        <Link onClick={() => window.scrollTo({ top: 723, behavior: 'smooth' })}>Skills</Link>
        <Link onClick={() => window.scrollTo({ top: 1485, behavior: 'smooth' })}>Projects</Link>
        <Link onClick={() => window.scrollTo({ top: 2332, behavior: 'smooth' })}>Education</Link>
        <Link onClick={() => window.scrollTo({ top: 3565, behavior: 'smooth' })}>About</Link>
        <Link onClick={() => window.scrollTo({ top: 4358, behavior: 'smooth' })}>Contact</Link>
        {/* <Link onClick={() => onScrollOption(1)}>Skills</Link> */}
        {/* <Link onClick={() => onScrollOption(2)}>Projects</Link> */}
        {/* <Link onClick={() => onScrollOption(3)}>Education</Link> */}
        {/* <Link onClick={() => onScrollOption(5)}>About</Link> */}
        {/* <Link onClick={() => onScrollOption(8)}>Contact</Link> */}
      </div>

      <button className="mbtn" onClick={toggleMenu}>
        <img src={barIcon} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
