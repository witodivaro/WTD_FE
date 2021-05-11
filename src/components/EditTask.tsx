import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  TextField,
  fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useFormik } from "formik";

import DatePicker from "react-datepicker";
import InputColor from "react-input-color";
import "react-datepicker/dist/react-datepicker.css";

import CONSTS from "../const";

import Task from "../types/Task";

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
  shrink: {
    animation: "$shrink 0.1s ease",
    animationFillMode: "forwards",
  },
  DatePicker: {
    width: "90px",
    textAlign: "center",
  },
  deleteButton: {
    padding: "2px 5px",
    backgroundColor: fade(COLORS.RED, 0.8),
    color: "white",
    fontSize: "12px",
    border: "1px solid transparent",
    "&:hover": {
      color: fade(COLORS.RED, 0.6),
      backgroundColor: "white",
      borderColor: fade(COLORS.RED, 0.6),
    },
  },
  saveButton: {
    padding: "2px 5px",
    backgroundColor: COLORS.LIGHT_BLUE,
    color: "white",
    fontSize: "16x",
    border: "1px solid transparent",
    "&:hover": {
      color: COLORS.LIGHT_BLUE,
      backgroundColor: "white",
      borderColor: fade(COLORS.LIGHT_BLUE, 0.6),
    },
  },
  "@keyframes shrink": {
    "0%": {
      height: "500px",
    },
    "100%": {
      height: "300px",
    },
  },
});

interface Props {
  task?: Partial<Task>;
  onSave: (task: Partial<Task>) => void;
  onCancel: () => void;
  onDelete: () => void;
  shrink?: boolean;
}

const EditTask = ({ task, onSave, onCancel, onDelete, shrink }: Props) => {
  const classes = useStyles();

  const { text, type, dueDate, color } = task || {};

  const initialValues = {
    text: text || "",
    type: type || "",
    dueDate: dueDate || new Date(),
    color: color || "",
  };

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const saveEdit = () => {
    onSave(values);
  };

  const cancelEdit = () => {
    onCancel();
  };

  return (
    <Card
      className={`${classes.card} ${shrink ? classes.shrink : ""}`}
      style={{
        zIndex: 1,
        height: shrink ? "unset" : "500px",
        borderColor: values.color,
      }}
    >
      <CardActions>
        <Box paddingLeft="8px" color={COLORS.BEIGE} width="50%" display="flex">
          <TextField
            className={classes.input}
            value={values.type}
            onChange={handleChange}
            name="type"
            margin="none"
            placeholder="Type"
          />
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          <Button onClick={cancelEdit}>Cancel</Button>
          <Button className={classes.saveButton} onClick={saveEdit}>
            Save
          </Button>
        </Box>
      </CardActions>
      <CardContent className={classes.content}>
        <Box flexGrow="1">
          <TextField
            className={classes.input}
            value={values.text}
            onChange={handleChange}
            name="text"
            multiline
            fullWidth
            placeholder="Enter your text.."
          />
        </Box>
      </CardContent>
      <Box className={classes.footer} flexShrink={0}>
        <DatePicker
          className={classes.DatePicker}
          selected={new Date(values.dueDate)}
          onChange={(dueDate) => setFieldValue("dueDate", dueDate)}
          showTimeSelect
        />
        <InputColor
          initialValue={values.color || "#000"}
          onChange={(color) => {
            const { hex } = color;
            setFieldValue("color", hex);
          }}
        />
        <Button onClick={onDelete} className={classes.deleteButton}>
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default EditTask;
