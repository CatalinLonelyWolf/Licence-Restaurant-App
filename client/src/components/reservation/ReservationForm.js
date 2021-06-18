import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import "./style.css";

class ReservationForm extends Component {
  render() {
    return [
      <Fragment>
        <Container className='contact-box'>
          <h2>Reservation</h2>
          <p>If you want to join us on a spectacular event</p>
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
                  pattern='[0-9]{3}'
                  placeholder='Phone number'
                  required
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-4 col-lg-4 '>
                <Label for='events'>Select event</Label>
                <Input type='select'>
                  <option>Wedding</option>
                  <option>Baptism</option>
                  <option>Social Party</option>
                </Input>
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-4 col-lg-4 '>
                <Label for='date'>Date</Label>
                <Input
                  type='date'
                  name='date'
                  id='exampleDate'
                  placeholder='date placeholder'
                />
              </FormGroup>
              <FormGroup className='form-group mx-auto col-md-4 col-lg-4 '>
                <Label for='numberOfPeople'>Select no. of people</Label>
                <Input type='select'>
                  <option>1</option>
                  <option>2</option>
                  <option>3-5</option>
                  <option>5-10</option>
                  <option>10+</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className='form-group mx-auto col-md-12 col-lg-12 '>
                <Label for='textMessage'>Additional Information</Label>
                <Input
                  type='textarea'
                  name='text'
                  id='textMessage'
                  placeholder='If you want something special please mention it here'
                  required
                />
              </FormGroup>
            </Row>
            <Button color='success' type='submit'>
              Sent message
            </Button>
          </Form>
        </Container>
      </Fragment>,
    ];
  }
}

export default ReservationForm;
