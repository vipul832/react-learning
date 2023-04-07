import React from "react";
import UseContextHook from "./UseContextHook";
import UseEffectHook from "./UseEffectHook";
import UseMemoHook from "./UseMemoHook";
import UseReducerHook from "./UseReducerHook";
import UseStateHook from "./UseStateHook";
const Content = () => {
  return (
    <div className="container mt-5">
      <h1>React Hooks</h1>
      <hr />
      <UseStateHook />
      <hr />
      <UseEffectHook />
      <hr />
      <UseReducerHook />
      <hr />
      <UseContextHook />
      <hr />
      <UseMemoHook />
    </div>
  );
};

export default Content;
