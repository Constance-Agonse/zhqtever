import React, { useState } from "react";
import classNames from "classnames";
import { FiCheck, FiEdit, FiTrash2, FiMinus } from "react-icons/fi";
import { TaskForm } from "../TaskForm";

import "./TodoItem.scss";

type Props = {
  text: string;
  onToggleDone: (id: string) => void;
  isDone: boolean;
  id: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export const TodoItem = ({
  text,
  onToggleDone,
  isDone,
  id,
  onDelete,
  onEdit,
}: Props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  return isFormDisplayed ? (
    <TaskForm
      onSave={(text) => onEdit(id, text)}
      onClose={() => setIsFormDisplayed(false)}
      initialText={text}
    />
  ) : (
    <div className={classNames("TodoItem", { "TodoItem--is-done": isDone })}>
      <button
        onClick={() => {
          onToggleDone(id);
        }}
        className="TodoItem__check TodoItem__icon-button"
      >
        {isDone ? (
          <FiMinus size={20} color="#3A98E2" />
        ) : (
          <FiCheck size={20} color="#3A98E2" />
        )}
      </button>
      <div className="TodoItem__text">{text}</div>
      <div className="TodoItem__actions">
        <button
          className="TodoItem__icon-button TodoItem__icon-button--action"
          onClick={() => {
            setIsFormDisplayed(true);
          }}
        >
          <FiEdit color="#4E4E4E" size={16} />
        </button>
        <button
          className="TodoItem__icon-button TodoItem__icon-button--action"
          onClick={() => {
            onDelete(id);
          }}
        >
          <FiTrash2 color="#4E4E4E" size={16} />
        </button>
      </div>
    </div>
  );
};
