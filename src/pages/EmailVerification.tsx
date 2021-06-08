import { Box, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { COLORS } from "../const";

import { verificateEmailRequest } from "../redux/user/actions";
import {
  selectIsLoading,
  selectIsEmailVerificationSuccess,
} from "../redux/user/selectors";

import { IRouteParams } from "../types/RouteParams";

const EmailVerificationPage = () => {
  const { verificationHash } = useParams<IRouteParams["EmailVerification"]>();
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isEmailVerificationSuccess = useSelector(
    selectIsEmailVerificationSuccess
  );

  useEffect(() => {
    dispatch(verificateEmailRequest(verificationHash));
  }, [dispatch, verificationHash]);

  const renderedResult = isLoading
    ? "Loading..."
    : isEmailVerificationSuccess
    ? "Email is confirmed!"
    : "Email confirmation failed. Please, check your link.";

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.emailVerificationContainer}>{renderedResult}</Box>
    </Box>
  );
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",

    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "start",
  },
  emailVerificationContainer: {
    padding: "20px",
    width: "300px",
    border: "1px solid black",
    backgroundColor: COLORS.WHITE,
    textAlign: "center",
    borderRadius: "5px",
  },
});

export default EmailVerificationPage;
