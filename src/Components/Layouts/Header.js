import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CreateDialog from "../Exercises/Dialog";

const useStyles = makeStyles({
  flex: {
    flex: 1
  }
});

export default () => {
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
        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
};
