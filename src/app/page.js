"use client";

import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Item>Home</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            Welcome to the MUI v5 Next.js example. This example is a simple
            dashboard layout with a fixed sidebar and a responsive content area.
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
