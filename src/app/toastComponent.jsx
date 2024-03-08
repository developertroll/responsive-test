"use client";

import { Alert, Slide, Snackbar } from "@mui/material";
import { ToastContext } from "./toast";
import { useContext } from "react";

export default function ToastComponent() {
  const { open, message, handleClose } = useContext(ToastContext);
  return (
    <Slide direction="down" in={open} mountOnEnter unmountOnExit>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={message.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message.content}
        </Alert>
      </Snackbar>
    </Slide>
  );
}
