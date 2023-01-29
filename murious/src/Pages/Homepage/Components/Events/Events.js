import React from "react";
import EventsCar from "./EventsCar";
import "./Events.css";

export default function Events() {
  return (
    <div className="murious_events">
      <span className="events_head">Events</span>
      <div className="events_ev">
        <EventsCar
          ETitle1="The Expanse 2.0"
          EDesc1="“The expanse” is a hackathon . This will be a team event wherein students will come together in either a duo or a group of 4.  This hackathon will be 18 hrs longs and will bring together experts and will help create a collaborative environment for solving certain real life problems."
          ETitle2="Hackathon"
          EDesc2="“The expanse” is a hackathon . This will be a team event wherein students will come together in either a duo or a group of 4.  This hackathon will be 18 hrs longs and will bring together experts and will help create a collaborative environment for solving certain real life problems."
          ETitle3="Web-O-Fiesta"
          EDesc3="“The expanse” is a hackathon . This will be a team event wherein students will come together in either a duo or a group of 4.  This hackathon will be 18 hrs longs and will bring together experts and will help create a collaborative environment for solving certain real life problems."
        />
      </div>
    </div>
  );
}
