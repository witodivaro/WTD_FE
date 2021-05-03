import Task from "../Task";

export interface TasksState {
  readonly tasks: Task[];
  readonly editingTask: number | null;
  readonly isAddingNewTask: boolean;
  readonly isLoading: boolean;
  readonly errors: object | null;
}

export interface createTaskRequestAction {
  type: string;
  payload: {
    task: Task;
  };
}

export interface updateTaskRequestAction {
  type: string;
  payload: {
    task: Partial<Task>;
    id: number;
  };
}
