import { makeStyles } from "@material-ui/styles";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Task from "../components/Task";

import mockTasks from "../mocks/tasks";
import { selectEditingTask } from "../redux/tasks/selectors";
import { setEditingTask as setEditingTaskAction } from "../redux/tasks/actions";

import { default as TaskType } from "../types/Task";

const useStyles = makeStyles({
  container: {
    padding: "20px 0",
    width: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridAutoRows: "300px",
    justifyContent: "space-between",
  },
});

const TasksPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const editingTask = useSelector(selectEditingTask);

  const saveTask = (task: Partial<TaskType>) => {};

  const setEditingTask = (id: number | null) => {
    dispatch(setEditingTaskAction(id));
  };

  const renderedTasks = useMemo(
    () =>
      mockTasks.map((task: TaskType) => {
        const setEditCurrentTask = (isEditing: boolean) => {
          if (isEditing) {
            setEditingTask(task.id);
          } else {
            setEditingTask(null);
          }
        };

        return (
          <Task
            isEditing={editingTask === task.id}
            onSave={saveTask}
            setEdit={setEditCurrentTask}
            key={task.id}
            {...task}
          />
        );
      }),
    [editingTask]
  );

  return <div className={classes.container}>{renderedTasks}</div>;
};

export default TasksPage;
