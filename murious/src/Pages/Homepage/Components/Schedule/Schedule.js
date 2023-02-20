import React from "react";
import "./Schedule.css";
import { Tab, Nav, Row } from "react-bootstrap";
import { ScheduleCard } from "./ScheduleCar";

export const Schedule = () => {
  const schs1 = [
    {
      index: 1,
      date: "24th February",
      event1t: "09:00am Onwards",
      event1: "Frame-By-Frame",
      event2t: "09:00am Onwards",
      event2: "Picture Perfect",
      event3t: "03:00pm - 3:30pm",
      event3: "Innaugration",
      event4t: "03:00pm",
      event4: "Trading [TIEDC] Ends",
      event5t: "03:30pm - 05:00pm",
      event5: "Faculty Events",
      event6t: "05:00pm",
      event6: "The Expanse 2.0 Starts",
      event7t: "05:00pm - 06:30pm",
      event7: "Make It Print",
      event8t: "06:00pm - 07:30pm",
      event8: "Brush And Canvas",
      event9t: "06:30pm - 11:59pm",
      event9: "Esports",
    },
  ];
  const schs2 = [
    {
      index: 2,
      date: "25th February",
      event1t: "10:00am - 12:00pm",
      event1: "Code-Chaos",
      event2t: "10:00am - 1:00pm",
      event2: "Exhibition",
      event3t: "01:00pm - 02:00pm",
      event3: "Tech-Talk",
      event4t: "01:30pm",
      event4: "The Expanse 2.0 Ends",
      event5t: "02:00pm - 04:00pm",
      event5: "Web-O-Fiesta",
      event6t: "02:00pm - 06:30pm",
      event6: "Bridge Making",
      event7t: "06:30pm - 11:59pm",
      event7: "Esports",
    },
  ];
  const schs3 = [
    {
      index: 3,
      date: "26th February",
      event1t: "10:00am - 12:00pm",
      event1: "Mysterious Conduct [IEEE]",
      event2t: "12:00pm Onwards",
      event2: "Knives Out",
      event3t: "02:00pm - 05:00pm",
      event3: "Code Relay [ACM]",
      event4t: "06:00pm Onwards",
      event4: "Synchrotron",
    },
  ];
  return (
    <div className="murious_schedule" id="schedule-m">
      <span className="sch_bghead">Schedule</span>
      <span className="sch_head">Schedule</span>
      {/* <ScheduleCar/> */}
      <div className="sc-car">
        <Tab.Container id="schedule-cards" defaultActiveKey="first">
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link className="sc-days" eventKey="first">Day 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="sc-days" eventKey="second">Day 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="sc-days" eventKey="third">Day 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {schs1.map((sch, index) => {
                return <ScheduleCard key={index} {...sch} />;
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {schs2.map((sch, index) => {
                return <ScheduleCard key={index} {...sch} />;
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              {schs3.map((sch, index) => {
                return <ScheduleCard key={index} {...sch} />;
              })}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};
export default Schedule;
