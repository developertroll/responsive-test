import { Typography, Stack, CardHeader, Container } from "@mui/material";
import AvatarGroups from "./AvatarGroups";
import React from "react";
import { SupervisorAccount } from "@mui/icons-material";

export default function GroupChatCard({ title, amount, avatars }) {
  return (
    <React.Fragment>
      <CardHeader
        avatar={<AvatarGroups avatars={avatars} />}
        title={
          <Stack
            direction="row"
            alignItems="center"
            justifyItems="flex-start"
            spacing={2}
          >
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">
              <SupervisorAccount />
              {amount}
            </Typography>
          </Stack>
        }
      ></CardHeader>
    </React.Fragment>
  );
}
