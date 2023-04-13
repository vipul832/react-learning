import React, { useContext } from "react";
import AppContext from "../contexts/appContext";
import UseContextUsingConsumer from "./UseContextUsingConsumer";

export default function UseContextHook() {
  const [state, dispatch] = useContext(AppContext); // this how we have to distributer 

  return (
    <div>
      <h3>UseContext Hook</h3>
      <p>
        useContext is a React Hook that lets you read and subscribe to context
        from your component.
      </p>

      <h6>Value from Parent {state.count}</h6>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <UseContextUsingConsumer />
    </div>
  );
}
