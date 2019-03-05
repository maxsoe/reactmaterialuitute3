import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";
import { withStyles } from "@material-ui/styles";

const styles = {
  flex: {
    flex: 1
  }
};

const Header = ({ classes, muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        component="h1"
        color="inherit"
        variant="h5"
        className={classes.flex}
      >
        Exercise database
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
