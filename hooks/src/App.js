import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import { AppProvider } from "./contexts/appContext";
import { useReducer } from "react";

function reducer(state, action) {
  //reducer function for useReducer Hook
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="App">
      <AppProvider value={[state, dispatch]}>
        {" "}
        {/*  Passing props to the child's */}
        <Navbar />
        <Content />
      </AppProvider>
    </div>
  );
}

export default App;
