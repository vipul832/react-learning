import React from "react";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const bnav = useNavigate();
  return (
    <>
      <div>Order Place successfully</div>
      <button
        onClick={() => {
          bnav("/");
        }}
      >
        back
      </button>
    </>
  );
}
