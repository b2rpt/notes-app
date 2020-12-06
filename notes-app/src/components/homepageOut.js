import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import useForm from "../hooks/useForm";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addNotes } from "../actions";
import { Controls } from "./reusableComp/controls";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    overflow: "hidden",
    borderRadius: 2,
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: "0px",
  },
  communityDescription: {
    border: `1px solid ${theme.palette.border}`,
    width: "100%",
    height: "46vh",
    borderRadius: 2,
    padding: "15px 8px !important",
    fontSize: `${theme.typography.fontSizeMedium}px !important`,
    resize: "none",
  },
  grid: {
    "&.MuiGrid-grid-xs-9": {
      maxWidth: "100%",
    },
  },
}));

const initialValues = {
  title: "",
};

export default function Homepage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const notesArr = useSelector((state) => state.notes);
  const [textArea, setTextArea] = React.useState("");
  const { values, handleChange } = useForm(initialValues);

  useEffect(() => {
    console.log(typeof (notesArr.notes));
    console.log(notesArr.notes);
  });

  const handleTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNotes({ title: values.title, body: textArea }));
    setTextArea("");
    values.title = "";
  };

  const handleRemove = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <div>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={true}
        PaperProps={{
          style: {
            borderRadius: 4,
            minHeight: "85vh",
            maxHeight: "90vh",
            minWidth: "60%",
            maxWidth: "60%",
          },
        }}
      >
        <DialogTitle id="customized-dialog-title" style={{ padding: "0px" }}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={1}>
              {"G Notes"}
            </Paper>
          </Grid>
        </DialogTitle>

        <DialogContent style={{ padding: "1px 0px" }}>
          <Grid container style={{ height: "90%", flexWrap: "nowrap" }}>
            <Grid item xs={3} style={{ borderRight: "1px solid darkgrey" }}>
              {console.log("notesArr", notesArr.notes)}
              {notesArr.notes.lenght> 0 && notesArr.notes.map((m) => { console.log(m)
                return  (
                  <Paper variant="outlined" square style={{ padding: "5px" }}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography variant="h6">{m}</Typography>
                        <Typography variant="subtitle1">{m}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          onClick={() => handleRemove(m)}
                        >
                          <ClearIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Paper>
                );
              })}
            </Grid>

            <Box style={{ paddingLeft: "50px", maxWidth: "72%" }}>
              <Grid item xs={9} className={classes.grid}>
                <Controls.Form onSubmit={handleSubmit}>
                  <Button
                    size="small"
                    variant="outlined"
                    type="button"
                    style={{ marginLeft: "79%", marginTop: "10px" }}
                  >
                    <AddIcon />
                    {"add Notes"}
                  </Button>
                  <Typography style={{fontWeight:"600"}}>{"Title:"}</Typography>
                  <Controls.Input
                    type="text"
                    value={values.title}
                    name="title"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    autoComplete="true"
                  />
                  <Typography style={{fontWeight:"600"}}>{"Body:"}</Typography>
                  <textarea
                    value={textArea}
                    className={classes.communityDescription}
                    rows="6"
                    cols="70"
                    name="communityDescription"
                    // placeholder="body1"
                    onChange={handleTextArea}
                  ></textarea>
                  <span style={{ marginLeft: "89%" }}>
                    <Controls.Button label="Save" type="submit" size="small" />
                  </span>
                </Controls.Form>
              </Grid>
            </Box>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
