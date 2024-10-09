import React, { useEffect, useRef } from "react";

const CenteredToast = ({
  message = "Success",
  type = "success",
  delay = 3000,
}) => {
  const toastRef = useRef(null);

  // Show the toast when the component is rendered
  useEffect(() => {
    const toast = new window.bootstrap.Toast(toastRef.current, {
      delay: delay, // Delay dynamically passed
    });
    toast.show();
  }, [delay]);

  // Determine the background class based on type (success, error, etc.)
  const backgroundClass =
    type === "success"
      ? "bg-success"
      : type === "error"
      ? "bg-danger"
      : "bg-info";

  return (
    <div
      className="toast-container position-fixed top-50 start-50 translate-middle p-3"
      style={{ zIndex: 1050 }}
    >
      <div
        ref={toastRef}
        className={`toast align-items-center text-white ${backgroundClass} border-0`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CenteredToast;
