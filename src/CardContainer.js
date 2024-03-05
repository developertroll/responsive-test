import { Card, CardContent, CardHeader } from "@mui/material";

export default function CardContainer({ title, content }) {
  return (
    <Card>
      <CardHeader title={title}></CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
