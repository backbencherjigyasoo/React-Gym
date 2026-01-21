import { createContext, useState, useCallback } from "react";
import ToastContainer from "../components/Toast/ToastContainer";

// Simple ID generator
const generateId = () => Math.random().toString(36).substr(2, 9);

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = "info", duration = 3000) => {
      const id = generateId();
      const newToast = { id, message, type, duration };

      setToasts((prevToasts) => [...prevToasts, newToast]);

      if (duration) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
