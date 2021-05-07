import { SimpleAction } from "../../types/redux";
import { TasksState } from "../../types/redux/tasks";
import { ActionTypes } from "./actions";

const initialState: TasksState = {
  tasks: [],
  editingTask: null,
  isAddingNewTask: false,
  errors: null,
  isLoading: false,
};

export const tasksReducer = (
  state: TasksState = initialState,
  { payload, type }: SimpleAction
) => {
  switch (type) {
    case ActionTypes.SET_EDITING_TASK:
      return {
        ...state,
        editingTask: payload.id,
      };

    case ActionTypes.SET_IS_ADDING_NEW_TASK:
      return {
        ...state,
        isAddingNewTask: payload.isAddingNewTask,
      };

    case ActionTypes.UPDATE_TASK_SUCCESS:
      const { updatedTask } = payload;

      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((task) =>
          task.id !== updatedTask.id ? task : updatedTask
        ),
      };

    case ActionTypes.CREATE_TASK_SUCCESS:
      const { createdTask } = payload;

      return {
        ...state,
        isLoading: false,
        tasks: [createdTask, ...state.tasks],
      };

    case ActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: payload.tasks,
      };

    case ActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.DELETE_TASK_LOCAL:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };

    case ActionTypes.UPDATE_TASK_FAILURE:
    case ActionTypes.DELETE_TASK_FAILURE:
    case ActionTypes.CREATE_TASK_FAILURE:
    case ActionTypes.FETCH_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
      };

    case ActionTypes.REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
