import React from "react";

export default function UserDisplay(props) {
  return (
    <div
      className="card"
      style={{ width: "18rem", height: "15rem", margin: "2rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">Welcome, {props.name}</h5>
        <div className="card-text">
          <p>
            <b>UserName:</b> {props.username},
          </p>
          <p>
            <b> Address:</b>
            {props.street},{props.suite},{props.city},{props.zipcode}
          </p>
        </div>
        <button className="btn btn-primary">{props.email}</button>
      </div>
    </div>
  );
}
