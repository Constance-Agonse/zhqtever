import React from "react";
import { TodoItem } from "../TodoItem";
import './Todo.scss';

export const Todo = () => {
  return <div className="Todo">
    <TodoItem isDone={false} text="askdjbskdjfb" onDone={() =>{}}/>
    <TodoItem isDone={true} text="askdjbsfdfdfkdjfb" onDone={() =>{}}/>
    <TodoItem isDone={false} text="askdjbsfdffffffkdjfb" onDone={() =>{}}/>
   

  </div>;
};
