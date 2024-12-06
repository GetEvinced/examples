import React, { useState } from "react";
import Popup from "./Popup";
import Button from "./Button";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Button openModal={openModal} />
      {isOpen && <Popup closeModal={closeModal} />}
    </div>
  );
};
