import React from "react";
import "../App.css";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useSocialLogin from "../hooks/useSocialLogin";
import useForm from "../hooks/useForm";
import { Controls } from "./reusableComp/controls";
import HeaderNlogo from "./header";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="#">
        {"myNotes v1.0"}
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    Height: "80vh",
    width:'80vh'
  },
  paper: {
    margin: theme.spacing(4, 12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
  email: "",
  password: "",
};

export default function LogInForm() {
  const classes = useStyles();
  const { values, handleChange } = useForm(initialValues);
  const { icon, handleLoginClick } = useSocialLogin("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/mynotes");
  };

  return (
    <div className="App-header-Login">
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={5}
          sm={8}
          md={12}
          elevation={6}
          component={Paper}
          square
          style={{ borderRadius: "4px" }}
        >
          <div className={classes.paper}>
            <HeaderNlogo />

            <Controls.Form onSubmit={handleSubmit}>
              <Controls.Input
                type="email"
                value={values.email}
                name="email"
                margin="normal"
                label="Email"
                onChange={handleChange}
                autoComplete="email"
                autoFocus={true}
              />

              <Controls.Input
                type="password"
                value={values.password}
                name="password"
                margin="normal"
                label="Password"
                onChange={handleChange}
                autoComplete="password"
              />

              <Controls.Button label="SIGN IN" type="submit" fullWidth />

              {/* <Grid container>
                  <Grid item xs={5}>
                    <Typography variant="body2">
                      <NavLink
                        to="/forgotpassword"
                        style={{ textDecoration: "none" }}
                      >
                        Forgot password?
                      </NavLink>
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">
                      <NavLink to="/signup" style={{ textDecoration: "none" }}>
                        Don't have account? SignUp
                      </NavLink>
                    </Typography>
                  </Grid>
                </Grid> */}

              <Grid container display={"flex"}>
                <Grid item xs>
                  <Divider variant="middle" style={{ marginTop: "60px" }} />
                </Grid>
                <Typography style={{ marginTop: "50px" }}>Or</Typography>
                <Grid item xs>
                  <Divider variant="middle" style={{ marginTop: "60px" }} />
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs>
                  <Typography
                    component="h1"
                    variant="subtitle2"
                    style={{ marginTop: "15px" }}
                  >
                    Continue with social media
                  </Typography>
                  <div>
                    {icon.map((m, index) => (
                      <IconButton
                        aria-label="icon"
                        key={m.id}
                        onClick={() => handleLoginClick(m.id)}
                      >
                        {m.icon}
                      </IconButton>
                    ))}
                  </div>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Controls.Form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
