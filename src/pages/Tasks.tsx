import { makeStyles } from "@material-ui/styles";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Task from "../components/Task/Task";
import NewTask from "../components/Task/NewTask";
import EditTask from "../components/Task/EditTask";

import {
  selectEditingTask,
  selectFilteredTasks,
  selectIsAddingNewTask,
  selectIsLoading,
} from "../redux/tasks/selectors";
import {
  deleteTaskRequest,
  fetchTasksRequest,
  setEditingTask as setEditingTaskAction,
  updateTaskRequest,
} from "../redux/tasks/actions";

import { Task as TaskType } from "../redux/tasks/types";

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

  const tasks = useSelector(selectFilteredTasks);
  const editingTask = useSelector(selectEditingTask);
  const isAddingNewTask = useSelector(selectIsAddingNewTask);
  const isLoading = useSelector(selectIsLoading);
  const [isLoadInitiator, setIsLoadInitiator] = useState(false);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const updateTask = useCallback(
    (id: number, task: Partial<TaskType>) => {
      dispatch(updateTaskRequest(id, task));
      setIsLoadInitiator(true);
    },
    [dispatch]
  );

  const deleteTask = useCallback(
    (id: number) => {
      dispatch(deleteTaskRequest(id));
      setIsLoadInitiator(true);
    },
    [dispatch]
  );

  const resetEditingTask = useCallback(() => {
    dispatch(setEditingTaskAction(null));
    setIsLoadInitiator(true);
  }, [dispatch]);

  useEffect(() => {
    if (isLoadInitiator && !isLoading) {
      setIsLoadInitiator(false);
      resetEditingTask();
    }
  }, [isLoading, setIsLoadInitiator, isLoadInitiator, resetEditingTask]);

  const renderedTasks = useMemo(
    () =>
      tasks.map((task: TaskType) => {
        const setEditCurrentTask = () => {
          dispatch(setEditingTaskAction(task.id));
        };

        if (editingTask === task.id) {
          const updateCurrentTask = updateTask.bind(null, task.id);
          const deleteCurrentTask = deleteTask.bind(null, task.id);

          return (
            <EditTask
              key={task.id}
              task={task}
              onCancel={resetEditingTask}
              onSave={updateCurrentTask}
              onDelete={deleteCurrentTask}
              shrink={isLoading}
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
    [
      editingTask,
      updateTask,
      dispatch,
      resetEditingTask,
      tasks,
      isLoading,
      deleteTask,
    ]
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
