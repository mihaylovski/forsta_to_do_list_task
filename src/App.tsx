import React, { useState } from "react";
import Form from "./components/Form";
import TodosList from "./components/todosList";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "Buy milk", completed: true },
    { id: uuidv4(), title: "Buy bread", completed: false },
    { id: uuidv4(), title: "Buy pankakes with jam", done: false }
  ]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="todosListApp">
      <div className="forsta-logo" />
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}
