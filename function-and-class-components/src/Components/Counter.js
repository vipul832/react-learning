import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div className="d-flex">
        <div>ComponentDidUpdate Call:{this.props.number}</div>
      </div>
    );
  }
}
