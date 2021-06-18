import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "./style.css";

class Banner extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='qt-box qt-background'>
          <Row>
            <Col className='col-md-8 ml-auto mr-auto text-center'>
              <p class='lead '>
                "Cine intelege insa ca in inima lui exista o bucatarie magica va
                fi intotdeauna generos, iar iubirea lui va fi neconditionata"
              </p>
              <span class='lead'>Don Miguel Ruiz</span>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Banner;
