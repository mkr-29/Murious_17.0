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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec interdum in, sollicitudin scelerisque ligula. In efficitur arcu libero,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec interdum in, sollicitudin scelerisque ligula. In efficitur arcu libero,
            </span>
            <Link to="/" className='jyc_visit'>Visit<img src={Arrow} alt=""/></Link>
        </div>
        <div className='juit_jyc'>
            <img src={MurLogo} alt="Murious 17.0" className='about_murious'/>
            <span className='jyc_about'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec interdum in, sollicitudin scelerisque ligula. In efficitur arcu libero,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec interdum in, sollicitudin scelerisque ligula. In efficitur arcu libero,
            </span>
            <Link to="/" className='jyc_visit murious_reg'>Register<img src={Arrow} alt=""/></Link>
        </div>
    
    </div>
  )
}
