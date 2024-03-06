import { Avatar, AvatarGroups } from "@mui/material";

export default function AvatarGroup({ avatars, screenType }) {
  const maxNumber = screenType === "Mobile" ? 2 : 5;
  return (
    <AvatarGroups max={maxNumber}>
      {avatars.map((avatar) => (
        <Avatar alt={avatar.id} src={avatar.avatar} key={avatar.id} />
      ))}
    </AvatarGroups>
  );
}
