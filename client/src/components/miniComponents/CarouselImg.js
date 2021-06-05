import React, { Component } from "react";
import { Container } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "../../assets/styles/style.css";
import Rest1 from "../../assets/images/rest1.jpg";
import Rest2 from "../../assets/images/rest2.jpg";
import Rest3 from "../../assets/images/rest3.jpg";

/* class Carousel extends Component {
  render() {
    return [
      <Fragment>
        <h1>Carousel</h1>
      </Fragment>,
    ];
  }
}





export default Carousel; */
class CarouselImg extends Component {
  render() {
    return [
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100' src={Rest1} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Rest2} alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Rest3} alt='Third slide' />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>,
    ];
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default CarouselImg;
