import { createSelector } from "reselect";

import { State } from "../../types/redux/store";

const selectTasksState = (state: State) => state.tasks;

export const selectEditingTask = createSelector(
  selectTasksState,
  (tasks) => tasks.editingTask
);

export const selectIsAddingNewTask = createSelector(
  selectTasksState,
  (tasks) => tasks.isAddingNewTask
);

export const selectTasks = createSelector(
  selectTasksState,
  (tasks) => tasks.tasks
);

export const selectIsLoading = createSelector(
  selectTasksState,
  (tasks) => tasks.isLoading
);
