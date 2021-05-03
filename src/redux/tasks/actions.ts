import { updateTaskRequestAction } from "../../types/redux/tasks";
import Task from "../../types/Task";

const prefix = "@@tasks";

export const ActionTypes = {
  SET_EDITING_TASK: `${prefix}/SET_EDITING_TASK`,

  SET_IS_ADDING_NEW_TASK: `${prefix}/SET_IS_ADDING_NEW_TASK`,

  FETCH_TASKS_REQUEST: `${prefix}/FETCH_TASKS_REQUEST`,
  FETCH_TASKS_FAILURE: `${prefix}/FETCH_TASKS_FAILURE`,
  FETCH_TASKS_SUCCESS: `${prefix}/FETCH_TASKS_SUCCESS`,

  CREATE_TASK_REQUEST: `${prefix}/CREATE_TASK_REQUEST`,
  CREATE_TASK_FAILURE: `${prefix}/CREATE_TASK_FAILURE`,
  CREATE_TASK_SUCCESS: `${prefix}/CREATE_TASK_SUCCESS`,

  UPDATE_TASK_REQUEST: `${prefix}/UPDATE_TASK_REQUEST`,
  UPDATE_TASK_FAILURE: `${prefix}/UPDATE_TASK_FAILURE`,
  UPDATE_TASK_SUCCESS: `${prefix}/UPDATE_TASK_SUCCESS`,

  REQUEST: `${prefix}/REQUEST`,
};

export const setEditingTask = (taskId: number | null) => ({
  type: ActionTypes.SET_EDITING_TASK,
  payload: {
    id: taskId,
  },
});

export const setIsAddingNewTask = (isAddingNewTask: boolean) => ({
  type: ActionTypes.SET_IS_ADDING_NEW_TASK,
  payload: {
    isAddingNewTask,
  },
});

export const fetchTasksRequest = () => ({
  type: ActionTypes.FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks: Task[]) => ({
  type: ActionTypes.FETCH_TASKS_SUCCESS,
  payload: { tasks },
});

export const fetchTasksFailure = (errors: any) => ({
  type: ActionTypes.FETCH_TASKS_FAILURE,
  payload: { errors },
});

export const createTaskRequest = (task: Partial<Task>) => ({
  type: ActionTypes.CREATE_TASK_REQUEST,
  payload: { task },
});

export const createTaskSuccess = (createdTask: Partial<Task>) => ({
  type: ActionTypes.CREATE_TASK_SUCCESS,
  payload: { createdTask },
});

export const createTaskFailure = (errors: any) => ({
  type: ActionTypes.CREATE_TASK_FAILURE,
  payload: { errors },
});

export const updateTaskRequest = (
  id: number,
  task: Partial<Task>
): updateTaskRequestAction => ({
  type: ActionTypes.UPDATE_TASK_REQUEST,
  payload: { id, task },
});

export const updateTaskSuccess = (updatedTask: Partial<Task>) => ({
  type: ActionTypes.UPDATE_TASK_SUCCESS,
  payload: { updatedTask },
});

export const updateTaskFailure = (errors: any) => ({
  type: ActionTypes.UPDATE_TASK_FAILURE,
  payload: { errors },
});

export const request = () => ({
  type: ActionTypes.REQUEST,
});
