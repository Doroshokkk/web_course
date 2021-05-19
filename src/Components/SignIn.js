import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {fadeIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const FadeIn = styled.div`animation: 0.5s ${keyframes `${fadeIn}`}`;

class SignIn extends Component {
  render() {
    return (
      <FadeIn>
        <div className="formContainer">
        <Form action="http://localhost:9090/user" method="get">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      </FadeIn>
    );
  }
}

export default SignIn;
