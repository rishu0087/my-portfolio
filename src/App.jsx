import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import './index.css'
const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About />
        <Experience/>
        <Project />
        <Contact />
        <Footer />
    </>
  )
}

export default App