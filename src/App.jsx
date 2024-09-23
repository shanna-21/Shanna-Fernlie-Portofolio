import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div>
        <Title subTitle='INTERESTS' title='What I Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='PROJECTS' title='Some Projects I did in My Leisure Time'/>
        <Projects/>
      </div>
    </div>
  )
}

export default App