const TodoItem = ({ myKey, id, labelName }) => {
  return React.createElement("div", { className: "todo-item" }, [
    React.createElement("input", {
      type: "checkbox",
      key: myKey,
      id: id,
    }),
    React.createElement(
      "label",
      { key: `label-${myKey}`, htmlFor: id },
      labelName,
    ),
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
