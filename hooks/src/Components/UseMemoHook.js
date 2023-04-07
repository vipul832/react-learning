// UseMemo use for perforation optimization  and another hooks is "useCallBack"

import React, { Component } from "react";
import UseMemoHookSolu from "./UseMemoHookSolu";

export default class UseMemoHook extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  slowDown() {
    let i = 0;
    while (i < 20000000000) i++;
    this.setState({ count: this.state.count + 1 });
  }

  doubleNumber() {
    this.setState({ count: this.state.count + 2 });
  }

  render() {
    return (
      <div>
        <h3>UseMemo </h3>
        <p>
          useMemo is a React Hook that lets you cache the result of a
          calculation between re-renders.
        </p>

        <p>
          Blew the code is Without Webpack. Due slowDown function our double
          number function is also slow down.
        </p>

        {this.state.count}
        <button
          onClick={() => {
            this.slowDown();
          }}
        >
          Slow down
        </button>
        <button
          onClick={() => {
            this.doubleNumber();
          }}
        >
          Double number
        </button>

        <UseMemoHookSolu />
      </div>
    );
  }
}
