import { SimpleAction } from "../../types/redux";
import { TasksState } from "../../types/redux/tasks";
import { ActionTypes } from "./actions";

const initialState: TasksState = {
  tasks: [],
  editingTask: null,
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

    default:
      return state;
  }
};
