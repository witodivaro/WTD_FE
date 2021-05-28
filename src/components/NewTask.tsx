import { useDispatch, useSelector } from "react-redux";

import { Task as TaskType } from "../redux/tasks/types";

import { createTaskRequest, setIsAddingNewTask } from "../redux/tasks/actions";

import EditTask from "./EditTask";

import { selectIsLoading } from "../redux/tasks/selectors";
import { useEffect, useState } from "react";

const NewTask = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isSaving && !isLoading) {
      setIsSaving(false);
      dispatch(setIsAddingNewTask(false));
    }
  }, [dispatch, isSaving, isLoading]);

  const cancelAddingNewTask = () => {
    dispatch(setIsAddingNewTask(false));
  };

  const handleSave = (task: Partial<TaskType>) => {
    dispatch(createTaskRequest(task));
    setIsSaving(true);
  };

  return (
    <EditTask
      onDelete={cancelAddingNewTask}
      onCancel={cancelAddingNewTask}
      onSave={handleSave}
      shrink={isSaving}
    />
  );
};

export default NewTask;
