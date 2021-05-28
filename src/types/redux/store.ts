import { AuthState } from "../../redux/auth/types";
import { TasksState } from "../../redux/tasks/types";

export interface State {
  tasks: TasksState;
  auth: AuthState;
}
