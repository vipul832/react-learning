import React from "react";

export default function UserDisplay(props) {
  return (
    <div key={props.key}>
      <div
        class="card"
        style={{ width: "18rem", height: "15rem", margin: "2rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">Welcome, {props.name}</h5>
          <p class="card-text">
            <p>
              <b>UserName:</b> {props.username},
            </p>
            <p>
              <b> Address:</b>
              {props.street},{props.suite},{props.city},{props.zipcode}
            </p>
          </p>
          <a href="#" class="btn btn-primary">
            {props.email}
          </a>
        </div>
      </div>
    </div>
  );
}
