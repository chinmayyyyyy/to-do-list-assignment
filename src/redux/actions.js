// redux/actions.js
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const removeTask = (index) => ({
  type: "REMOVE_TASK",
  payload: index,
});

export const updateTaskDone = (index, done) => ({
  type: "UPDATE_TASK_DONE",
  payload: { index, done },
});

export const renameTask = (index, newName) => ({
  type: "RENAME_TASK",
  payload: { index, newName },
});
