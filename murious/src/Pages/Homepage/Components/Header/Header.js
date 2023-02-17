import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import {HashLink as Link} from 'react-router-hash-link';
import "./Header.css";
import logojyc from "./Assets/Murious17.png";
import { Cross as Hamburger } from 'hamburger-react';
import {animateScroll as scroll} from 'react-scroll';
import {Link as LNK} from 'react-scroll';
function Header() {

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [isOpen, setOpen] = useState(false)


  const [isOpen1,setIsOpen1]=useState(false)

  const onClickHeader=()=>{
    setIsOpen1(!isOpen1);
  }
  return (
    <div className={header ? "header active" : "header"}>
      <div className={`header-wrapper ${isOpen1 ? 'header-wrapper active':''} `}>
     
          <Link to='/' onClick={() => scroll.scrollToTop()} className="header-logojyc">
            <img className="header-logo" src={logojyc} alt="Murious 17.0" />
          </Link>
          
          <div onClick={onClickHeader} className="menu">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
  
        <div className="nav-items">
          <ul>

            <li>
              <LNK
               to="about-m"
               spy={true}
               smooth={true}
               offset={-79}
               duration={1000}
               >
                 ABOUT
              </LNK>
            </li>

            <li>
            <LNK
               to="events-m"
               spy={true}
               smooth={true}
               offset={-74}
               duration={1000}
               >
                EVENTS
            </LNK>
            </li>

            <li>
            <LNK
               to="schedule-m"
               spy={true}
               smooth={true}
               offset={-74}
               duration={1000}
               >
                Schedule
            </LNK>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
