import React, { Component, Fragment } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { Container, Row, Col } from "reactstrap";

import style from "./style.css";

export default function Review() {
  let iconStyles = {
    display: "block",
    float: "left",
    width: "60px",
    height: "60px",
    lineHeight: "60px",
    textAlign: "center",
    background: "#fff",
    color: "#1d3557",
    fontSize: "30px",
    webkitBorderRadius: "50%",
    mozBorderRadius: "50%",
    msBorderRadius: "50%",
    borderRadius: "50%",
    marginRight: "20px",
  };
  return (
    <Fragment>
      <div className='contact-imfo-box'>
        <Row>
          <Col className='col-md-4 arrow-right'>
            <MdPhoneInTalk style={iconStyles} />
            <div class='overflow-hidden'>
              <h4>Phone</h4>
              <p class='lead'>072 999 0033 | 072 123 6661</p>
            </div>
          </Col>

          <Col className='col-md-4 arrow-right'>
            <FaEnvelope style={iconStyles} />
            <div class='overflow-hidden'>
              <h4>Email</h4>
              <p class='lead'>yfood4fun@company.com</p>
            </div>
          </Col>

          <Col className='col-md-4 arrow-right'>
            <ImLocation style={iconStyles} />
            <div class='overflow-hidden'>
              <h4>Location</h4>
              <p class='lead'> Aleea Trandafirilor, Nr. 123</p>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

/* export default Review; */

/*       <Fragment>
        <div className='contact-imfo-box'>
          <Row>
            <Col className='col-md-4 arrow-right'>
              <MdPhoneInTalk style={iconStyles} />
              <div class='overflow-hidden'>
                <h4>Phone</h4>
                <p class='lead'>072 999 0033 | 072 123 6661</p>
              </div>
            </Col>

            <Col className='col-md-4 arrow-right'>
              <FaEnvelope />
              <div class='overflow-hidden'>
                <h4>Email</h4>
                <p class='lead'>yfood4fun@company.com</p>
              </div>
            </Col>

            <Col className='col-md-4 arrow-right'>
              <ImLocation />
              <div class='overflow-hidden'>
                <h4>Location</h4>
                <p class='lead'> Aleea Trandafirilor, Nr. 123</p>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment> */
