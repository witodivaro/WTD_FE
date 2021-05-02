import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import CONSTS from "../const";

const { ROUTES, COLORS } = CONSTS;

const useStyles = makeStyles({
  header: {
    width: "100%",
  },
  wrapper: {
    padding: "20px",
    width: "1000px",
    margin: "10px auto",
    background: `linear-gradient(to left, ${COLORS.LIGHT_BLUE}, ${COLORS.BEIGE})`,
    borderRadius: "10px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
  },
  link: {
    textDecoration: "none",
    fontSize: "16px",
    textTransform: "uppercase",
    color: "white",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <Link className={classes.link} to={ROUTES.TASKS_LIST}>
          Tasks
        </Link>
      </div>
    </div>
  );
};

export default Header;
