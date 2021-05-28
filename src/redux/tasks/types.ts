const prefix = "@@tasks";

export const ActionTypes = {
  SET_EDITING_TASK: `${prefix}/SET_EDITING_TASK`,

  SET_IS_ADDING_NEW_TASK: `${prefix}/SET_IS_ADDING_NEW_TASK`,

  SET_FILTER: `${prefix}/SET_FILTER`,

  FETCH_TASKS_REQUEST: `${prefix}/FETCH_TASKS_REQUEST`,
  FETCH_TASKS_FAILURE: `${prefix}/FETCH_TASKS_FAILURE`,
  FETCH_TASKS_SUCCESS: `${prefix}/FETCH_TASKS_SUCCESS`,

  CREATE_TASK_REQUEST: `${prefix}/CREATE_TASK_REQUEST`,
  CREATE_TASK_FAILURE: `${prefix}/CREATE_TASK_FAILURE`,
  CREATE_TASK_SUCCESS: `${prefix}/CREATE_TASK_SUCCESS`,

  UPDATE_TASK_REQUEST: `${prefix}/UPDATE_TASK_REQUEST`,
  UPDATE_TASK_FAILURE: `${prefix}/UPDATE_TASK_FAILURE`,
  UPDATE_TASK_SUCCESS: `${prefix}/UPDATE_TASK_SUCCESS`,

  DELETE_TASK_REQUEST: `${prefix}/DELETE_TASK_REQUEST`,
  DELETE_TASK_FAILURE: `${prefix}/DELETE_TASK_FAILURE`,
  DELETE_TASK_SUCCESS: `${prefix}/DELETE_TASK_SUCCESS`,
  DELETE_TASK_LOCAL: `${prefix}/DELETE_TASK_LOCAL`,

  CHANGE_TASK_ARCHIVED_REQUEST: `${prefix}/CHANGE_TASK_ARCHIVED_REQUEST`,
  CHANGE_TASK_ARCHIVED_SUCCESS: `${prefix}/CHANGE_TASK_ARCHIVED_SUCCESS`,
  CHANGE_TASK_ARCHIVED_FAILURE: `${prefix}/CHANGE_TASK_ARCHIVED_FAILURE`,

  REQUEST: `${prefix}/REQUEST`,
};

export interface Task {
  id: number;
  type: string;
  dueDate: Date;
  color: string;
  text: string;
  isArchived: boolean;
}

export enum Filters {
  ALL = "all",
  EXPIRED = "expired",
  ARCHIVED = "archived",
}

export interface TasksState {
  readonly tasks: Task[];
  readonly editingTask: number | null;
  readonly isAddingNewTask: boolean;
  readonly isLoading: boolean;
  readonly errors: object | null;
  readonly filter: Filters;
}

export interface ICreateTaskRequest {
  type: string;
  payload: {
    task: Partial<Task>;
  };
}

export interface IUpdateTaskRequest {
  type: string;
  payload: {
    task: Partial<Task>;
    id: number;
  };
}

export interface IDeleteTaskRequest {
  type: string;
  payload: {
    id: number;
  };
}

export interface IChangeTaskArchived {
  type: string;
  payload: {
    id: number;
    isArchived: boolean;
  };
}
