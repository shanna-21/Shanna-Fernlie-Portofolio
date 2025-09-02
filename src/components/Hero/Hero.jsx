import React, {useState, useEffect} from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
import mail from '../../assets/email-icon.png'

const Hero = () => {
  const [text, setText] = useState('')
  const message = ".Hi, I'm Shanna.";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText((prev) => prev + message[index]);
      if(index === message.length-1) clearInterval(interval);
    }, typingSpeed);

    return() => clearInterval(interval);
  }, []);

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>{text}</h1>
        <h2>I love creating stuff.</h2>
        <p>
I’m a Computer Science student at Bina Nusantara University with a strong interest in large-scale, high-impact IT applications that shape and improve our daily lives.      </p>
        <button onClick={() => window.location.href='mailto:shanna.fernlie@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out.'} className='btn'>
          Say Hi! <img className='email' src={mail} alt="arrow" />
        </button>
      </div>
    </div>
  )
}


export default Hero