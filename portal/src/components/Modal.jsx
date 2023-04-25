import React from "react";

import ReactDOM from "react-dom";

export default function Modal({ show, closeModal }) {
  if (!show) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="modal-area">
          <h2>User Profile</h2>
          <button onClick={closeModal}>close</button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
