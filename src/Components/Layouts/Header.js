import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";

const Header = props => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        component="h1"
        color="inherit"
        variant="h5"
        style={{ flex: 1 }}
      >
        Exercise database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
);

export default Header;
