import { Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setIsAddingNewTask } from "../redux/tasks/actions";

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
    position: "relative",

    padding: 0,
    marginRight: 15,

    fontSize: "16px",
    textTransform: "uppercase",
    lineHeight: 1,
    textDecoration: "none",
    color: "white",

    "&::after, &::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,

      height: "0",
      width: "100%",
      backgroundColor: "white",
    },

    "&:hover::after": {
      animation: `$slide 0.2s ease`,
    },

    "&:hover::before": {
      height: "1px",
    },
  },
  "@keyframes slide": {
    "0%": {
      top: 0,
      height: 0,
      opacity: 1,
    },
    "50%": {
      top: "50%",
      height: "50%",
    },
    "100%": {
      top: "100%",
      height: "0",
      opacity: 0.8,
    },
  },
});

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const addNewTask = () => {
    dispatch(setIsAddingNewTask(true));
  };

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <Button className={classes.link} onClick={addNewTask}>
          + Add new task
        </Button>
        <Link className={classes.link} to={ROUTES.TASKS_LIST}>
          Tasks
        </Link>
      </div>
    </div>
  );
};

export default Header;
