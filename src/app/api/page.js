import { ChatUser } from "@/exampleData/chatUser";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { Suspense } from "react";

export default function Page() {
  const userList = ChatUser().then((data) => {
    return data.results.map((user) => (
      <Stack direction="row" spacing={2} key={user.login.uuid}>
        <Avatar src={user.picture.thumbnail} alt={user.name.first} />
        <Stack>
          <Typography>{user.name.first}</Typography>
          <Typography sx={{ fontSize: 10 }}>{user.location.country}</Typography>
        </Stack>
      </Stack>
    ));
  });

  return (
    <div>
      <h1>Chat</h1>
      <Suspense fallback={<div>Loading...</div>}>{userList}</Suspense>
    </div>
  );
}
