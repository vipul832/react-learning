import React from "react";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState("");
  return (
    <div>
      <label> UserName:{""}</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={}>Login</button>
    </div>
  );
};

export default Login;
