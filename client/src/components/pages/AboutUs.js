import React, { Component } from "react";
import { Container } from "reactstrap";
import AppNavbar from "../AppNavbar";
import GalleryView from "../miniComponents/gallery/GalleryView";
import "../../assets/styles/style.css";

class AboutUs extends Component {
  render() {
    return [
      <AppNavbar />,
      <Container>
        <h1>About Us</h1>
        <GalleryView />
      </Container>,
    ];
  }
}

export default AboutUs;
