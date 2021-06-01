import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
  fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";

import { Task as TaskType } from "../../redux/tasks/types";

import CONSTS from "../../const";
import { useCallback } from "react";
import { changeTaskArchivedRequest } from "../../redux/tasks/actions";

const { COLORS } = CONSTS;

const useStyles = makeStyles({
  card: {
    position: "relative",
    width: "300px",
    border: `3px solid ${COLORS.BEIGE}`,
    marginBottom: "20px",
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.3)",
    },
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  content: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    paddingTop: "0",
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  dueDate: {
    marginTop: "10px",
    fontSize: "12px",
  },
  input: {
    color: COLORS.BEIGE,
  },
  footer: {
    padding: "0 16px",
    paddingBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expiredText: {
    fontSize: "14px",
    marginTop: "8px",
    color: "white",
  },
  archiveButton: {
    top: 50,
    border: "1px solid black",
    backgroundColor: fade(COLORS.BEIGE, 0.4),
    width: "100%",
    transition: "top 0.3s ease",
  },
  archiveContainer: {
    position: "absolute",
    width: "100%",
    top: "50%",
    transform: "translateY(-50%) rotate(270deg)",
    display: "flex",
    justifyContent: "center",
    right: "-50%",

    "&:hover $archiveButton": {
      top: -15,
    },
  },
});

interface Props {
  task: TaskType;
  switchToEditMode: () => void;
}

const Task = ({ task, switchToEditMode }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id, color, dueDate, text, type, isArchived } = task;

  const isExpired = new Date(dueDate).getTime() < Date.now();

  const toggleArchived = useCallback(() => {
    dispatch(changeTaskArchivedRequest(id, !isArchived));
  }, [id, dispatch, isArchived]);

  return (
    <Card
      className={classes.card}
      style={{
        borderColor: color ? fade(color, 0.5) : "inherit",
        backgroundColor: isExpired ? fade(COLORS.RED, 0.3) : "white",
      }}
    >
      <CardActions>
        <Box
          paddingLeft="8px"
          color={isExpired ? "white" : COLORS.BEIGE}
          width="50%"
          display="flex"
        >
          <Typography>{type}</Typography>
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          <Button disableRipple={true} onClick={switchToEditMode}>
            Edit
          </Button>
        </Box>
      </CardActions>
      <CardContent className={classes.content}>
        <Box flexGrow="1">
          <Typography style={{ wordBreak: "break-all" }}>{text}</Typography>
        </Box>
      </CardContent>
      <Box className={classes.footer} flexShrink={0}>
        <Typography className={classes.dueDate}>
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(new Date(dueDate))}
        </Typography>
        {isExpired && (
          <Typography className={classes.expiredText}>Expired</Typography>
        )}
      </Box>
      <Box className={classes.archiveContainer}>
        <Button onClick={toggleArchived} className={classes.archiveButton}>
          {isArchived ? "Unarchive" : "Archive"}
        </Button>
      </Box>
    </Card>
  );
};

export default Task;
