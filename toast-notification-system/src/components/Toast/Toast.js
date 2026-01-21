import React, { useState } from "react";
import "./Toast.css";

const Toast = ({ id, message, type, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    // Wait for animation to finish before actually removing
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  // If using the global timeout in context, we might not need this internal timer,
  // but for smooth exit animations initiated by the parent's removal,
  // we usually handle the "exit" state in the parent or use a library like framer-motion.
  // For simplicity here, we'll let the Context handle the hard removal,
  // but if we wanted exit animations on auto-dismiss, we'd need more logic.
  //
  // Current approach: Standard instant removal or manual close.
  // Refined approach: Let's keep it simple. The context removes it.
  // If we want exit animation, we need the context to trigger "exit" state first.

  return (
    <div className={`toast ${type} ${isExiting ? "exiting" : ""}`}>
      <span>{message}</span>
      <button className="toast-close-btn" onClick={() => onClose(id)}>
        ×
      </button>
    </div>
  );
};

export default Toast;
