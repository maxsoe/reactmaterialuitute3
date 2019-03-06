import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";
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
      <CreateDialog />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
