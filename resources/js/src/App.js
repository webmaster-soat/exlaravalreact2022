import React, { useState } from "react";
import cx from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo } from "./redux/actions/actionTodo";

export default function App() {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    const visibilityFilter = useSelector((state) => state.visibilityFilter);

    // const getTodoList = useSelector((store) => store.todoList);
    // const getTodoById = useSelector((store, id) => ({
    //     ...store.todoMap[id],
    //     id,
    // }));

    // const allTodos = useSelector((store) =>
    //     getTodoList(store).map((id) => getTodoById(store, id))
    // );
    // const todos = visibilityFilter
    //     ? allTodos.filter((todo) => todo.completed)
    //     : allTodos.filter((todo) => !todo.completed);

    const todos = useSelector((store) => store.todoList);
    // ? allTodos.filter((todo) => todo.completed)
    // : allTodos.filter((todo) => !todo.completed);

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <div>
                <input onBlur={(e) => setInput(e.target.value)} />
                <button
                    className="add-todo"
                    onClick={() => dispatch(addTodo(input))}
                >
                    Add Todo
                </button>
            </div>
            <ul className="todo-list">
                {todos && todos.length
                    ? todos.map((todo, index) => {
                          return (
                              <li
                                  className="todo-item"
                                  onClick={() => dispatch(delTodo(todo.id))}
                              >
                                  {todo && todo.completed ? "👌" : "👋"}{" "}
                                  <span
                                      className={cx(
                                          "todo-item__text",
                                          todo &&
                                              todo.completed &&
                                              "todo-item__text--completed"
                                      )}
                                  >
                                      {todo.content}
                                  </span>
                              </li>
                          );
                      })
                    : "No todos, yay!"}
            </ul>
        </div>
    );
}
