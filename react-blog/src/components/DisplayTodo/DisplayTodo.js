import React from "react";
import "./DisplayTodo.css";
const DisplayTodo = (props) => {
  return (
    <div className="displayTodo">
      <h2>ID: {props.id}</h2>
      <h4>Title: {props.title}</h4>
    </div>
  );
};

export default DisplayTodo;
