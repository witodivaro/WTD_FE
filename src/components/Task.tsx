import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
  fade,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useFormik } from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { default as TaskType } from "../types/Task";

import CONSTS from "../const";
import { useEffect } from "react";

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
  id?: number;
  text?: string;
  type?: string;
  date?: Date;
  color?: string;
  isEditing: boolean;
  setEdit: (edit: boolean) => void;
  onSave: (task: Partial<TaskType>) => void;
}

const Task = ({
  text,
  type,
  date,
  color,
  isEditing,
  setEdit,
  onSave,
}: Props) => {
  const classes = useStyles();

  const initialValues = {
    text: text || "",
    type: type || "",
    date: date || new Date(),
    color: color || "",
  };

  const { values, handleChange, setFieldValue, resetForm } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (!isEditing) {
      resetForm();
    }
  }, [isEditing]);

  const switchToEditMode = () => {
    setEdit(true);
  };

  const saveEdit = () => {
    onSave(values);
  };

  const cancelEdit = () => {
    resetForm();
    setEdit(false);
  };

  const renderedAction = isEditing ? (
    <>
      <Button disableRipple={true} onClick={cancelEdit}>
        Cancel
      </Button>
      <Button onClick={saveEdit}>Save</Button>
    </>
  ) : (
    <Button disableRipple={true} onClick={switchToEditMode}>
      Edit
    </Button>
  );

  const renderedType = isEditing ? (
    <TextField
      className={classes.input}
      value={values.type}
      onChange={handleChange}
      name="type"
      margin="none"
      placeholder="Type"
    />
  ) : (
    <Typography>{values.type}</Typography>
  );

  const renderedText = isEditing ? (
    <TextField
      className={classes.input}
      value={values.text}
      onChange={handleChange}
      name="text"
      multiline
      fullWidth
      placeholder="Enter your text.."
    />
  ) : (
    <Typography>{values.text}</Typography>
  );

  const renderedDate = isEditing ? (
    <DatePicker
      selected={values.date}
      onChange={(date) => setFieldValue("date", date)}
      showTimeSelect
    />
  ) : (
    <Typography className={classes.date}>
      {new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(values.date)}
    </Typography>
  );

  return (
    <Card
      className={classes.card}
      style={{
        ...(isEditing
          ? {
              zIndex: 1,
              height: "500px",
            }
          : {}),
        ...{
          borderColor: color ? fade(color, 0.5) : "inherit",
        },
      }}
    >
      <CardActions>
        <Box paddingLeft="8px" color={COLORS.BEIGE} width="50%" display="flex">
          {renderedType}
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          {renderedAction}
        </Box>
      </CardActions>
      <CardContent className={classes.content}>
        <Box flexGrow="1">{renderedText}</Box>
      </CardContent>
      <Box className={classes.footer} flexShrink={0}>
        {renderedDate}
      </Box>
    </Card>
  );
};

export default Task;
