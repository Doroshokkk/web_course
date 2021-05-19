import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SendStatisticsButton extends Component {
  render() {
    return (
      <div className="mb-2">
        <Button variant="success" size="lg">
          Send Statistics
        </Button>
      </div>
    );
  }
}
