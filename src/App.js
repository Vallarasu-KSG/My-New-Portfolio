import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Skills from './Pages/Skills/Skills'
import Project from './Pages/Project/Project'
import Education from './Pages/Education/Education'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import Popup from './Components/Popup/Popup'
import Experience from './Pages/Experience/Experience'
import Pages from './Pages/Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Popup/>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Pages/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/project' element={<Project/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App