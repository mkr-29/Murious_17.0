import React from 'react'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Time from './Components/Landing/Time'
import Schedule from './Components/Schedule/Schedule'
import Footer from './Components/footer/Footer';

export default function Homepage() {
  return (
    <div>
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
