import { Typography, Grid } from "@mui/material";
import React from "react";
import { SupervisorAccount } from "@mui/icons-material";

export default function GroupChatCard({ title, amount }) {
  return (
    <React.Fragment>
      <Grid container direction="row">
        <Grid item xs={10}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <SupervisorAccount />
          <Typography variant="body2">{amount}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
