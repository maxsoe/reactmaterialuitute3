import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default ({ style }) => (
  <Paper style={style.Paper}>
    <Typography variant="h4">Welcome</Typography>
    <Typography style={{ marginTop: 20 }} variant="body2">
      Please select an exercise from the list on the left
    </Typography>
  </Paper>
);
