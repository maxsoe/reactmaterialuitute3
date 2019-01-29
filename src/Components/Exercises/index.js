import React, { Fragment } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import RightPane from "./RightPane";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container spacing={16}>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography variant="h5" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <RightPane style={style} />
    </Grid>
  </Grid>
);
