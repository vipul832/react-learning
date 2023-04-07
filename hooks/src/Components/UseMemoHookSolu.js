import React, { useMemo, useState } from "react";

export default function UseMemoHookSolu() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  function addOne() {
    setCount((count) => count + 1);
  }

  const isEven = useMemo(() => {
    console.log("call");
    let i = 0;
    while (i < 20000000) i++;
    return count % 2 === 0;
  }, [count]);

  function doubleNumber() {
    setDouble((double) => double + 2);
  }

  return (
    <div>
      <h3>Below component is solution of above problem</h3>
      {count}
      <p>Memo output: {isEven ? "Even" : "Odd"}</p>
      <button
        onClick={() => {
          addOne();
        }}
      >
        {" "}
        add 1
      </button>
      <p>Double value {double}</p>
      <button
        onClick={() => {
          doubleNumber();
        }}
      >
        double Number
      </button>
    </div>
  );
}
