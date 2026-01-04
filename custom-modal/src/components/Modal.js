import ReactDOM from "react-dom";
import "../App.css"; // Ensure access to animations if needed
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      console.log("Escape key pressed", "remove");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <header style={styles.header}>
          <h2>{title}</h2>
          <button onClick={onClose} style={styles.closeButton}>
            X
          </button>
        </header>
        <div style={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    width: "300px",
    height: "200px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    animation: "modal-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    cursor: "pointer",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ab0505ff",
  },
};

export default Modal;
