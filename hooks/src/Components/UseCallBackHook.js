import React from "react";

import { useState, useEffect, useCallback } from "react";

export default function UseCallBackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  //   const getItems = () => {
  //     return [number, number + 1, number + 2];
  //   };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div>
      <h4>UseCallBack Hook Practice Area</h4>
      <p>
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </p>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        ></input>
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </div>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems);
    console.log("updating Items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
