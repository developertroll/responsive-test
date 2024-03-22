import { Avatar, Grid, Typography, Stack } from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.at(0).toUpperCase()}`,
  };
}

export default function UserList({ user }) {
  return (
    <Stack direction="row">
      <Grid item xs={2}>
        <Avatar {...stringAvatar(user.name)} />
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
