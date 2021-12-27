import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { TaskForm } from "../TaskForm";
import { TodoItem } from "../TodoItem";
import { Task } from "./task";
import "./Todo.scss";

type Props = {
  tasks: Task[];
  onAddNewTask: (text: string) => void;
  onTaskToggleDone: (id: string) => void;
  onTaskDelete: (id: string) => void;
};

export const Todo = ({ tasks, onAddNewTask, onTaskToggleDone, onTaskDelete }: Props) => {
  const [isAddNewTaskFormDisplayed, setIsAddNewTaskFormDisplayed] =
    useState(false);

  const handleAddTask = (text: string) => {
    setIsAddNewTaskFormDisplayed(false);
    onAddNewTask(text);
  };

  return (
    <div className="Todo">
      {tasks.map((task) => (
        <TodoItem
          onDelete={onTaskDelete}
          key={task.text}
          isDone={task.isDone}
          text={task.text}
          onToggleDone={onTaskToggleDone}
          id={task.id}
        />
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
