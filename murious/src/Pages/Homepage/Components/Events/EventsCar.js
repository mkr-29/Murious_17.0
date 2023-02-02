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

  var slHeight=100;
  var slWidth=30;
  // for devices width less tha 400px change naturalSlideHeight to 50
  if (window.innerWidth < 400) {
    slWidth=100;
    slHeight=50;
  }

  // for devices width more than 400px change naturalSlideHeight to 100

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={3}
    >
      <Slider>
        <Slide className="evcar_slides" id="ev-carsl" index={0}>
          <span className="events_car_head">{parse.ETitle1}</span>
          <span className="events_car_desc">{parse.EDesc1}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={1}>
          <span className="events_car_head">{parse.ETitle2}</span>
          <span className="events_car_desc">{parse.EDesc3}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
        <Slide index={2}>
          <span className="events_car_head">{parse.ETitle3}</span>
          <span className="events_car_desc">{parse.EDesc3}</span>
          <Link to="/" className="event_regb">Register</Link>
        </Slide>
      </Slider>
      <ButtonBack className="but_back"><img src={Back}/></ButtonBack>
      <ButtonNext className="but_next"><img src={Next}/></ButtonNext>
    </CarouselProvider>
  );
};

export default EventsCar;
