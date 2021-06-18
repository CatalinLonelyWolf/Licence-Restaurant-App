import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Alert,
  Container,
} from "reactstrap";

import { getOrders } from "../../actions/orderActions";

class Orders extends Component {
  state = {
    loaded: false,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    getOrders: PropTypes.func.isRequired,
  };

  onGetOrders = async (id) => {
    await this.props.getOrders(id);
    this.state.loaded = true;
  };

  render() {
    const user = this.props.user;
    if (
      this.props.isAuthenticated &&
      !this.props.order.loading &&
      !this.state.loaded
    ) {
      this.onGetOrders(user._id);
    }
    return (
      <Fragment>
        {this.props.isAuthenticated ? (
          <Fragment>
            {this.props.order.orders.length !== 0 ? null : (
              <Alert color='info' className='text-center'>
                You have no orders!
              </Alert>
            )}
          </Fragment>
        ) : (
          <Alert color='danger' className='text-center'>
            Login to View!
          </Alert>
        )}

        {this.props.isAuthenticated &&
        !this.props.order.loading &&
        this.state.loaded &&
        this.props.order.orders.length ? (
          <Container>
            <div className='row'>
              {this.props.order.orders.map((order) => (
                <div className='col-md-12' key={order._id}>
                  <Card>
                    <CardBody>
                      <CardTitle tag='h4'>
                        {order.items.length} items - Total cost: RON.{" "}
                        {order.order_total}
                      </CardTitle>
                      <div className='row'>
                        {order.items.map((item) => (
                          <div className='col-md-4' key={item._id}>
                            <Card className='mb-2'>
                              <CardBody>
                                <CardTitle tag='h5'>
                                  {item.name} ({item.quantity} pieces)
                                </CardTitle>
                                <CardSubtitle tag='h6'>
                                RON. {item.price}/piece
                                </CardSubtitle>
                              </CardBody>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                  <br />
                </div>
              ))}
            </div>
          </Container>
        ) : null}
     </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getOrders })(Orders);
