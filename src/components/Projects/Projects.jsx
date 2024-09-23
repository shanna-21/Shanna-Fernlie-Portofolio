import React, { useRef } from 'react'
import './Projects.css'
import back_btn from '../../assets/next-btn.png'
import next_btn from '../../assets/back-btn.png'
import Pupigo from '../../assets/PuPiGo-project.png'
import CO2 from '../../assets/CO2-1.jpg'
import guidance from '../../assets/GuidanceWeb.png'
import Heart from '../../assets/HeartDisease_DecisionTree.jpeg'

const Projects = () => {

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward = ()=>{
    if(tx > -70){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='Projects'>
        <img src={next_btn} alt="" className='next-btn'
        onClick={slideForward}/>
        <img src={back_btn} alt="" className='back-btn'
        onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image1' src={Pupigo} alt="" />
                            <div>
                                <h3>
                                    PuPiGo Website
                                </h3>
                                <span>A transportation service app designed to simplify pick-up and drop-off scheduling. The app offers users an easy way to book and manage rides efficiently.</span>
                            </div>
                            <button className='btn-project'>Github</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image2' src={CO2} alt="" />
                            <div>
                                <h3>
                                    Carbon Emission Estimation for G20 Countries with MLP Regression
                                </h3>
                                <span>Simple tool for estimating the Carbon Emissions of the majority of G20 nations based only on past Carbon Emission using MLP Regression</span>
                            </div>
                            <button className='btn-project'>Github</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="project1">
                            <img className='image3' src={guidance} alt="" />
                            <div>
                                <h3>
                                    School Website for Guidance School (frontend)
                                </h3>
                                <span>A user-friendly website designed for Guidance School, featuring information about programs, enrollment, and an engaging interface to showcase the school's activities and updates.</span>
                            </div>
                            <button className='btn-project'>Github</button>
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
                                <span>Decision Tree Algorithm implimentation for heart disease prediction based on various features</span>
                            </div>
                            <button className='btn-project'>Github</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects 