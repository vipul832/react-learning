import React, { useState } from "react";

import { ReactPropTypes } from "react";

function Function1(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMale, setIsMale] = useState(true);

  return (
    <div>
      <h3>My name is {props.name}</h3>
      <h3>I am {props.age} year old</h3>
      <h3>I am a {isMale ? "Male" : "Female"}</h3>

      <p>I am Feeling {props.emotion}</p>
    </div>
  );
}

export default Function1;
