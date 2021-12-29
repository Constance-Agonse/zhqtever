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
  onTaskEdit: (id: string, text: string) => void;
};

export const Todo = ({
  tasks,
  onAddNewTask,
  onTaskToggleDone,
  onTaskDelete,
  onTaskEdit,
}: Props) => {
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
          onEdit={onTaskEdit}
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
          className="Todo__add-item"
        >
          <FiPlus size={20} color="#3A98E2" />
          <span>Add new task</span>
        </button>
      )}
    </div>
  );
};
