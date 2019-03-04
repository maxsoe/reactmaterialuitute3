import React, { Component, Fragment } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Select
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState();

    getInitState() {
      const { exercise } = this.props;
      return exercise ? exercise : { title: "", description: "", muscles: "" };
    }

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    handleSubmit = () => {
      // todo: validation
      const { exercise } = this.state;

      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });

      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const { title, description, muscles } = this.state,
        { classes, muscles: categories } = this.props;

      return (
        <form>
          <TextField
            id="standard-title"
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles ">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            className={classes.FormControl}
            id="standard-description"
            label="Description"
            multiline
            rows="4"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
          />
          <br />
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            Create
          </Button>
        </form>
      );
    }
  }
);
