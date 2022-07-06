import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './Footer.css'
const footer = () => {
  return (
    <footer className='footer'>
      <a href='/' className='footer_logo'>Rishabh</a>
      <ul className='permalinks'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_social">
        <a href="https://www.facebook.com/profile.php?id=100007612787455" target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href='https://instagram.com/rishabh__09_?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href='https://twitter.com/Rishu924' target='_blank' rel="noreferrer"><FaTwitter/></a>
      </div>
      <div className='footer_love'>
        <p className='foot'>Made with &#10084;&#65039; by rishabh</p>
      </div>
    </footer>
  )
}

export default footer