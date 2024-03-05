import { Container, Grid, Paper } from "@mui/material";
import AvatarComponent from "./AvatarComponent";
import TimeStamp from "./TimeStamp";
import MessageComponent from "./MessageComponent";

export default function ChatComponent(props) {
  const sChk = props.samePerson(props.id) ? "row" : "row-reverse";
  return (
    <Grid container direction={sChk}>
      <Grid item xs={12}>
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <AvatarComponent avatar={props.Avatar} />
            </Grid>
            <Grid item xs={8}>
              <TimeStamp props={props.time} />
            </Grid>
          </Grid>
          <Paper>
            <MessageComponent props={props.message} />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
