import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import barIcon from '../../Assets/Icons/navbar-Icon.png';

const sections = ['Home', 'Skills', 'Projects', 'Education', 'Experience', 'About', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (index) => {
    setActiveIndex(index);
    const sectionHeights = [0, 670, 1470, 2280, 3000, 3530, 4200];
    window.scrollTo({
      top: sectionHeights[index],
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(currentScroll < lastScrollY || currentScroll < 50);
      setLastScrollY(currentScroll);

      const breakpoints = [0, 670, 1470, 2280, 3000, 3530, 4200];
      const index = breakpoints.findIndex((bp, i) => currentScroll >= bp && currentScroll < (breakpoints[i + 1] || Infinity));
      if (index !== -1 && index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeIndex]);

  return (
    <nav className={`navbar-main-section ${showNav ? 'show' : 'hide'}`}>
      <div className="navbar-left-sec">
        <Link to="/" onClick={() => scrollToSection(0)}>
          <p><span>V</span>ALLARASU <span>K</span></p>
        </Link>
      </div>

      <div className={`navbar-right-sec ${isOpen ? 'open' : ''}`}>
        {sections.map((section, index) => (
          <Link
            key={section}
            onClick={() => scrollToSection(index)}
            className={activeIndex === index ? 'active-link' : ''}
          >
            {section}
          </Link>
        ))}
      </div>

      <button className="mbtn" onClick={toggleMenu}>
        <img src={barIcon} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
