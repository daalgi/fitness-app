import React, { Fragment } from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

import { withContext } from "../../context";

const LeftPane = props => {
  const {
    classes,
    exercisesByMuscles,
    category,
    onExerciseSelect,
    onExerciseSelectEdit,
    onExerciseDelete
  } = props;

  return (
    <Paper className={classes.paper}>
      {exercisesByMuscles.map(([group, exercises]) =>
        !category || category === group ? (
          <Fragment key={group}>
            <Typography
              variant="h6"
              color="secondary"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ id, title }) => (
                <ListItem key={id} button onClick={() => onExerciseSelect(id)}>
                  <ListItemText primary={title} />
                  <ListItemSecondaryAction>
                    <IconButton
                      color="primary"
                      onClick={() => onExerciseSelectEdit(id)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="primary"
                      onClick={() => onExerciseDelete(id)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : null
      )}
    </Paper>
  );
};

export default withContext(LeftPane);
