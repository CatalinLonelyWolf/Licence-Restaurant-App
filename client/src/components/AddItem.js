import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MealModal from "./menu/mealModal";

class AddItem extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.auth;
    return <Fragment>{user && user.role === 1 ? <MealModal /> : ""}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AddItem);
