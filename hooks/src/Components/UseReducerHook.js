import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function UseReducerHook() {
  //General Structure of UseReducer

  // It take 3 argument useReducer(reducer, initialArg, init?)
  // 1) reducer = It a function to that you want to apply on current state,
  // 2) initialArg = setting initial value to state, and
  // 3) init = is optional value

  /*
  Dispatch function 
    The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. 
    You need to pass the action as the only argument to the dispatch function
  */

  const [state, dispatch] = useReducer(reducer, { age: 24 });

  return (
    <div>
      <h3>UseReducer Hook</h3>
      <p>
        useReducer is a React Hook that lets you add a reducer to your
        component.
      </p>
      <h4>Current age is {state.age}</h4>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increase
      </button>
    </div>
  );
}
