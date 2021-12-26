import React, { useState } from "react";
import { Todo } from "./Todo";
import type { Task } from "./task";

export const TodoContainer = () => {
  const [tasks, setTask] = useState<Task[]>([]);

  return (
    <Todo
      onAddNewTask={(text) => {
        setTask([...tasks, { text }]);
      }}
      tasks={tasks}
    />
  );
};
