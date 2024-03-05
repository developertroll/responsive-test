"use client";

import DrawerMenus from "./drawer";
import Appbar from "./Appbar";
import { useState } from "react";
export default function Moverlay() {
  const [open, setOpen] = useState(false);
  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <div>
      <Appbar props={toggleDrawer} />
      <DrawerMenus toggleDrawer={toggleDrawer} open={open} />
    </div>
  );
}
