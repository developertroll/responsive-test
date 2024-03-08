"use client";

import React, { createContext, useState } from "react";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleOpen = (type, content) => {
    setMessage({ type, content });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage({ type: "", content: "" });
  };

  return (
    <ToastContext.Provider value={{ open, message, handleOpen, handleClose }}>
      {children}
    </ToastContext.Provider>
  );
}
