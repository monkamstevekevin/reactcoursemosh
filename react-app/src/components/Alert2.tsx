import React from "react";
interface alert2 {
  children: string;
  onClose: () => void;
  color?:"primary" |" secondary"
}

const Alert2 = ({ children, onClose }: alert2) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
      
    >
      <strong>Holy guacamole!</strong>
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert2;
