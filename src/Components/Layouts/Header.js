import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Dialog } from "../Exercises";
import { withStyles } from "@material-ui/styles";

const styles = {
  flex: {
    flex: 1
  }
};

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography color="inherit" variant="h5" className={classes.flex}>
        Exercise database
      </Typography>
      <Dialog />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
