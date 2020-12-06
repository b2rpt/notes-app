import React from "react";
import { Dialog, Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import StepperComponent from './stepperComponent';
// import EditPane from './editComponent';
// import NavigationPane from './navigation';
// import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBox-root-19": {
      color: theme.palette.borderColor,
    },
  },
  dialogPaper: {
    width: "1000px",
    padding: 0,
    height: "90vh",
    overflow: "hidden",
    borderRadius: 2,
    margin: 0,
  },
  stepperContainer: {
    borderRight: `1px solid ${theme.palette.border}`,
    height: "100%",
    overflow: "auto",
  },
  gridContainer: {
    flexWrap: "nowrap",
    height: "90%",
  },
  mainContainer: {
    maxWidth: "80%",
    flexBasis: "80%",
    display: "flex",
    flexDirection: "column",
  },
  formStyle: {
    height: "100%",
  },
}));

const Notes = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      open={true}
      maxWidth={false}
      classes={{ paper: classes.dialogPaper }}
    >
      <Paper>G Notes</Paper>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={3} className={classes.stepperContainer}>
         
        </Grid>

        <Grid item xs={9} className={classes.mainContainer}>
        <Box className="top-margin">
            <input
              type="text"
              value=''
              className="communityInput"
              placeholder="title"
              variant="outlined"
              name="title"
            //   onChange={handleChange}
              maxLength="256"
            />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Notes;
