import React from "react";
import { createRoot } from "react-dom/client";
import TodoItem from "./Todoitem";

const App = () => {
  return React.createElement(
    "div",
    { id: "my-todo-app", className: "todo-app" },
    [
      React.createElement("h1", { key: "title" }, "Todo App"),
      React.createElement(TodoItem, {
        myKey: "todo-item1",
        id: "my-todo-checkbox",
        labelName: "My first todo",
      }),
      React.createElement(TodoItem, {
        myKey: "todo-item2",
        id: "my-todo-checkbox1",
        labelName: "My second todo",
      }),
      React.createElement(TodoItem, {
        myKey: "todo-item3",
        id: "my-todo-checkbox2",
        labelName: "My third todo",
      }),
    ],
  );
};
createRoot(document.getElementById("root")).render(React.createElement(App));
