import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
/* import "./contact.css"; */
/* import MapSection from "../miniComponents/GoogleMap/Map"; */

const LocationPin = ({ text }) => (
  <div className='pin'>
    <Icon icon={locationIcon} className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
);

class ContactForm extends Component {
  static defaultProps = {
    center: {
      lat: 44.41047,
      lng: 26.10505,
    },
    address: "Food 4 Fun Restaurant",
    pin: {
      lat: 44.410476261252775,
      lng: 26.10505250815173,
    },
    zoom: 15,
  };
  render() {
    return [
      <Fragment>
        <Container className='contact-box'>
          <h2>Contact</h2>
          <p>If you want to send us a message or some suggestions</p>
        </Container>

        <Container>
          <Form className='contact-form'>
            <Row>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6'>
                <Label for='firstName'>First Name</Label>
                <Input
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='First name'
                  required
                />
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6'>
                <Label for='lastName'>Last Name</Label>
                <Input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Last name'
                  required
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Please enter your e-mail'
                  required
                />
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-6 col-lg-6 '>
                <Label for='phone'>Phone</Label>
                <Input
                  type='number'
                  name='phone'
                  id='phone'
                  placeholder='Phone number'
                  required
                />
              </FormGroup>
            </Row>
            <FormGroup className='form-group mx-auto col-md-14 col-lg-14 '>
              <FormGroup>
                <Label for='textMessage'>
                  You can leave a message or suggestion here
                </Label>
                <Input
                  type='textarea'
                  name='text'
                  id='textMessage'
                  pattern='[0-9]{3}'
                  placeholder='Please enter your message / suggestion'
                  required
                />
              </FormGroup>
            </FormGroup>
            <Button color='success' type='submit'>
              Sent message
            </Button>
          </Form>
        </Container>
        <Container>
          <div style={{ height: "400px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAubPRTu3uyohnax2Iq90EIEnReerLyeAI",
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <LocationPin
                lat={this.props.pin.lat}
                lng={this.props.pin.lng}
                text={this.props.address}
              />
            </GoogleMapReact>
          </div>
        </Container>
      </Fragment>,
    ];
  }
}

export default ContactForm;
