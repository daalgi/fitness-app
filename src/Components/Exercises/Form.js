import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  //makeStyles,
  TextField
} from "@material-ui/core";
/*
const useStyles = makeStyles(theme => ({
  FormControl: {
    width: 350
  },
  xsFormControl: {
    width: 250
  }
}));*/

export default ({ muscles, exercise, onSubmit }) => {
  //const classes = useStyles();
  const initialState = exercise || {
    title: "",
    description: "",
    muscles: ""
  };
  const [state, setState] = useState(initialState);

  /* Initialize the form with the values of the selected exercise
  Method 1:
  Component mounts - componentDidMount equivalent (only in the first render)
  useEffect(() => {
    if (exercise) setState(exercise);
  }, [exercise]);

  Method 2:
  Use the key attribute of the Form component. 
  If the key changes, the component will remount.
  Set key={id}
  */

  const handleChange = name => ({ target: { value } }) => {
    //console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    // Validation
    onSubmit({
      id: state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...state
    });
    setState(initialState);
  };

  return (
    <form>
      <TextField
        fullWidth
        label="Title"
        value={state.title}
        onChange={handleChange("title")}
        margin="normal"
      />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="muscles">Muscles</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.muscles || ""}
          onChange={handleChange("muscles")}
        >
          {muscles.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <TextField
        fullWidth
        multiline
        rows="4"
        label="Description"
        value={state.description}
        onChange={handleChange("description")}
        margin="normal"
      />
      <br />
      <Button
        onClick={handleSubmit}
        color="primary"
        variant="outlined"
        disabled={!state.title || !state.muscles}
      >
        {exercise ? "Edit" : "Create"}
      </Button>
    </form>
  );
};
