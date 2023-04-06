import React from "react";
import AppContext from "../contexts/appContext";

export default function UseContextUsingConsumer() {
  return (
    <div>
      <AppContext.Consumer>
        {(value) => {
          return (
            <div>
              This Prop display using AppContext.Consumer {value[0].count}
            </div>
          );
        }}
      </AppContext.Consumer>
    </div>
  );
}
