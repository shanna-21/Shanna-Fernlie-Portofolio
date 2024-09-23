import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
import mail from '../../assets/email-icon.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Hi I'm Shanna</h1>
        <p>
          I'm a Computer Science student at Bina Nusantara University.
          I have experience in various projects, including website development, machine learning models, website design, and Java-based applications. With a passion for frontend development and a knack for design, I'm constantly honing my skills to create visually appealing and functional user experiences. Let's connect and collaborate!
        </p>
        <button onClick={() => window.location.href='mailto:shanna.fernlie@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out.'} className='btn'>
          Say Hi! <img className='email' src={mail} alt="arrow" />
        </button>
      </div>
    </div>
  )
}


export default Hero