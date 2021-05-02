const prefix = "@@tasks";

export const ActionTypes = {
  SET_EDITING_TASK: `${prefix}/SET_EDITING_TASK`,
};

export const setEditingTask = (taskId: number | null) => ({
  type: ActionTypes.SET_EDITING_TASK,
  payload: {
    id: taskId,
  },
});
