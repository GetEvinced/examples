import React from "react";

const ModalTest = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        id="open-button"
        testid="open-modal-button"
      >
        Open
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        header={{
          label: "Modal Header",
          isDismissible: true,
        }}
        testid="modal-test"
        id="modal"
      />
    </>
  );
};

export default ModalTest;
