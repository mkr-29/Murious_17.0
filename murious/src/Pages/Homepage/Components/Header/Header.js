import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logojyc from "./Assets/Murious17.png";
import { Cross as Hamburger } from "hamburger-react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";
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
  const [isOpen, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const onClickHeader = () => {
    setIsOpen1(!isOpen1);
  };
  return (
    <div className={header ? "header active" : "header"}>
      <div
        className={`header-wrapper ${isOpen1 ? "header-wrapper active" : ""} `}
      >
        <NavLink to="/" className="header-logojyc">
          <img onClick={() => scroll.scrollToTop()} className="header-logo" src={logojyc} />
        </NavLink>

        <div onClick={onClickHeader} className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <LNK
                to="about-hp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                About
              </LNK>
            </li>

            <li>
              <Link to="/events">Events</Link>
            </li>

            <li>
              <Link to="contact">Schedule</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
