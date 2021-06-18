import React from "react";
import { Container, Row, Col, Button, Form } from "reactstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../assets/styles/style.css";

class Footer extends React.Component {
  render() {
    return (
      <Container className='page-footer font-small unique-color-dark'>
        <Row>
          <Col className='col-md-3 col-sm-8'>
            <div className='footer-info'>
              <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                Find us
              </h2>
            </div>
            <address className='wow fadeInUp' data-wow-delay='0.4s'>
              <p>
                Parcul Tineretului
                <br />
                Aleea Trandafirilor <br /> Nr. 123
              </p>
            </address>
          </Col>
          <Col className='col-md-3 col-sm-8'>
            <div className='footer-info section-title'>
              <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                Reservation
              </h2>
              <address className='wow fadeInUp' data-wow-delay='0.4s'>
                <p>072 999 0033 | 072 123 6661</p>
                <p>
                  <a href='mailto:food4fun@company.com'>food4fun@company.com</a>
                </p>
              </address>
            </div>
          </Col>
          <Col className='col-md-3 col-sm-8'>
            <div className='footer-info footer-open-hour'>
              <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
                Open Hours
              </h2>
              <div className='wow fadeInUp' data-wow-delay='0.4s'>
                <p>Monday: Closed</p>
                <div>
                  <strong>Tuesday to Friday</strong>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
                <div>
                  <strong>Saturday - Sunday</strong>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className='col-md-3 col-sm-8'>
            <h2 className='wow fadeInUp' data-wow-delay='0.2s'>
              Subscribe
            </h2>
            <div className='subscribe_form'>
              <Form className='subscribe_form'>
                <input
                  name='EMAIL'
                  id='subs-email'
                  className='form_input'
                  placeholder='Email Address...'
                  type='email'
                />
                <Button type='submit' className='submit'>
                  SUBSCRIBE
                </Button>
                <ul className='list-inline f-social'>
                  <li className='list-inline-item'>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <FaFacebookF />
                      {/* <i className='fab fa-facebook' aria-hidden='true'></i> */}
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='https://twitter.com/' target='_blank'>
                      <FaTwitter />
                      {/* <i className='fab fa-twitter' aria-hidden='true'></i> */}
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <FaLinkedinIn />
                      {/* <i className='fab fa-linkedin' aria-hidden='true'></i> */}
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='https://www.instagram.com/goo' target='_blank'>
                      <FaInstagram />
                      {/* <i className='fab fa-instagram' aria-hidden='true'></i> */}
                    </a>
                  </li>
                </ul>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
