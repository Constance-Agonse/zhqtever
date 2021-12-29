import classNames from "classnames";
import React from "react";

import './Tabs.scss';

type Props = {
  tabItems: { name: string; onClick: (name: string) => void; key: string }[];
  currentTab: string;
};

export const Tabs = ({ tabItems, currentTab }: Props) => {
  return (
    <div className="Tabs">
      {tabItems.map((tabItem) => (
        <button
          onClick={() => tabItem.onClick(tabItem.name)}
          className={classNames("Tabs__item", {
            "Tabs__item--is-active": tabItem.key === currentTab,
          })}
        >
          {tabItem.name}
        </button>
      ))}
    </div>
  );
};
