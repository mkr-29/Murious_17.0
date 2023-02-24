import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import {Link as LNK} from 'react-scroll';


export default function Landing() {
  return (
    <div>
      <div className="murious_landing glitch">
        <div class="glitch__layers">
          <div class="glitch__layer"></div>
          <div class="glitch__layer"></div>
          <div class="glitch__layer"></div>
        </div>
        <div className="murious_date">
          24<sup>th</sup> - 26<sup>th</sup> February
        </div>
        <div className="murious_event_button">
          <LNK
               className="event_button_landing"
               to="events-m"
               spy={true}
               smooth={true}
               offset={-74}
               duration={1000}
               >
                EVENTS
            </LNK>
        </div>
      </div>
    </div>
  );
}
