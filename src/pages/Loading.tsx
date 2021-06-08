import { Box, makeStyles } from "@material-ui/core";

import { COLORS } from "../const";

const LoadingPage = () => {
  const classes = useStyles();

  return <Box className={classes.wrapper}></Box>;
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",

    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "start",

    background: `linear-gradient(to left, ${COLORS.BEIGE}, ${COLORS.LIGHT_BLUE})`,
  },
});

export default LoadingPage;
