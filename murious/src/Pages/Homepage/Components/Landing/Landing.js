import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="mur-landing-gl">
      <div className="murious_landing glitch">
        <div className="murious_date">
          24<sup>th</sup> - 26<sup>th</sup> February
        </div>
      </div>
      <div className="glitch__layers">
        <div className="glitch__layer"></div>
        <div className="glitch__layer"></div>
        <div className="glitch__layer"></div>
      </div>
        <div className="murious_event_button">
          <Link to="/" className="event_button_landing">
            View Events
          </Link>
        </div>
    </div>
  );
}
