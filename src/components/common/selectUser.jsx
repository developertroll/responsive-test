import { Checkbox, Grid, Paper } from "@mui/material";
import UserList from "../user/userList";

export default function SelectUser({ user, handleChange }) {
  return (
    <Paper>
      <Grid container direction="row">
        <Grid item xs={2}>
          <Checkbox onChange={handleChange} name={user.name} />
        </Grid>
        <Grid item xs={10}>
          <UserList user={user} />
        </Grid>
      </Grid>
    </Paper>
  );
}
