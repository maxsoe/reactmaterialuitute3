import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = props => (
  <AppBar position="static">
    <Toolbar>
      <Typography component="h1" color="inherit" variant="h5">
        Exercise database
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
