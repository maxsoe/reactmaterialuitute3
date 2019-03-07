import React, { Component, Fragment } from "react";
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Form from "./Form";
import { ExercisesContext } from "../../context";

class Dialog extends Component {
  static contextType = ExercisesContext;

  state = { open: false };

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.context.onCreate(exercise);
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state,
      { muscles } = this.context;

    return (
      <Fragment>
        <Fab color="secondary" onClick={this.handleToggle} size="small">
          <Add />
        </Fab>
        <MuiDialog
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="xs"
          onClose={this.handleToggle}
          open={open}
        >
          <DialogTitle id="form-dialog-title">
            Create a new exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </MuiDialog>
      </Fragment>
    );
  }
}

export default Dialog;
