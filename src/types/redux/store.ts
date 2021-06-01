import { AuthState } from "../../redux/auth/types";
import { TasksState } from "../../redux/tasks/types";
import { UserState } from "../../redux/user/types";

export interface State {
  tasks: TasksState;
  auth: AuthState;
  user: UserState;
}
