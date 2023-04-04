import React from "react";
import { useState, useEffect } from "react";
import UserDisplay from "./UserDisplay";

export default function UseEffectHook() {
  //General Structure of UseEffectHook

  /* Ite take a function and dependencies variable.    
   1) It is use for clean up hook
   2) You can’t call it inside loops or conditions.
  /*
  /* useEffect(()=>{
    logic
    return(
                  //call first then logic part
    )
  },[Dependencies])*/

  const [count, setCount] = useState();

  useEffect(() => {
    async function getData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const responseData = await data.json();
      setCount(responseData);
    }

    getData();
  }, []);
  return (
    <div className="justify-content-center text-center">
      <h2>User Information using useEffect</h2>
      <p>
        useEffect is a React Hook that lets you synchronize a component with an
        external system.
      </p>
      <div className="d-flex flex-wrap justify-content-center">
        {count?.map(({ id, name, username, email, address }) => {
          const { street, suite, city, zipcode } = address;
          return (
            <UserDisplay
              keys={id}
              name={name}
              username={username}
              email={email}
              street={street}
              suite={suite}
              city={city}
              zipcode={zipcode}
            />
          );
        })}
      </div>
    </div>
  );
}
