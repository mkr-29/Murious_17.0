import React from 'react'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Time from './Components/Landing/Time'
import Schedule from './Components/Schedule/Schedule'
import Footer from './Components/Footer/Footer';
import "./Homepage.css"

export default function Homepage() {
  return (
    <div className='m-homepage'>
        <Header/>
        <Landing/>
        <Time/>
        <About/>
        <Events/>
        <Schedule/>
        <Footer/>
    </div>
  )
}
