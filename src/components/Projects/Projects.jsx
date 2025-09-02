import React, { useRef } from 'react'
import './Projects.css'
import back_btn from '../../assets/next-btn.png'
import next_btn from '../../assets/back-btn.png'
import Pupigo from '../../assets/PuPiGo-project.png'
import Inatrade from '../../assets/Inatrade.png'
import Sponstore from '../../assets/Sponstore.jpg'
import CO2 from '../../assets/CO2-1.jpg'
import guidance from '../../assets/GuidanceWeb.png'
import Heart from '../../assets/HeartDisease_DecisionTree.jpeg'
import Restaurant from '../../assets/Restaurant-img.jpg'
import Ephemeral from '../../assets/Ephemeral.jpeg'
import Glowi from '../../assets/glowi.jpg'

const Projects = () => {

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
    if(tx < 0){
        tx +=30;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward = ()=>{
    if(tx > -(25 * (6 - 1))){
        tx -=30;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}


  return (
    <div className='Projects'>
        <img src={next_btn} alt="" className='back-btn'
        onClick={slideForward}/>
        <img src={back_btn} alt="" className='next-btn'
        onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image1' src={Inatrade} alt="" />
                            <div>
                                <h3>
                                    Inatrade Website
                                </h3>
                                <div className='capt-project'>

                                    <span>Inatrade is Indonesia’s official digital portal for trade licensing, enabling exporters and importers to apply for and manage permits online in a faster, more secure, and transparent way—integrated into the national trade ecosystem.</span>
                                </div>
                                <div className='tech-used'>
                                    <span>React.js, Node.js, PostgreSQL</span>
                                </div>
                            </div>
                            <div className='btn-container0'>
                                <button className='btn-project' onClick={() => window.location.href='https://inatrade.kemendag.go.id/#/'}>Website</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image1' src={Sponstore} alt="" />
                            <div>
                                <h3>
                                    Sponstore Website
                                </h3>
                                <div className='capt-project'>

                                    <span>Sponstore is an app designed for organizations to make sponsor-seeking easy. </span>
                                </div>
                                <div className='tech-used'>
                                    <span>Laravel, MySQL, Blade, Typescript</span>
                                </div>
                            </div>
                            <div className='btn-container7'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/Webprog'}>Github</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image1' src={Pupigo} alt="" />
                            <div>
                                <h3>
                                    PuPiGo Website
                                </h3>
                                <div className='capt-project'>

                                    <span>A transportation service app designed to simplify pick-up and drop-off scheduling. The app offers users an easy way to book and manage rides efficiently.</span>
                                </div>
                                <div className='tech-used'>
                                    <span>HTML, JavaScript, CSS</span>
                                </div>
                            </div>
                            <div className='btn-container1'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/PuPiGo-project-1'}>Github</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image3' src={Glowi} alt="" />
                            <div>
                                <h3>
                                Glow.i Website
                                </h3>
                                <span>Glow.i is a web platform that promotes skin health with AI-based problem detection, personalized recommendations, community discussions, and a skincare marketplace.</span>
                            </div>
                            <div className='tech-used'>
                                <span>React.js, Express.js, Python, Firebase</span>
                            </div>
                            <div className='btn-container2'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/Glow.iWeb'}>Github</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image2' src={CO2} alt="" />
                            <div>
                                <h3>
                                    CO2 Estimation for G20 Countries with MLP Regression
                                </h3>
                                <div className='capt-project'>
                                    <span>Simple tool for estimating the Carbon Emissions of the majority of G20 nations based only on past Carbon Emission using MLP Regression</span>
                                </div>
                            </div>
                            <div className='tech-used'>
                                <span>Python</span>
                            </div>
                            <div className='btn-container3'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/Carbon-Emission-Estimation-for-G20-Nations-with-MLP-Regression'}>Github</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img src={Restaurant} alt="" />
                            <div>
                                <h3>
                                    Restaurant Reservation System
                                </h3>
                                <div className='capt-project'>
                                    <span>A Java-based restaurant management system that streamlines orders, billing, inventory, and staff management, ensuring efficient operations and enhancing the dining experience.</span>
                                </div>
                                <div className='tech-used'>
                                    <span>Java</span>
                                </div>
                            </div>
                            <div className='btn-container4'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/Heart-Disease-Prediction'}>
                                    Github
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image3' src={guidance} alt="" />
                            <div>
                                <h3>
                                    School Website for Guidance School
                                </h3>
                                <div className='capt-project'>
                                    <span>A user-friendly website designed for Guidance School, featuring information about programs, enrollment, and an engaging interface to showcase the school's activities and updates.</span>
                                </div>
                                <div className='tech-used'>
                                    <span>HTML, CSS, Javascript</span>
                                </div>
                            </div>
                            <div className='btn-container5'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/Guidance_School'}>Github</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img src={Heart} alt="" />
                            <div>
                                <h3>
                                    Heart Disease Prediction
                                </h3>
                                <div className='capt-project'>
                                    <span>Decision Tree Algorithm implimentation for heart disease prediction based on various features</span>
                                </div>
                                <div className='tech-used'>
                                    <span>Python</span>
                                </div>
                            </div>
                            <div className='btn-container6'>
                                <button className='btn-project' onClick={() => window.location.href='https://github.com/shanna-21/Heart-Disease-Prediction'}>
                                    Github
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Projects 