import React, { Fragment, Component } from "react";
import AppNavbar from "../AppNavbar";
import "../../assets/styles/style.css";

class Menu extends Component {
  render() {
    return [
      <Fragment>
        <h1>Menu</h1>
        <div className='row'>
          {items.map((item) => (
            <div className='col-md-4' key={item._id}>
              <Card className='mb-4'>
                <CardBody>
                  <CardTitle tag='h4'>{item.title}</CardTitle>
                  <CardSubtitle tag='h5'>{item.category}</CardSubtitle>
                  <CardSubtitle tag='h6'>RON. {item.price}</CardSubtitle>
                  <CardText>{item.description}</CardText>
                  {user && isAuthenticated ? (
                    user.role === 1 ? (
                      <Fragment>
                        <Button
                          color='warning'
                          size='sm'
                          onClick={this.onEditItem.bind(this, item)}
                        >
                          Edit
                        </Button>
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
                  ) : (
                    ""
                  )}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Fragment>,
    ];
  }
}

export default Menu;
