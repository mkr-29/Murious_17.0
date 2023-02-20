import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
import "./EventsCar.css";
import Back from "./Assets/arr_back.svg";
import Next from "./Assets/arr_fwd.svg";

const EventsCar = (parse) => {

  // for devices width more than 400px change naturalSlideHeight to 100

  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={100}
      totalSlides={13}
    >
      <Slider>
        <Slide className="evcar_slides" index={0}>
          <span className="events_car_head">{parse.ETitle0}</span>
          <span className="events_car_desc">{parse.EDesc0}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={1}>
          <span className="events_car_head">{parse.ETitle1}</span>
          <span className="events_car_desc">{parse.EDesc1}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={2}>
          <span className="events_car_head">{parse.ETitle2}</span>
          <span className="events_car_desc">{parse.EDesc2}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={3}>
          <span className="events_car_head">{parse.ETitle3}</span>
          <span className="events_car_desc">{parse.EDesc3}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={4}>
          <span className="events_car_head">{parse.ETitle4}</span>
          <span className="events_car_desc">{parse.EDesc4}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={5}>
          <span className="events_car_head">{parse.ETitle5}</span>
          <span className="events_car_desc">{parse.EDesc5}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={6}>
          <span className="events_car_head">{parse.ETitle6}</span>
          <span className="events_car_desc">{parse.EDesc6}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={7}>
          <span className="events_car_head">{parse.ETitle7}</span>
          <span className="events_car_desc">{parse.EDesc7}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={8}>
          <span className="events_car_head">{parse.ETitle8}</span>
          <span className="events_car_desc">{parse.EDesc8}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={9}>
          <span className="events_car_head">{parse.ETitle9}</span>
          <span className="events_car_desc">{parse.EDesc9}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={10}>
          <span className="events_car_head">{parse.ETitle10}</span>
          <span className="events_car_desc">{parse.EDesc10}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={11}>
          <span className="events_car_head">{parse.ETitle11}</span>
          <span className="events_car_desc">{parse.EDesc11}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={12}>
          <span className="events_car_head">{parse.ETitle12}</span>
          <span className="events_car_desc">{parse.EDesc12}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
      </Slider>
      <ButtonBack className="but_back"><img src={Back}/></ButtonBack>
      <ButtonNext className="but_next"><img src={Next}/></ButtonNext>
    </CarouselProvider>
  );
};

export default EventsCar;
