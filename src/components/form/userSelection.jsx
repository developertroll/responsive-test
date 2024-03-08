import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import UserList from "../user/userList";

export default function UserSelection({ users, handleChange, checked }) {
  return (
    <React.Fragment>
      <FormGroup>
        {users.map((user) => (
          <FormControlLabel
            key={user._id}
            control={
              <Checkbox
                onChange={handleChange}
                value={parseInt(user.userIdx)}
                checked={checked.includes(parseInt(user.userIdx))}
              />
            }
            label={<UserList user={user} />}
          />
        ))}
      </FormGroup>
    </React.Fragment>
  );
}
