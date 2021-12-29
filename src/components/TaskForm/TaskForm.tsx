import React, { useState } from "react";
import { Button } from "../Button";

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
        <Button onClick={onClose} text="Cancel" variant="secondary" />
        <Button
          onClick={() => {
            if (text) {
              onSave(text);
            }
          }}
          text="Save"
        />
      </div>
    </div>
  );
};
