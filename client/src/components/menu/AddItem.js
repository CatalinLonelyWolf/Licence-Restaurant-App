import React, { Fragment, Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MealModal from "./mealModal";

class AddItem extends Component {
  render() {
    const { user } = this.props.auth;
    if (user && user.role === 1) {
      return <MealModal />;
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AddItem);
