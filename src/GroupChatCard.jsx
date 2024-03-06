export default function GroupChatCard({ title, lastContent, number }) {
  return (
    <Card>
      <CardHeader title={title}></CardHeader>
      <CardContent>{lastContent}</CardContent>
    </Card>
  );
}
