import React, { Component, Fragment } from "react";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Form from "./Form";
import { withContext } from "../../context";

class CreateDialog extends Component {
  state = { open: false };

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state,
      { muscles } = this.props;

    return (
      <Fragment>
        <Fab color="secondary" onClick={this.handleToggle} size="small">
          <Add />
        </Fab>
        <Dialog
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
        </Dialog>
      </Fragment>
    );
  }
}

export default withContext(CreateDialog);
