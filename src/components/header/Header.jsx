import React from 'react'
import './header.css'
import Typing from './Typing'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import mebg from '../../assets/mebg.png'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
          <h1 style={{ fontWeight: 'bold', fontSize: 40}}>
          Rishabh Agrawal &#128104;&#8205;&#128187;
          </h1>
          <h5 className='text-light'>Software Developer</h5>
          <Typing/>
          <CTA/>
          <div className="mee">
            <img src={mebg} alt="ME"/>
          </div>
          <HeaderSocial/>
      </div>
    </header>
  )
}

export default Header