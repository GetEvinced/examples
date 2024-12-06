import React from "react";

const Button = ({ openModal }) => {
  return (
    <button id="openButton" className="openButton" onClick={openModal}>
      Open Modal
    </button>
  );
};

export default Button;
