import ChatGroups from "@/ChatGroups";
import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  Typography,
  Button,
  Divider,
  Container,
} from "@mui/material";
import { use } from "react";

async function fetchGroup() {
  const response = await fetch(process.env.site_url + "/data/chatGroup");
  const data = await response.json();
  return data;
}

export default function Page() {
  const chatGroups = use(fetchGroup());
  return (
    <Card>
      <CardHeader
        title={
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4">그룹 채팅방</Typography>
            <Button variant="contained" color="primary" href="/chat/create">
              그룹 채팅방 만들기
            </Button>
          </Stack>
        }
      ></CardHeader>
      <CardContent>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          채팅방 목록
        </Typography>
        <Divider />
        {chatGroups ? (
          chatGroups.map((chatGroup) => {
            return <ChatGroups props={chatGroup} key={chatGroup._id} />;
          })
        ) : (
          <div></div>
        )}
      </CardContent>
    </Card>
  );
}
