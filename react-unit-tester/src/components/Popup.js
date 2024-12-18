import React from "react";

const Popup = ({ isOpen, closeModal }) => {
  return (
    <div
      role="dialog"
      id="modal"
      style={{
        display: isOpen ? "block" : "none",
        visibility: isOpen ? "visible" : "hidden",
      }}
      aria-hidden={!isOpen}
      className={isOpen ? "open" : ""}
    >
      <div tabIndex={"-1"}>
        <p tabIndex={"-1"}>This is a modal example</p>
        <button onClick={closeModal} tabIndex={"-1"}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
