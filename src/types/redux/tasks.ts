import Task from "../Task";

export interface TasksState {
  readonly tasks: Task[];
  readonly editingTask: number | null;
}
