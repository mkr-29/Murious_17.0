import React from 'react'
import About from './Components/About/About'
import Events from './Components/Events/Events'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Time from './Components/Landing/Time'

export default function Homepage() {
  return (
    <div>
        <Header/>
        <Landing/>
        <Time/>
        <About/>
        <Events/>
    </div>
  )
}
