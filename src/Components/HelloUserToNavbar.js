import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default class HelloUserToNavbar extends Component {
  userName;
  loadInfo() {
    fetch("http://localhost:9090/user")
      .then((res) => res.json())
      .then((result) => {
        this.userName = "Hello, " + result + "!";
      });
  }

  render() {
    return (
      <DropdownButton id="dropdown-basic-button" title={this.userName}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
  }
}
