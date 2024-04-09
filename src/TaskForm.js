// TaskForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/actions";

export default function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addTask({ name: taskName, done: false }));
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
}
