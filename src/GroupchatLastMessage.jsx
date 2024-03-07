import React from "react";
import { CardContent, Typography, Grid } from "@mui/material";

export default function GroupchatLastMessage({ lastContent }) {
  return (
    <React.Fragment>
      <CardContent>
        <Grid container direction="row">
          <Grid item xs={10}>
            <Typography variant="body2">{lastContent.message}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{lastContent.time}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );
}
