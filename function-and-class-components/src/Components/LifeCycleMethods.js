import React, { Component } from "react";
import Counter from "./Counter";

export default class LifeCycleMethods extends Component {
  constructor() {
    super();
    this.state = {
      didMount: 0,
      didUpdate: 0,
    };
    //this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log("Component is Mounted");
    this.setState({ didMount: this.state.didMount + 1 });
  }

  increment() {
    this.setState({ didUpdate: this.state.didUpdate + 1 });
  }

  render() {
    return (
      <div className="mt-5">
        <h3>Life Cycle Methods</h3>
        <h3>ComponentDidMount Call:{this.state.didMount} </h3>
        <div className="d-flex">
          <h3>
            <Counter number={this.state.didUpdate} />
          </h3>
          <button
            className="btn btn-primary ms-5"
            onClick={() => {
              this.increment();
            }}
          >
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
