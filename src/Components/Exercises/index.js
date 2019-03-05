import React, { Fragment } from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Typography
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: "auto"
  }
});

export default withStyles(styles)(
  ({
    classes,
    exercises,
    category,
    editMode,
    muscles,
    onSelect,
    exercise,
    exercise: {
      id,
      title = "Welcome!",
      description = "Please select an exercise from the list on the left"
    },
    onDelete,
    onEdit,
    onSelectEdit
  }) => (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="h5"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.Paper}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          {editMode ? (
            <Form
              key={id}
              exercise={exercise}
              muscles={muscles}
              onSubmit={onEdit}
            />
          ) : (
            <Typography variant="body2">{description}</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
);
