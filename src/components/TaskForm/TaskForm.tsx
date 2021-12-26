import React, { useState } from "react";

import "./TaskForm.scss";

type Props = {
  onSave: (text: string) => void;
  onClose: () => void;
};

export const TaskForm = ({ onSave, onClose }: Props) => {
  const [text, setText] = useState("");

  return (
    <div className="TaskForm">
      <textarea
        className="TaskForm__textarea"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div className="TaskForm__actions">
        <button onClick={onClose}>Cancel</button>
        <button onClick={() => onSave(text)}>Save</button>
      </div>
    </div>
  );
};
