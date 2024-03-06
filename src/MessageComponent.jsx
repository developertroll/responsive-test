import { Typography } from "@mui/material";
import React from "react";

export default function MessageComponent({ message }) {
  return (
    <React.Fragment>
      <Typography variant="body1">{message}</Typography>
    </React.Fragment>
  );
}
