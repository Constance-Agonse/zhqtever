import React from "react";
import { PieChart, Pie, Cell } from "recharts";

import "./Stats.scss";

type Props = {
  doneTasksAmount: number;
  undoneTasksAmount: number;
};

export const Stats = ({ doneTasksAmount, undoneTasksAmount }: Props) => {
  const data = [
    { name: "Done tasks", value: doneTasksAmount },
    { name: "Undone tasks", value: undoneTasksAmount },
  ];

  const COLORS = ["#3A98E2", "#F2B428"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: any;
    cy: any;
    midAngle: any;
    innerRadius: any;
    outerRadius: any;
    percent: any;
    index: any;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const text = index === 0 ? 'Done' : 'Undone'
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${text} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="Stats">
      <div className="Stats__legend">
        Done: {doneTasksAmount}, Undone: {undoneTasksAmount}
      </div>
      <PieChart width={440} height={440}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
