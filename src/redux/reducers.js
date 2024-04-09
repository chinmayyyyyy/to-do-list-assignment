// redux/reducers.js
import { combineReducers } from "redux";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function tasks(state = initialTasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task, index) => index !== action.payload);
    case "UPDATE_TASK_DONE":
      return state.map((task, index) =>
        index === action.payload.index
          ? { ...task, done: action.payload.done }
          : task
      );
    case "RENAME_TASK":
      return state.map((task, index) =>
        index === action.payload.index
          ? { ...task, name: action.payload.newName }
          : task
      );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tasks,
});

export default rootReducer;
