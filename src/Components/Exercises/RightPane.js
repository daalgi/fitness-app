import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

import Form from "./Form";

export default ({
  classes,
  exercise,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left"
  },
  muscles,
  onEdit,
  editMode
}) => (
  <Paper className={classes.paper}>
    <Typography variant="h5" color="secondary" gutterBottom>
      {exercise.title}
    </Typography>
    {editMode ? (
      <Form key={id} muscles={muscles} exercise={exercise} onSubmit={onEdit} />
    ) : (
      <Fragment>
        <Typography variant="body1">{exercise.description}</Typography>
      </Fragment>
    )}
  </Paper>
);
