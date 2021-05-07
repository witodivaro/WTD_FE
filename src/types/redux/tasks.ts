import Task, { Filters } from "../Task";

export interface TasksState {
  readonly tasks: Task[];
  readonly editingTask: number | null;
  readonly isAddingNewTask: boolean;
  readonly isLoading: boolean;
  readonly errors: object | null;
  readonly filter: Filters;
}

export interface createTaskRequestAction {
  type: string;
  payload: {
    task: Partial<Task>;
  };
}

export interface updateTaskRequestAction {
  type: string;
  payload: {
    task: Partial<Task>;
    id: number;
  };
}

export interface deleteTaskRequestAction {
  type: string;
  payload: {
    id: number;
  };
}
