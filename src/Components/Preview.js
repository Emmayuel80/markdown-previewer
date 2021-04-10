import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DOMPurify from "dompurify";
import marked from "marked";
marked.setOptions({
    breaks: true
  });
const renderer = new marked.Renderer();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: theme.spacing(2),
    
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div
          id="preview"
          className="content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(marked(props.markdown, { renderer: renderer })),
          }}
        ></div>
      </Paper>
    </div>
  );
}
