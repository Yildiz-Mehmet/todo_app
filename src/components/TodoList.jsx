import React from "react";
import TodoInput from "./TodoInput";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../redux/Action";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  return (
    <div className="TodoList">
      <h1>Todo App with React Redux</h1>
      <TodoInput />
      <ul>
        <TransitionGroup>
          {state.todos &&
            state.todos.map((todo) => {
              return (
                <CSSTransition key={todo.id} classNames={todo}>
                  <h2> {todo.task} </h2>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoList;
