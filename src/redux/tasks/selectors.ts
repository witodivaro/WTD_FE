import { createSelector } from "reselect";

import { State } from "../../types/redux/store";

const selectTasksState = (state: State) => state.tasks;

export const selectEditingTask = createSelector(
  selectTasksState,
  (tasks) => tasks.editingTask
);
