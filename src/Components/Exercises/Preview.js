import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { withContext } from "../../context";
import Form from "./Form";

const Preview = ({
  category,
  editMode,
  muscles,
  exercise,
  exercise: { id, title, description },
  onEdit
}) => (
  <Fragment>
    <Typography color="secondary" variant="h4" gutterBottom>
      {title || "Welcome!"}
    </Typography>
    {editMode ? (
      <Form key={id} exercise={exercise} muscles={muscles} onSubmit={onEdit} />
    ) : (
      <Typography variant="subtitle1">
        {description || "Please select an exercise from the list on the left"}
      </Typography>
    )}
  </Fragment>
);

export default withContext(Preview);
