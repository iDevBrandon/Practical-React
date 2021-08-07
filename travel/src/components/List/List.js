import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restant, Hotel and Attractions</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel></InputLabel>
      </FormControl>
    </div>
  );
};

export default List;
