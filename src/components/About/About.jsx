import React from 'react'
import './About.css'
import portrait from '../../assets/self-portrait.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={portrait} alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT ME</h3>
            <h2>A Tech Enthusiast with a Creative Mind</h2>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur, nisl at ornare condimentum, lacus leo feugiat magna, id imperdiet massa justo vel enim. Nulla viverra tristique arcu ac aliquet. Aliquam vehicula scelerisque efficitur. Sed euismod enim sit amet ante lacinia iaculis eleifend non dui. Donec quis laoreet tortor. Nulla eu sem et sem fringilla hendrerit non non erat. Cras porttitor, tortor a aliquam hendrerit, nisi sapien interdum leo, eu sodales risus purus at ligula.

            </p>
        </div>
    </div>
  )
}

export default About