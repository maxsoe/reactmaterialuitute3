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
import { withStyles } from "@material-ui/core/styles";
import { withContext } from "../../context";

const styles = theme => ({
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
});

const Exercises = ({
  classes,
  exercisesByMuscles,
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
  <Grid className={classes.container} container spacing={8}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercisesByMuscles.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography
                color="secondary"
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
                      <IconButton
                        color="primary"
                        onClick={() => onSelectEdit(id)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton color="primary" onClick={() => onDelete(id)}>
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
    <Grid className={classes.item} item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography color="secondary" variant="h4" gutterBottom>
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
          <Typography variant="subtitle1">{description}</Typography>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default withContext(withStyles(styles)(Exercises));
