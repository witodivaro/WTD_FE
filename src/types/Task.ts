interface Task {
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

export default Task;
