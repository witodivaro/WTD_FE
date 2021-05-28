import { createSelector } from "reselect";

import { State } from "../../types/redux/store";
import { Filters } from "./types";
import { isExpired } from "../../utils/utils";

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

export const selectFilter = createSelector(
  selectTasksState,
  (tasks) => tasks.filter
);

export const selectFilteredTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) => {
    switch (filter) {
      case Filters.ALL:
        return tasks.filter((task) => !task.isArchived);

      case Filters.EXPIRED:
        return tasks.filter((task) => isExpired(task.dueDate));

      case Filters.ARCHIVED:
        return tasks.filter((task) => task.isArchived);

      default:
        return tasks;
    }
  }
);
