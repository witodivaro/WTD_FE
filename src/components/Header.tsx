import { Button, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { setFilter, setIsAddingNewTask } from "../redux/tasks/actions";

import { COLORS, ROUTES } from "../const";

import { Filters } from "../redux/tasks/types";
import { selectFilter, selectIsAddingNewTask } from "../redux/tasks/selectors";
import { Link, useHistory, useLocation } from "react-router-dom";

import { selectIsAuthenticated } from "../redux/auth/selectors";
import { logout } from "../redux/auth/actions";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const currentFilter = useSelector(selectFilter);
  const isAddingNewTask = useSelector(selectIsAddingNewTask);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const createChangeFilterHandler = (filter: Filters) => () => {
    dispatch(setFilter(filter));

    if (isAddingNewTask) {
      dispatch(setIsAddingNewTask(false));
    }
  };

  const addNewTask = () => {
    dispatch(setFilter(Filters.ALL));
    dispatch(setIsAddingNewTask(true));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const createNavigationHandler = (path: string) => () => {
    history.push(path);
  };

  const renderedFilters =
    location.pathname === ROUTES.TASKS_LIST ? (
      <>
        <Button
          disabled={isAddingNewTask}
          className={classes.link}
          onClick={addNewTask}
        >
          + Add new task
        </Button>
        <Button
          disabled={currentFilter === Filters.ALL}
          className={classes.link}
          onClick={createChangeFilterHandler(Filters.ALL)}
        >
          All
        </Button>
        <Button
          disabled={currentFilter === Filters.EXPIRED}
          className={classes.link}
          onClick={createChangeFilterHandler(Filters.EXPIRED)}
        >
          Expired
        </Button>
        <Button
          disabled={currentFilter === Filters.ARCHIVED}
          className={classes.link}
          onClick={createChangeFilterHandler(Filters.ARCHIVED)}
        >
          Archived
        </Button>
      </>
    ) : null;

  const renderedAuthButton = isAuthenticated ? (
    <Button onClick={handleLogout} className={`${classes.link}`}>
      Logout
    </Button>
  ) : (
    <Button
      className={`${classes.link} ${classes.linkRight}`}
      onClick={createNavigationHandler(ROUTES.LOGIN)}
    >
      Login
    </Button>
  );

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        {isAuthenticated && (
          <Link className={classes.link} to={ROUTES.TASKS_LIST}>
            Tasks
          </Link>
        )}
        {renderedFilters}
        {isAuthenticated && (
          <Button
            className={`${classes.link} ${classes.linkRight}`}
            onClick={createNavigationHandler(ROUTES.SCORE)}
          >
            Score
          </Button>
        )}
        {renderedAuthButton}
      </div>
    </div>
  );
};

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

    display: "flex",
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
    width: "auto",

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

    "&.Mui-disabled": {
      color: "white",
      animation: "$fade 0.1s ease forwards",
    },

    "&:hover::before": {
      height: "1px",
    },
  },
  linkRight: {
    marginLeft: "auto",
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
  "@keyframes fade": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.5,
    },
  },
});

export default Header;
