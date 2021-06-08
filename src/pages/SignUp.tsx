import { Box, Button, fade, makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signUpRequest } from "../redux/auth/actions";

import { COLORS, ROUTES } from "../const";

const SignUpPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(signUpRequest(values));
    },
  });

  return (
    <Box className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box className={classes.formWrapper}>
          <TextField
            className={classes.input}
            type="email"
            name="email"
            label="Email"
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.input}
            type="text"
            name="username"
            label="Name"
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.input}
            name="password"
            type="password"
            label="Password"
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.input}
            name="passwordConfirm"
            type="password"
            label="Confirm password"
            onChange={handleChange}
            required
          />
          <Link to={ROUTES.LOGIN} className={classes.link}>
            Already have an account
          </Link>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button type="submit" className={classes.button}>
            Sign up
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

    minWidth: "300px",

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
    marginTop: "20px",
    padding: "5px",
    color: COLORS.WHITE,
    fontSize: "14px",
    textTransform: "none",
    textAlign: "left",
  },
});

export default SignUpPage;
