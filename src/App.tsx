import React, { useState } from "react";
import { Tabs } from "./components/Tabs";
import { TodoContainer } from "./components/TodoContainer";

function App() {
  const [tab, setTab] = useState<"todo" | "stats">("todo");

  return (
    <div className="App">
      <div className="App__content">
        <div className="App__content__tabs">
          <Tabs
            currentTab={tab}
            tabItems={[
              {
                name: "Tasks",
                onClick: () => {
                  setTab("todo");
                },
                key: "todo",
              },
              {
                name: "Stats",
                onClick: () => {
                  setTab("stats");
                },
                key: "stats",
              },
            ]}
          />
        </div>
        {tab === "todo" && <TodoContainer />}
        {tab === "stats" && <div>Stats will be here</div>}
      </div>
    </div>
  );
}

export default App;
