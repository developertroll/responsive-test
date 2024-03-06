import { CardHeader, Avatar } from "@mui/material";
import React from "react";

export default function AvatarComponent({ avatar, id }) {
  const avatarId = avatar ? avatar.charAt(0) : id.charAt(0);
  return (
    <React.Fragment>
      <CardHeader avatar={<Avatar>{avatarId}</Avatar>} title={id}></CardHeader>
    </React.Fragment>
  );
}
