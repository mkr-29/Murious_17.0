import React from "react";
import "./Schedule.css";
import { Tab, Nav, Row } from "react-bootstrap";
import { ScheduleCard } from "./ScheduleCar";

export const Schedule = () => {
  const schs1 = [
    {
      index: 1,
      date: "24th February",
      event1t: "11:00am - 12:00pm",
      event1: "Innaugration",
      event2t: "12:00am - 1:00pm",
      event2: "Innaugration",
      event3t: "12:00am - 1:00pm",
      event3: "Innaugration",
      event4t: "12:00am - 1:00pm",
      event4: "Innaugration",
    },
  ];
  const schs2 = [
    {
      index: 2,
      date: "25th February",
      event1t: "11:00am - 12:00pm",
      event1: "Hackathon",
      event2t: "12:00am - 1:00pm",
      event2: "Innaugration",
      event3t: "12:00am - 1:00pm",
      event3: "Innaugration",
      event4t: "12:00am - 1:00pm",
      event4: "Innaugration",
    },
  ];
  const schs3 = [
    {
      index: 3,
      date: "26th February",
      event1t: "11:00am - 12:00pm",
      event1: "The End",
      event2t: "12:00am - 1:00pm",
      event2: "Innaugration",
      event3t: "12:00am - 1:00pm",
      event3: "Innaugration",
      event4t: "12:00am - 1:00pm",
      event4: "Innaugration",
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
