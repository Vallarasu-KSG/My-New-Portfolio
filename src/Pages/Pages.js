import React from 'react'

import Home from './Home/Home'
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Education from './Education/Education';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';

const Pages = () => {
  return (
    <div>
        <Home/>
        <Skills/>
        <Project/>
        <Education/>
        <Experience/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Pages