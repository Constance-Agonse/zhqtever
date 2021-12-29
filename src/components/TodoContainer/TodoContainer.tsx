import React from "react";
import { Todo } from "./Todo";
import type { Task } from "./task";

type Props = {
  tasks: Task[];
  onSetTask: (task: Task[]) => void;
};

export const TodoContainer = ({ tasks, onSetTask }: Props) => {
  return (
    <Todo
      onTaskEdit={(id, text) => {
        onSetTask(
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
        onSetTask([
          ...tasks,
          { text, isDone: false, id: Date.now().toString() },
        ]);
      }}
      onTaskToggleDone={(id) => {
        onSetTask(
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
        onSetTask(tasks.filter((task) => task.id !== id));
      }}
    />
  );
};
