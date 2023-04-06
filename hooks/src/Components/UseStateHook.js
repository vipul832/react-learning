import React, { useState } from "react";

export default function UseStateHook() {
  //General structure of UseState

  // return an array which 1 contain initial value and other a "set" function

  // [value,set[value](function)]=useState(Initial Value to set);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // 0+1
    // setCount(count+1);   never increment two time instead increment on same value // 0+1
    // if we want to increment by 2 type so, we have to use arrow function

    // setCount((count) => count + 1); //this code will do two time increment of count
    // setCount((count) => count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Usestate Hook </h2>
      <p>
        useState is a React Hook that lets you add a state variable to your
        component.
      </p>
      <div>
        <h3>Count Value: {count}</h3>
        <div className="d-flex justify-content-between w-25">
          <button className="btn btn-primary" onClick={decrement}>
            -
          </button>
          <button className="btn btn-primary" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
