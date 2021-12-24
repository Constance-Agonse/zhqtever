import React from "react";

type Props = {
  tabItems: { name: string; onClick: (name: string) => void }[];
};

export const Tabs = ({ tabItems }: Props) => {
  return (
    <div className="Tabs">
      {tabItems.map((tabItem) => (
        <button
          onClick={() => tabItem.onClick(tabItem.name)}
          className="Tabs__item"
        >
          {tabItem.name}
        </button>
      ))}
    </div>
  );
};