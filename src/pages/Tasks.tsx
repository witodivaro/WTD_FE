import { makeStyles } from "@material-ui/styles";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Task from "../components/Task";

import {
  selectEditingTask,
  selectIsAddingNewTask,
  selectTasks,
} from "../redux/tasks/selectors";
import {
  fetchTasksRequest,
  setEditingTask as setEditingTaskAction,
  updateTaskRequest,
} from "../redux/tasks/actions";

import { default as TaskType } from "../types/Task";
import NewTask from "../components/NewTask";
import EditTask from "../components/EditTask";

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

  const tasks = useSelector(selectTasks);
  const editingTask = useSelector(selectEditingTask);
  const isAddingNewTask = useSelector(selectIsAddingNewTask);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const updateTask = (id: number, task: Partial<TaskType>) => {
    dispatch(updateTaskRequest(id, task));
  };

  const resetEditingTask = useCallback(() => {
    dispatch(setEditingTaskAction(null));
  }, [dispatch]);

  const renderedTasks = useMemo(
    () =>
      tasks.map((task: TaskType) => {
        const setEditCurrentTask = () => {
          dispatch(setEditingTaskAction(task.id));
        };

        if (editingTask === task.id) {
          const updateCurrentTask = updateTask.bind(null, task.id);

          return (
            <EditTask
              key={task.id}
              task={task}
              onCancel={resetEditingTask}
              onSave={updateCurrentTask}
            />
          );
        }

        return (
          <Task
            key={task.id}
            task={task}
            switchToEditMode={setEditCurrentTask}
          />
        );
      }),
    [editingTask, dispatch, resetEditingTask, tasks]
  );

  const renderedNewTask = isAddingNewTask ? <NewTask /> : null;

  return (
    <div className={classes.container}>
      {renderedNewTask}
      {renderedTasks}
    </div>
  );
};

export default TasksPage;
