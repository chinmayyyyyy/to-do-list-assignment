// App.js
import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  removeTask,
  updateTaskDone,
  renameTask,
} from "./redux/actions";

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => dispatch(addTask(task)));
  }, [dispatch]);

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one! 🙏";
    }
    if (percentage === 100) {
      return "Nice job for today! 🏝";
    }
    return "Keep it going 💪🏻";
  }

  return (
    <main>
      <h1>
        {numberComplete}/{numberTotal} Complete
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm />
      {tasks.map((task, index) => (
        <Task key={index} {...task} index={index} />
      ))}
    </main>
  );
}

export default App;
