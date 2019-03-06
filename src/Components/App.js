import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { exercises, muscles } from "../store";

import { Provider } from "../context";

class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  };

  // Use the code below if we want to keep the categories visible even if there are no exercises in said category

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initExercises)
    );

    // Use the code below if you want the categories disappear if there are no exercises in said category.
    // getExercisesByMuscles() {
    // return Object.entries(
    //   this.state.exercises.reduce((exercises, exercise) => {
    //     const { muscles } = exercise;
    //     exercises[muscles] = exercises[muscles]
    //       ? [...exercises[muscles], exercise]
    //       : [exercise];
    //
    //     return exercises;
    //   }, {})
    // );
  }

  handleCategorySelect = category => {
    this.setState({ category });
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  handelExerciseDelete = id => {
    this.setState(({ editMode, exercise, exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));
  };

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  };

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  };

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles: this.getExercisesByMuscles(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleExerciseCreate,
    onDelete: this.handelExerciseDelete,
    onEdit: this.handleExerciseEdit,
    onSelect: this.handleExerciseSelect,
    onSelectEdit: this.handleExerciseSelectEdit
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <CssBaseline />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <Header />
        <Exercises />
        <Footer />
      </Provider>
    );
  }
}

export default App;
