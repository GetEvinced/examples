import React from "react";

const Alert = ({ id, message, type = "info" }) => {
  const alertClass = `alert alert-${type}`;

  return (
    <div
      id={id}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={alertClass}
      style={{
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid",
        borderRadius: "4px",
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
