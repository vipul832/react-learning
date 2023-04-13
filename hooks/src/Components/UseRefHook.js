import React, { useState, useEffect, useRef } from "react";

export default function UseRefHook() {
  const [update, setUpdate] = useState(0);
  const countRender = useRef(1); // {current:0}
  const focusRef = useRef();
  useEffect(() => {
    countRender.current = countRender.current + 1;
  });

  function focusHandle() {
    focusRef.current.focus();
  }

  return (
    <div>
      <h3>UseRef Hook </h3>
      <p>
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </p>
      <input
        ref={focusRef}
        type="text"
        onChange={(e) => {
          setUpdate(e.target.value);
        }}
      ></input>
      <p>Current input:{update}</p>
      <p>Number of Render {countRender.current}</p>
      <button onClick={focusHandle}>Focus Input</button>
    </div>
  );
}
