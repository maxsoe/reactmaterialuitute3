import React, { Fragment } from "react";
import {
  classes,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { withContext } from "../../context";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  title: {
    textTransform: "capitalize"
  }
};

const Catalog = ({
  classes,
  exercisesByMuscles,
  category,
  onSelect,
  exercise,
  onDelete,
  onEdit,
  onSelectEdit
}) =>
  exercisesByMuscles.map(
    ([group, exercises]) =>
      (!category || category === group) && (
        <Fragment key={group}>
          <Typography
            className={classes.title}
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
                  <IconButton color="primary" onClick={() => onSelectEdit(id)}>
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
      )
  );

export default withContext(withStyles(styles)(Catalog));
