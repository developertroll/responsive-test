"use client";

import { Container, Grid, CardContent, Card } from "@mui/material";

import TimeStamp from "./TimeStamp";
import MessageComponent from "./MessageComponent";
import AvatarComponent from "./AvatarComponent";
import React from "react";
import { useBreakPoints } from "./app/breakpoint";

export default function ChatComponent({ props }) {
  const { isMobile } = useBreakPoints();
  const sChk = "row";
  return (
    <Container>
      <Grid container direction={sChk}>
        <AvatarComponent avatar={props.avatar} id={props.id} />
      </Grid>
      {isMobile ? (
        <Grid
          container
          direction="row"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <MessageComponent message={props.message} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <TimeStamp time={props.time} />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          alignItems="flex-end"
          justifyContent="center"
        >
          {sChk === "row" ? (
            <React.Fragment>
              <Grid item xs={10}>
                <Card>
                  <CardContent>
                    <MessageComponent message={props.message} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <TimeStamp time={props.time} />
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={2}>
                <TimeStamp time={props.time} />
              </Grid>
              <Grid item xs={10}>
                <Card>
                  <CardContent>
                    <MessageComponent message={props.message} />
                  </CardContent>
                </Card>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      )}
    </Container>
  );
}
