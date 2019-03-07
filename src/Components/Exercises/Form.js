import React, { Component } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Select
} from "@material-ui/core";

class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;
    return exercise ? exercise : { title: "", description: "", muscles: "" };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    // todo: validation

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state
    });
  };

  render() {
    const { title, description, muscles } = this.state,
      { exercise, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          id="standard-title"
          label="Title"
          value={title}
          name="title"
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        />

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="muscles ">Muscles</InputLabel>
          <Select value={muscles} name="muscles" onChange={this.handleChange}>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          id="standard-description"
          label="Description"
          multiline
          rows="4"
          value={description}
          name="description"
          onChange={this.handleChange}
          margin="normal"
        />

        <Button
          color="primary"
          variant="contained"
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}

export default Form;
