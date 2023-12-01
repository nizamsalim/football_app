import React from "react";

function Alert({ isVisible, type, message }) {
  return (
    <div>
      {isVisible ? (
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Alert;
