"use server";

import UserList from "@/components/user/userList";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Container,
  Card,
} from "@mui/material";
import Form from "./form";

export default async function create({ handleChange }) {
  const user = await fetch(process.env.site_url + "/data").then((res) =>
    res.json()
  );
  const fetchSubmit = async (title, member) => {
    const sortedMember = member.sort((a, b) => a - b);
    console.log(title, sortedMember);
    const response = await fetch(process.env.site_url + "/data/post/write", {
      method: "POST",
      body: JSON.stringify({ title: title, member: sortedMember }),
    });
    return response.ok ? response.json() : Promise.reject(response);
  };
  return (
    <Container>
      <Form users={user} />
    </Container>
  );
}
