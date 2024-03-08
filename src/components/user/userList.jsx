import { Avatar, Grid, Typography, Stack } from "@mui/material";

export default function UserList({ user }) {
  return (
    <Stack direction="row">
      <Grid item xs={2}>
        {/* <Avatar alt={user.name} src={user.avatar} /> */}
        에러 확인중
      </Grid>
      <Grid item xs={10}>
        <Typography>{user.name}</Typography>
        {user.grade && (
          <Typography sx={{ fontSize: 10, textIndent: 5 }}>
            {user.grade}
          </Typography>
        )}
      </Grid>
    </Stack>
  );
}
