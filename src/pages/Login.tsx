import { Box, Button, fade, makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CONSTS from "../const";
import { loginRequest } from "../redux/auth/actions";

const { COLORS, ROUTES } = CONSTS;

const LoginPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialValues = {
    username: "",
    password: "",
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(loginRequest(values));
    },
  });

  return (
    <Box className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box className={classes.formWrapper}>
          <TextField
            className={classes.input}
            type="text"
            name="username"
            label="Name"
            onChange={handleChange}
          />
          <TextField
            className={classes.input}
            name="password"
            type="password"
            label="Password"
            onChange={handleChange}
          />
          <Link to={ROUTES.SIGN_UP} className={classes.link}>
            I don't have an account
          </Link>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button type="submit" className={classes.button}>
            Log in
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",

    justifyContent: "center",
    alignItems: "start",
  },

  input: {
    marginBottom: "10px",

    color: COLORS.WHITE,

    "& label": {
      padding: "0 5px",
      color: COLORS.WHITE,

      "&.Mui-focused": {
        color: fade(COLORS.WHITE, 0.8),
      },
    },

    "& div": {
      padding: "0 5px",

      "&::before": {
        borderBottomColor: "transparent",
      },

      "&::after": {
        borderBottomColor: COLORS.LIGHT_BLUE,
      },
    },

    "& div input": {
      color: COLORS.WHITE,
    },
  },
  form: {
    marginTop: "20px",
  },
  formWrapper: {
    position: "relative",

    padding: "20px 10px",

    display: "flex",
    flexDirection: "column",

    "&::before": {
      content: "''",
      zIndex: -1,
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,

      width: "100%",
      height: "100%",

      background: `linear-gradient(to left, ${COLORS.BEIGE}, ${COLORS.LIGHT_BLUE})`,
      boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.5)",
      opacity: 0.5,
      borderRadius: "20px",
    },
  },
  buttonContainer: {
    marginTop: "10px",

    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "10px",
    color: COLORS.WHITE,
    borderRadius: "10px",
  },
  link: {
    padding: "5px",
    color: COLORS.WHITE,
    fontSize: "14px",
    textTransform: "none",
    textAlign: "left",
  },
});

export default LoginPage;
