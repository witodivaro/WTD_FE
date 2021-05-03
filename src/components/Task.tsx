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

import "react-datepicker/dist/react-datepicker.css";

import TaskType from "../types/Task";

import CONSTS from "../const";

const { COLORS } = CONSTS;

const useStyles = makeStyles({
  card: {
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
    backgroundColor: "white",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  date: {
    marginTop: "10px",
    fontSize: "12px",
  },
  input: {
    color: COLORS.BEIGE,
  },
  footer: {
    padding: "0 16px",
    paddingBottom: "16px",
  },
});

interface Props {
  task: Partial<TaskType>;
  switchToEditMode: () => void;
}

const Task = ({ task, switchToEditMode }: Props) => {
  const classes = useStyles();

  const { color, date, text, type } = task;

  return (
    <Card
      className={classes.card}
      style={{
        borderColor: color ? fade(color, 0.5) : "inherit",
      }}
    >
      <CardActions>
        <Box paddingLeft="8px" color={COLORS.BEIGE} width="50%" display="flex">
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
          <Typography>{text}</Typography>
        </Box>
      </CardContent>
      <Box className={classes.footer} flexShrink={0}>
        <Typography className={classes.date}>
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(date)}
        </Typography>
      </Box>
    </Card>
  );
};

export default Task;
