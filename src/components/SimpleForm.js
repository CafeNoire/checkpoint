import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class SimpleForm extends Component {
  render() {

    return (
    <Container>
      <Form>
        <Form.Group controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter fisrt name" />
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Enter Password" />
           
        </Form.Group>
        
      </Form>
    </Container>
    )
    ;
  }
       
}

export default SimpleForm;