import React, { Component } from "react";
import AppNavbar from "../AppNavbar";
import "../../assets/styles/style.css";
import ContactForm from "../miniComponents/ContactForm";

class Contact extends Component {
  render() {
    return [<AppNavbar />, <ContactForm />];
  }
}

export default Contact;
