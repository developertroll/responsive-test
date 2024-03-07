import { Card } from "@mui/material";
import GroupchatHeader from "./GroupchatHeader";
import GroupchatLastMessage from "./GroupchatLastMessage";

export default function GroupChatCard({ title, lastContent, amount }) {
  return (
    <Card>
      <GroupchatHeader title={title} amount={amount} />
      <GroupchatLastMessage lastContent={lastContent} />
    </Card>
  );
}
