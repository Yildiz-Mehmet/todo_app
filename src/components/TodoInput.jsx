import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = () => {
  const [task, setTask] = useState();

  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        id="task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
