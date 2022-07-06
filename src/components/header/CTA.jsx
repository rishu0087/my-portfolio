import React from 'react'
import './header.css'
import Resume from '../../assets/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        <div className='me'>
            <img src='' alt=''/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
  )
}

export default CTA