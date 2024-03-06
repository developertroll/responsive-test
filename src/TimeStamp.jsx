import React from "react";
import CenterComponent from "./CenterComponent";
import { Typography } from "@mui/material";
import moment from "moment";

export default function TimeStamp({ time }) {
  const checkTime = (time) => {
    if (moment().diff(time, "days") < 1) {
      return moment(time).fromNow();
    } else {
      return moment(time).format("YYYY-MM-DD");
    }
  };
  return (
    <React.Fragment>
      <CenterComponent props={<Typography>{checkTime(time)}</Typography>} />
    </React.Fragment>
  );
}
