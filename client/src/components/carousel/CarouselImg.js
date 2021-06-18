import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Row } from "reactstrap";

import Rest1 from "../../assets/images/slider-01.jpg";
import Rest2 from "../../assets/images/slider-02.jpg";
import Rest3 from "../../assets/images/slider-03.jpg";

import "./style.css";

class CarouselImg extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100' src={Rest1} alt='First slide' />
          <Row>
            <Carousel.Caption className='about'>
              <h3>Cine suntem si ce facem? </h3>
              <p>Va aratam imediat!</p>
              <Button>About Us</Button>
            </Carousel.Caption>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100 ' src={Rest2} alt='Second slide' />
          <Carousel.Caption className='reservation'>
            <h3>Vrei sa nu mai stai la coada? </h3>
            <p>Poti face o reservare rapid si usor!</p>
            <Button>Reservations</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src={Rest3} alt='Third slide' />
          <Carousel.Caption className='offer'>
            <h3>Vrei sa te rasfeti? </h3>
            <p>
              Esti doar la un click distanta de cea mai buna experienta
              culinara!
            </p>
            <Button>Menu</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselImg;
