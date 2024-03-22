"use client";

import UserSelection from "@/components/form/userSelection";
import {
  TextField,
  Paper,
  Box,
  FormControl,
  Button,
  Stack,
} from "@mui/material";
import { useState, useContext } from "react";
import { ToastContext } from "@/app/toast";
import { useRouter } from "next/navigation";

export default function Form({ users }) {
  const router = useRouter();
  const { handleOpen } = useContext(ToastContext);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleMember = (e) => {
    if (e.target.checked) {
      setMember([...member, parseInt(e.target.value)]);
    } else {
      setMember(member.filter((name) => name !== parseInt(e.target.value)));
    }
  };
  const fetchSubmit = async (title, member) => {
    const sortedMember = member.sort((a, b) => a - b);
    const body = JSON.stringify({ title: title, member: sortedMember });
    console.log(body); // 데이터가 제대로 변환되었는지 확인
    const response = await fetch("http://localhost:3000/data/post/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    console.log(response); // 응답이 제대로 도착했는지 확인
    return response.ok ? response.json() : Promise.reject(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchSubmit(title, member);
      handleOpen("success", "그룹 채팅방이 생성되었습니다");
      router.push("/chat");
    } catch (error) {
      handleOpen("error", "그룹 채팅방 생성에 실패했습니다");
    }
  };

  return (
    <Box component="form">
      <Stack>
        <FormControl>
          <TextField onChange={handleTitle} label="그룹방 제목" />
          {title}
        </FormControl>
        <FormControl>
          <UserSelection
            users={users}
            handleChange={handleMember}
            checked={member}
          />
          {member}
        </FormControl>
        <Button onClick={handleSubmit}>Create</Button>
      </Stack>
    </Box>
  );
}
