import { Card } from "@mui/material";
import GroupchatHeader from "./GroupchatHeader";
import GroupchatLastMessage from "./GroupchatLastMessage";

export default function GroupChatCard({ title, lastContent, amount, avatars }) {
  if (lastContent === undefined) {
    lastContent = {
      message: "No messages",
      time: "No time",
    };
  }

  return (
    <Card>
      <GroupchatHeader title={title} amount={amount} avatars={avatars} />
      <GroupchatLastMessage lastContent={lastContent} />
    </Card>
  );
}
