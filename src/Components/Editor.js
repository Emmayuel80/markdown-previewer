import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    '& .MuiTextField-root': {
        width: '100%'
    },
    padding: theme.spacing(1)
  },
  paper: {
      width: '100%',
      padding: theme.spacing(1)
  }
}));

export default function Editor(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <TextField
          id="editor"
          label="Editor"
          multiline
          rows={10}
          variant="outlined"
          value={props.markdown}
          onChange={props.handleMarkdown}
        />
      </Paper>
    </div>
  );
}
