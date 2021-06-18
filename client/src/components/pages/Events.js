import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";
import Wedding from "../events/Wedding";
import Baptism from "../events/Baptism";
import Party from "../events/Party";
import Footer from "../Footer";

class Events extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron>
          <h1 className='display-4'>
            Esti pregatit pentru cea mai tare experienta din viata ta?
          </h1>
        </Jumbotron>
        <Wedding />, <Baptism />, <Party />, <Footer />
      </Fragment>
    );
  }
}

export default Events;
