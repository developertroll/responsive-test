import { Container, Card } from "@mui/material";
import GroupChatCard from "./GroupChatCard";
import { use } from "react";

async function getAvatars(member) {
  const avatars = await Promise.all(
    member.map(async (member) => {
      const response = await fetch(`${process.env.site_url}/data/${member}`);
      const data = await response.json();
      return data[0].avatar;
    })
  );
  return avatars;
}

export default function ChatGroups({ props }) {
  const avatars = use(getAvatars(props.member));
  return (
    <GroupChatCard
      title={props.title}
      lastContent={props.lastContent}
      amount={props.member.length}
      avatars={avatars}
    />
  );
}
