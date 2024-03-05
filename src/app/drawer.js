"use client";
import { Divider, IconButton, List } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { styled } from "@mui/material/styles";
import { useBreakPoints } from "./breakpoint";
import { menu } from "./menu";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerMenus({ toggleDrawer, open }) {
  const { isDesktop } = useBreakPoints();

  return (
    <Drawer
      variant={isDesktop ? "persistent" : "temporary"}
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader>
        <div>Hello</div>
        <IconButton onClick={toggleDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>{menu}</List>
    </Drawer>
  );
}
