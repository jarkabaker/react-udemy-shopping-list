import React from "react";

export const TodoListItem = (props) => {
  console.log(props);
  return (
    <div>
      <input type="checkbox" checked={props.completed} disabled={true} />
      <span>{props.title} </span>
      <button
        onClick={() => {
          props.deleteTodoByIndex(props.index);
        }}
      >
        Delete Todo
      </button>
    </div>
  );
};
