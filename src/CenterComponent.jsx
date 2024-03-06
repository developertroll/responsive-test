"use client";

import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CenterComponent({ props }) {
  return (
    <React.Fragment>
      <Item>{props}</Item>
    </React.Fragment>
  );
}
