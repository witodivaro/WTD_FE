import {
  ActionTypes,
  IChangeTaskArchived,
  ICreateTaskRequest,
  IDeleteTaskRequest,
  IUpdateTaskRequest,
} from "./types";
import { Task, Filters } from "./types";

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

export const setFilter = (filter: Filters) => ({
  type: ActionTypes.SET_FILTER,
  payload: {
    filter,
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

export const createTaskRequest = (task: Partial<Task>): ICreateTaskRequest => ({
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

export const deleteTaskLocal = (id: number) => ({
  type: ActionTypes.DELETE_TASK_LOCAL,
  payload: { id },
});

export const deleteTaskRequest = (id: number): IDeleteTaskRequest => ({
  type: ActionTypes.DELETE_TASK_REQUEST,
  payload: { id },
});

export const deleteTaskSuccess = (id: number) => ({
  type: ActionTypes.DELETE_TASK_SUCCESS,
  payload: { id },
});

export const deleteTaskFailure = (errors: any) => ({
  type: ActionTypes.DELETE_TASK_FAILURE,
  payload: { errors },
});

export const updateTaskRequest = (
  id: number,
  task: Partial<Task>
): IUpdateTaskRequest => ({
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

export const changeTaskArchivedRequest = (
  id: number,
  isArchived: boolean
): IChangeTaskArchived => ({
  type: ActionTypes.CHANGE_TASK_ARCHIVED_REQUEST,
  payload: { id, isArchived },
});

export const changeTaskArchivedSuccess = (updatedTask: Partial<Task>) => ({
  type: ActionTypes.CHANGE_TASK_ARCHIVED_SUCCESS,
  payload: { updatedTask },
});

export const changeTaskArchivedFailure = (errors: any) => ({
  type: ActionTypes.CHANGE_TASK_ARCHIVED_FAILURE,
  payload: { errors },
});

export const request = () => ({
  type: ActionTypes.REQUEST,
});
