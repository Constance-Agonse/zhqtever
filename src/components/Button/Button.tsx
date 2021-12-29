import classNames from "classnames";
import React from "react";

import "./Button.scss";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick: () => void;
};

export const Button = ({
  text,
  variant = "primary",
  className,
  onClick,
}: Props) => {
  return (
    <button
      onClick={() => onClick()}
      className={classNames("Button", className, {
        "Button--secondary": variant === "secondary",
      })}
    >
      {text}
    </button>
  );
};
