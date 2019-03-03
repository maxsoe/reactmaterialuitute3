import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { exercises, muscles } from "../store";

class App extends Component {
  state = { exercises, exercise: {} };

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

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  handelExerciseDelete = id => {
    //lorum ipsum
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handelExerciseDelete}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
