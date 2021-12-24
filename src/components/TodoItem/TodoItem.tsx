import React from "react";
import classNames from "classnames";
import { FiCheck, FiEdit, FiTrash2 } from "react-icons/fi";

import './TodoItem.scss';

type Props = {
  text: string;
  onDone: () => void;
  isDone: boolean;
  // onDelete: () => void;
  // onUpdate: () => void;
};

export const TodoItem = ({ text, onDone, isDone }: Props) => {
  return (
    <div className={classNames("TodoItem", { "TodoItem--is-done": isDone })}>
      <div className="TodoItem__check">
        <FiCheck size={12} color="#3A98E2" />
      </div>
      <div className="TodoItem__text">{text}</div>
      <div className="TodoItem__actions">
        <FiEdit color="#4E4E4E" size={12} />
        <FiTrash2 color="#4E4E4E" size={12} />
      </div>
    </div>
  );
};
