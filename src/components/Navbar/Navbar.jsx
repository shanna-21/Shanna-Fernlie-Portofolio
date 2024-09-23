import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo4.png'
import mail from '../../assets/mail-icon-1.png'
import linkedin from '../../assets/linkedin-icon.png'
import Github from '../../assets/github-icon-1.png'

const Navbar = () => {

const[sticky, setSticky] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
},[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Offer</li>
            <li>About Me</li>
            {/* <li>Campus</li> */}
            <li>Projects</li>
            <li>
              <img onClick={() => window.location.href='mailto:shanna.fernlie@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out.'} className='mail-icon' src={mail} alt="" />
            </li>
            <li>
              <img onClick={() => window.location.href='http://linkedin.com/in/shanna-fernlie-71928524b'} className='linked-icon' src={linkedin} alt="" />
            </li>
            <li>
              <img onClick={() => window.location.href='https://github.com/shanna-21'} className='git-icon' src={Github} alt="" />
            </li>
           
        </ul>
    </nav>
  )
}

export default Navbar