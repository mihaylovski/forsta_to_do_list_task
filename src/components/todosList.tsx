import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <ul className="todosList">
        {todos.map((todo, i) => (
          <li
            className={todo.completed ? "todolist done" : "todolist not_done"}
            key={todo.id}
          >
            <span
              data-testid={`todo${i}`}
              className="task"
              onChange={(event) => event.preventDefault()}
            >
              {todo.title}
            </span>
            <div className="btns_container">
              <button
                className="btn_cmplt task_btn"
                onClick={() => handleComplete(todo)}
              >
                {todo.completed ? "Done" : "To do"}
              </button>
              <button
                className="btn_edit task_btn"
                onClick={() => handleEdit(todo)}
              >
                Edit
              </button>
              <button
                className="btn_del task_btn"
                onClick={() => handleDelete(todo)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default TodosList;
