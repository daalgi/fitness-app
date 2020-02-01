import React, { Fragment, useState } from "react";
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import Add from "@material-ui/icons/Add";

import Form from "./Form";

export default ({ muscles, onSubmit }) => {
  const [state, setState] = useState({
    open: false
  });

  const handleToggle = () => {
    setState({
      ...state,
      open: !state.open
    });
  };

  const handleFormSubmit = exercise => {
    handleToggle();
    onSubmit(exercise);
  };

  return (
    <Fragment>
      <Fab
        variant="round"
        onClick={handleToggle}
        size="small"
        color="secondary"
      >
        <Add />
      </Fab>
      <Dialog fullWidth maxWidth="sm" open={state.open} onClose={handleToggle}>
        <DialogTitle>Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <Form muscles={muscles} onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
