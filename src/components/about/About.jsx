import React from 'react'
import {FaBirthdayCake} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {BiCode} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import {BiBuildings} from 'react-icons/bi'
import meimg from '../../assets/meimg.jpeg'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={meimg} alt='About-ig'/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
              <article className="about_card">
                <FaBirthdayCake className='about_icon'/>
                <h5>9 March 2001</h5>
              </article>
              <article className="about_card">
                <GoLocation className='about_icon'/>
                <h5>Surat, Gujarat</h5>
              </article>
              <article className="about_card">
                <FaGraduationCap className='about_icon'/>
                <h5>Degree</h5>
                <small>B.tech</small>
              </article>
              <article className="about_card">
                <BiCode className='about_icon'/>
                <h5>Coding Hours</h5>
                <small>1000+</small>
              </article>
              <article className="about_card">
                <BiBuildings className='about_icon'/>
                <h5>Organisations</h5>
                <samll>5</samll>
              </article>
            </div>
            <p>
            a coder who has demonstrated their ability to overcome challenges in the real world. 
            I'm an enthusiastic full-stack developer from India who also enjoys creating Android apps. 
            I enjoy working on a variety of projects. Hackathon participation is something I really want to do. 
            eager to collaborating on fresh ideas with others. I will be pleased to address any inquiries you may have regarding my domain. 
            I'm interested in learning more about game, blockchain, machine learning, and artificial intelligence technology. 
            I learn things quickly and have a keen interest in learning new things.
            </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About