import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Time from "./Time";

export default function Landing() {
  return (
    <div>
      <div className="murious_landing">
        <div className="murious_date">
          24<sup>th</sup> - 26<sup>th</sup> February
        </div>
        <div className="murious_event_button">
          <Link to="/" className="event_button_landing">
            View Events
          </Link>
        </div>
      </div>
      <Time/>
    </div>
  );
}
