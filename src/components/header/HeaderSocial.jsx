import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/rishabh-agrawal-015a571b7/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/rishu0087' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://discordapp.com/users/rishu_09' target='_blank' rel="noreferrer"><FaDiscord/></a>
    </div>
  )
}

export default HeaderSocial