import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import MurLogo from "./Assets/MuriousLogo.png"
import Arrow from "./Assets/arrow.svg"

export default function About() {
  return (
    <div className='murious_about' id='about-m'>
        <span className='about_heading'>About</span>
        <div className='juit_jyc'>
            <span className='jyc_heading'>JUIT Youth Club</span>
            <span className='jyc_about'>
            Take the journey, soar like an eagle, there are so many roads to ex-
plore so little". Presenting to you an experience like never before,
MURIOUS: I The Three Days Panorama'. It is not just a fest but an
emotion, an expression of euphoria. A stage celebrating art form and
a podium igniting intellectual thoughts by virtue of the quality
events arranged by Technical Sciences, Movies and Photography
Club at JUIT. The Technical Festival will be a massive spectacle of
technical events and shows, As well as outstanding brain demos,
with entertaining events like The Expanse 2.0,
Web-O-fiesta,CodeRelay, Tech Talks, Frame-by-Frame, Picture
Perfect Hai, VALORANT, Mini Militia, FIFA and much more.
            </span>
            <Link to="/" className='jyc_visit'>Visit<img src={Arrow} alt=""/></Link>
        </div>
        <div className='juit_jyc'>
            <img src={MurLogo} alt="Murious 17.0" className='about_murious'/>
            <span className='jyc_about'>
            "The Expanse 2.0" is a hackathon . This will be a team event
wherein students will come together in either a duo or a
group of 4. This hackathon will be 18 hrs longs and will bring
together experts and will help create a collaborative environ-
ment for solving certain real life problems.
            </span>
            <Link to="/" className='jyc_visit murious_reg'>Register<img src={Arrow} alt=""/></Link>
        </div>
    
    </div>
  )
}
