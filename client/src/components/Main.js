import React, { Component } from "react";
import AddItem from "./AddItem";
import Home from "./Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./Cart";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Orders from "./Order";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
/* import Menu from "./pages/Menu"; */

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/addItem'>
          <AddItem />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/events'>
          <Events />
        </Route>
        {/* <Route path='/menu'>
          <Menu />
        </Route> */}
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/reservation'>
          <Reservation />
        </Route>
        <Redirect to='/home' />
      </Switch>
    );
  }
}

export default withRouter(connect()(Main));
