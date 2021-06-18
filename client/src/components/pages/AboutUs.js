import React, { Component } from "react";
import { Container } from "reactstrap";

import GalleryView from "../gallery/GalleryView";
import InfoRest from "../info/InfoRest";
import Banner from "../bannerQT/Banner";

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <h1>About Us</h1>
        <InfoRest />
        <Banner />
        <GalleryView />
      </Container>
    );
  }
}

export default AboutUs;
