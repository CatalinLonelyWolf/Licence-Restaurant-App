import React, { Fragment, Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem, updateItem } from "../../actions/itemActions";
import { clearErrors } from "../../actions/errorActions";

class MealModal extends Component {
  state = {
    modal: false,
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
    msg: null,
  };

  static propTypes = {
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for item error
      if (error) {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.description || !this.state.price) {
      this.setState({
        msg: "Please enter required fields (title, description, price).",
      });

      window.setTimeout(() => {
        this.setState({ msg: null });
      }, 3000);

      return;
    }

    const { title, description, category, price, image } = this.state;

    let newItem = {
      title,
      description,
      category,
      price,
      image,
    };

    //TODO: if for add/update
    try {
      await this.props.addItem(newItem);
      this.clearItem();
      this.toggle();
    } catch (err) {
      this.setState({ msg: err });
    }
  };

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  clearItem = () => {
    this.setState({
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
    });
  };

  render() {
    return (
      <Fragment>
        <Button color='primary' onClick={this.toggle}>
          Add Meal
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Add meal</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='title'>Title</Label>
                <Input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Title of the item'
                  onChange={this.onChange}
                />
                <br />
                <Label for='description'>Description</Label>
                <Input
                  type='text'
                  name='description'
                  id='description'
                  placeholder='Description of the item'
                  onChange={this.onChange}
                />
                <br />
                <Label for='category'>Category</Label>
                <Input
                  type='text'
                  name='category'
                  id='category'
                  placeholder='Category of the item'
                  onChange={this.onChange}
                ></Input>
                <br />
                <Label for='price'>Price</Label>
                <Input
                  type='number'
                  name='price'
                  id='price'
                  placeholder='Price of the item'
                  onChange={this.onChange}
                />
                <br />
                <Label for='image'>Image</Label>
                <Input
                  type='text'
                  name='image'
                  id='image'
                  placeholder='Image of the item'
                  onChange={this.onChange}
                />
                <br />
                {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}
                <Button color='dark' style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { clearErrors, addItem, updateItem })(
  MealModal
);
