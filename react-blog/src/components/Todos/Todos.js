import React, { useEffect, useState } from "react";
import DisplayTodo from "../DisplayTodo/DisplayTodo";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div className="todos">
      <h3>Todos Lenght: {todos.length}</h3>
      {todos.map((todo) => console.log(todo))}
      <div className="todo-container">
        {todos.map((todo) => (
          <DisplayTodo id={todo.id} title={todo.title}></DisplayTodo>
        ))}
      </div>
    </div>
  );
};

export default Todos;
