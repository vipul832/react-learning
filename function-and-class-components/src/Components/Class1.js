import React, { Component } from "react";

export default class Class1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
      isMale: false,
    };
  }

  render() {
    // const { name, age, isMale } = this.state;
    return (
      <div>
        <h3>My name is {this.props.name}</h3>
        <h3>I am {this.props.age} year old</h3>
        <h3>I am a {this.props.isMale ? "Male" : "Female"}</h3>
        <p>I am Feeling {this.props.emotion}</p>
      </div>
    );
  }
}
