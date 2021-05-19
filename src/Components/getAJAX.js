import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class GetAJAX extends Component {
  loadInfo() {
    fetch("http://localhost:9090/test")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return (
      <div>
        <Button variant="success" onClick={this.loadInfo}>
          Success
        </Button>
      </div>
    );
  }
}

export default GetAJAX;
