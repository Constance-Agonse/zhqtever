import React, { useState } from "react";

import "./TaskForm.scss";

type Props = {
  onSave: (text: string) => void;
  onClose: () => void;
  initialText?: string;
};

export const TaskForm = ({ onSave, onClose, initialText }: Props) => {
  const [text, setText] = useState(initialText);

  return (
    <div className="TaskForm">
      <textarea
        className="TaskForm__textarea"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="TaskForm__actions">
        <button onClick={onClose}>Cancel</button>
        <button
          onClick={() => {
            if (text) {
              onSave(text);
            }
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
