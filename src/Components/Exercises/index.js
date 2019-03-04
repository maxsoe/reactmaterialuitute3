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

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
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
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h5" style={{ textTransform: "capitalize" }}>
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
    <Grid item sm>
      <Paper style={style.Paper}>
        {editMode ? (
          <Form
            key={id}
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
          />
        ) : (
          <Fragment>
            <Typography variant="h4">{title}</Typography>
            <Typography style={{ marginTop: 20 }} variant="body2">
              {description}
            </Typography>
          </Fragment>
        )}
      </Paper>
    </Grid>
  </Grid>
);
