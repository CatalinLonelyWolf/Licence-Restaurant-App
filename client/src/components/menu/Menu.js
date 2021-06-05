import React, { Component } from "react";
import AppNavbar from "../AppNavbar";
import "../../assets/styles/style.css";

class Menu extends Component {
  render() {
    return [<AppNavbar />, <h1>Menu</h1>];
  }
}

export default Menu;
