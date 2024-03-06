import { Container, Grid } from "@mui/material";
import AvatarGroup from "./AvatarGroups";
import GroupChatCard from "./GroupChatCard";

export default function ChatGroups({ props }) {
  return (
    <Container>
      <Grid container direction="row">
        <Grid item xs={12}>
          <AvatarGroup avatars={props.avatars} screenType={props.screenType} />
        </Grid>
        <Grid item xs={12}>
          <GroupChatCard title={props.title} lastContent={props.lastContent} />
        </Grid>
      </Grid>
    </Container>
  );
}
