import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  pageContainer: {
    width: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "700px",
  },
});

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <img
        className={classes.img}
        src="assets/404.png"
        alt="Page not found"
      ></img>
    </div>
  );
};

export default PageNotFound;
