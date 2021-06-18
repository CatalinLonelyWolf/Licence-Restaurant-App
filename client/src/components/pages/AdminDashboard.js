import React, { Component, Fragment } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Alert,
  CardImg,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getItems, deleteItem } from "../../actions/itemActions";
import { addToCart } from "../../actions/cartActions";

import AddItem from "../menu/AddItem";
import EditItem from "../menu/EditItem";

class AdminDashboard extends Component {
  state = {
    msg: null,
  };

  componentDidMount() {
    this.props.getItems();
  }

  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  onAddToCart = async (id, productId) => {
    try {
      await this.props.addToCart(id, productId, 1);
      this.setState({ msg: "Item added to cart" });
      setTimeout(() => this.setState({ msg: "" }), 3000);
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  onDeleteItem = async (id, productId) => {
    try {
      await this.props.deleteItem(id, productId);
      this.setState({ msg: "Item deleted" });
      setTimeout(() => this.setState({ msg: "" }), 3000);
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  shortenString = (string, size) => {
    return string
      ? string.length > size
        ? string.substring(0, size) + "..."
        : string
      : null;
  };

  render() {
    const { items, loading } = this.props.item;
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Container>
        {this.state.msg ? (
          <Alert color='warning'>{this.state.msg}</Alert>
        ) : null}
        <AddItem />
        {loading ? (
          <Alert color='warning'>Loading...</Alert>
        ) : items ? (
          <div className='row'>
            {items.map((item) => (
              <div className='col-md-4' key={item._id}>
                <Card className='mb-4'>
                  <CardImg
                    top
                    width='100%'
                    src={item.image}
                    alt='Card image caption'
                  />
                  <CardBody>
                    <CardTitle tag='h4'>
                      {this.shortenString(item.title, 30)}
                    </CardTitle>
                    <CardSubtitle tag='h5'>{item.category}</CardSubtitle>
                    <CardTitle tag='h6'>RON. {item.price}</CardTitle>

                    <CardText>
                      {this.shortenString(item.description, 100)}
                    </CardText>
                    {user && isAuthenticated ? (
                      user.role === 1 ? (
                        <Fragment>
                          <EditItem data={item} />
                          <Button
                            color='danger'
                            size='sm'
                            onClick={this.onDeleteItem.bind(this, item._id)}
                          >
                            Delete
                          </Button>
                        </Fragment>
                      ) : (
                        <Button
                          color='success'
                          size='sm'
                          onClick={this.onAddToCart.bind(
                            this,
                            user._id,
                            item._id
                          )}
                        >
                          Add To Cart
                        </Button>
                      )
                    ) : null}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <Alert color='warning'>No meals found.</Alert>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { getItems, addToCart, deleteItem })(
  AdminDashboard
);
