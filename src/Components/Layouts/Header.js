import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialog";

const useStyles = makeStyles({
  flex: {
    flex: 1
  }
});

export default ({ muscles, onExerciseCreate }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="subtitle1"
          color="inherit"
          className={classes.flex}
        >
          Exercise database
        </Typography>
        <CreateDialog muscles={muscles} onSubmit={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
};
