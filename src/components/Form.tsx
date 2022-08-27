import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const OnFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([{ id: uuidv4(), title: input, completed: false }, ...todos]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form className="submit_form" onSubmit={OnFormSubmit}>
        <input
          type="text"
          placeholder="Add Task."
          className="task_input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="add_btn" type="submit">
          {editTodo ? "OK" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
