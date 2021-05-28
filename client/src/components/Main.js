import React, { Component } from "react";
import AddItem from "./AddItem";
import Home from "./Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./Cart";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Orders from "./Order";

class Main extends Component {
  render() {
    return (
      <div>
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
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(Main));
