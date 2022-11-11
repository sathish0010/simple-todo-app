import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updataTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = () => {
    updataTodo(edit.id, edit.value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onsubmit={submitUpdate} />;
  }

  return todos.map((todo, i) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={i}>
      <div
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => {
            removeTodo(todo.id);
          }}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
        />
      </div>
    </div>
  ));
}

export default Todo;
