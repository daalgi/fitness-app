import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

import { withContext } from "../../context";
import Form from "./Form";

const RightPane = props => {
  const {
    classes,
    exercise,
    exercise: {
      id,
      title = "Welcome!",
      description = "Please select an exercise from the list on the left"
    },
    muscles,
    onExerciseEdit,
    editMode
  } = props;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" color="secondary" gutterBottom>
        {exercise.title || title}
      </Typography>
      {editMode ? (
        <Form
          key={id}
          muscles={muscles}
          exercise={exercise}
          onSubmit={onExerciseEdit}
        />
      ) : (
        <Fragment>
          <Typography variant="body1">
            {exercise.description || description}
          </Typography>
        </Fragment>
      )}
    </Paper>
  );
};

export default withContext(RightPane);
