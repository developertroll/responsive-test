import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbarmenu() {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer}
        sx={{ marginRight: "36px", ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
}
