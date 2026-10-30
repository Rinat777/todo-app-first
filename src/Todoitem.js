import React from "react";
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
export default TodoItem;
