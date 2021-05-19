import React, { Component } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showsSignIn: true,  // false to show sign up
            show: false,
            switchButtonMessage: 'Switch to Sign up',
            formTitleMessage: 'Sign in'
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.switchForm = this.switchForm.bind(this);
    }

    switchForm() {
        if (this.state.showsSignIn) {
            this.setState({switchButtonMessage: 'Switch to Sign in', formTitleMessage: 'Sign up'});
        } else {
            this.setState({switchButtonMessage: 'Switch to Sign up', formTitleMessage: 'Sign in'});
        }
        this.setState({showsSignIn: !this.state.showsSignIn});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    render() {
        let form;
        if (this.state.showsSignIn) {
            form = <SignIn/>;
        } else {
            form = <SignUp/>;
        }
        return (
            <div>
            
            <Button variant="primary" onClick={this.handleShow}>
                Launch demo modal
            </Button>

            <Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
        <Modal.Title>{this.state.formTitleMessage}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {form}
            </Modal.Body>
            <Modal.Footer>
        <Button variant="outline-secondary" onClick={this.switchForm}>{this.state.switchButtonMessage}</Button>
            <Button variant="danger" onClick={this.handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/" >About</Nav.Link>
                            <Nav.Link href="/" >Contacts</Nav.Link>
                        </Nav>
                        <Form inline>
                            <button type="button" className="btn btn-info" onClick={this.handleShow}>Sign up/in?</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        );
    }
}
