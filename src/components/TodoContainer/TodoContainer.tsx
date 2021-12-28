import React, { useState } from "react";
import { Todo } from "./Todo";
import type { Task } from "./task";

export const TodoContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  console.log(tasks);
  return (
    <Todo
      onTaskEdit={(id, text) => {
        setTasks(
          tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                text,
              };
            }
            return task;
          })
        );
      }}
      onAddNewTask={(text) => {
        setTasks([
          ...tasks,
          { text, isDone: false, id: Date.now().toString() },
        ]);
      }}
      onTaskToggleDone={(id) => {
        setTasks(
          tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                isDone: !task.isDone,
              };
            }
            return task;
          })
        );
      }}
      tasks={tasks}
      onTaskDelete={(id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      }}
    />
  );
};
