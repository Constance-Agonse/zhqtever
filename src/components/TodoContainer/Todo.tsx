import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { TaskForm } from "../TaskForm";
import { TodoItem } from "../TodoItem";
import { Task } from "./task";
import "./Todo.scss";

type Props = {
  tasks: Task[];
  onAddNewTask: (text: string) => void;
};

export const Todo = ({ tasks, onAddNewTask }: Props) => {
  const [isAddNewTaskFormDisplayed, setIsAddNewTaskFormDisplayed] =
    useState(false);

  const handleAddTask = (text: string) => {
    setIsAddNewTaskFormDisplayed(false);
    onAddNewTask(text);
  };

  return (
    <div className="Todo">
      {tasks.map((task) => (
        <TodoItem isDone={false} text={task.text} onDone={() => {}} />
      ))}
      {isAddNewTaskFormDisplayed ? (
        <TaskForm
          onClose={() => {
            setIsAddNewTaskFormDisplayed(false);
          }}
          onSave={handleAddTask}
        />
      ) : (
        <button
          onClick={() => {
            setIsAddNewTaskFormDisplayed(true);
          }}
        >
          <FiPlus /> Add new task
        </button>
      )}
    </div>
  );
};
