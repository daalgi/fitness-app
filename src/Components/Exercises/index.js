import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing() * 3,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      marginRight: 10,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item} xs={12} sm={6}>
        <LeftPane classes={classes} />
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6}>
        <RightPane classes={classes} />
      </Grid>
    </Grid>
  );
};
