import React, { useState, Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default props => {
  const [state, setState] = useState({
    exercises,
    exercise: {},
    category: ""
  });

  const getExercisesByMuscles = () => {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );
    //console.log(state.exercises)
    return Object.entries(
      state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initExercises)
    );
  };

  const handleCategorySelect = category => setState({ ...state, category });

  const handleExerciseSelect = id => {
    //console.log(state.exercise)
    //console.log({ ex: state.exercises.filter(ex => ex.id === id)[0] })
    setState({
      ...state,
      exercise: state.exercises.find(ex => ex.id === id), // Why not array[0]???
      editMode: false
    });
  };

  const handleExerciseCreate = exercise =>
    setState({
      ...state,
      exercises: [...state.exercises, exercise],
      exercise
    });

  const handleExerciseSelectEdit = id => {
    //console.log(state.exercises.find(ex => ex.id === id))
    //console.log(state.exercises.find(ex => ex.id === id)[0])
    //console.log({ ex: state.exercises.filter(ex => ex.id === id) })
    setState({
      ...state,
      editMode: true,
      exercise: state.exercises.find(ex => ex.id === id)
    });
  };

  const handleExerciseEdit = exercise =>
    setState({
      ...state,
      exercises: [
        ...state.exercises.map(ex => (ex.id === exercise.id ? exercise : ex))
      ],
      exercise: exercise,
      editMode: false
    });

  const handleExerciseDelete = id =>
    setState({
      ...state,
      exercises: [...state.exercises.filter(ex => ex.id !== id)],
      editMode: state.exercise.id === id ? false : state.editMode,
      exercise: state.exercise.id === id ? {} : state.exercise
    });

  //console.log(getExercisesByGroup())
  return (
    <Fragment>
      <CssBaseline />
      <Header muscles={muscles} onExerciseCreate={handleExerciseCreate} />
      <Exercises
        exercise={state.exercise}
        muscles={muscles}
        category={state.category}
        exercises={getExercisesByMuscles()}
        onSelect={handleExerciseSelect}
        onSelectEdit={handleExerciseSelectEdit}
        onDelete={handleExerciseDelete}
        onEdit={handleExerciseEdit}
        editMode={state.editMode}
      />
      <Footer
        muscles={muscles}
        category={state.category}
        onSelect={handleCategorySelect}
      />
    </Fragment>
  );
};
