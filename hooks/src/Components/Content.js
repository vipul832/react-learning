import React from "react";
import UseEffectHook from "./UseEffectHook";
import UseStateHook from "./UseStateHook";
const Content = () => {
  return (
    <div className="container mt-5">
      <h1>React Hooks</h1>
      <hr />
      <UseStateHook />
      <hr />
      <UseEffectHook />
    </div>
  );
};

export default Content;
