import React from "react";
import Class1 from "./Class1";
import Function1 from "./Function1";
import LifeCycleMethods from "./LifeCycleMethods";

const Content = () => {
  return (
    <div className="container mt-5">
      <h1>Function and Class Components</h1>

      <div className="row mt-5 justify-content-between">
        <div className="class-comp col-5">
          <h3>Class Component</h3>
          <p>
            This is the bread and butter of most modern web apps built in
            ReactJS. These components are simple classes (made up of multiple
            functions that add functionality to the application).
          </p>
          <div>
            <Class1 emotion="Happy" age={15} name="" />
          </div>
        </div>

        <div className="func-comp col-5">
          <h3>Function Components</h3>
          <p>
            Functional components are some of the more common components that
            will come across while working in React. These are simply JavaScript
            functions. We can create a functional component to React by writing
            a JavaScript function.
          </p>
          <div>
            <Function1 emotion="Chill" age={15} name="Ashish" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Pure Components</h3>
        <p className="">
          The difference between them is that React.Component doesn’t implement
          shouldComponentUpdate(), but React.PureComponent implements it with a
          shallow prop and state comparison. By using PureComponent, you are
          telling React that your component complies with this requirement, so
          React doesn’t need to re-render as long as its props and state haven’t
          changed. However, your component will still re-render if a context
          that it’s using changes.
        </p>
      </div>
      <div className="mt-5">
        <h3>Component LifeCycle</h3>
        <p className="">
          The series of event that happen form he mounting of a react components
          to its unmounting.
        </p>
        <ul>
          <li>Mounting-Birth of Your Components</li>
          <li>Upgrade-Growth of Your Components</li>
          <li>Unmount-Death of Your Components</li>
        </ul>

        <a href="https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#whatisthereactcomponentlifecycle">
          {" "}
          Read Life Cycle Method in Details
        </a>
      </div>
      <LifeCycleMethods />
    </div>
  );
};

export default Content;
