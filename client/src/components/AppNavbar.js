import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import Logout from "./auth/Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../assets/styles/style.css";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        {/* if admin
          <NavItem>
          <NavLink href='/addItem'>AddItem</NavLink>
        </NavItem>
        */}
        <NavItem>
          <NavLink href='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='about-us'>About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='events'>Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='reservation'>Reservation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='contact'>Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/cart'>Cart</NavLink>
        </NavItem>
        <NavItem className='mr-2'>
          <NavLink href='/orders'>Orders</NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    /*     const adminLinks = (
      <Fragment>
        <NavItem>
          <AddItem />
        </NavItem>
      </Fragment>
    ); */

    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='about-us'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='events'>Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='reservation'>Reservation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='contact'>Contact</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href='/register'>Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/login'>Login</NavLink>
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar
          dark
          expand='sm'
          className='navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar shadow-5-strong'
        >
          <Container>
            <NavbarBrand href='/' className='navbar-brand mr-auto'>
              Food 4 Fun
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='navbar-nav mr-auto smooth-scroll' navbar>
                {isAuthenticated ? authLinks : guestLinks}
                {/* <NavItem>
                  <NavLink href='/pages/'>AboutUs</NavLink>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
