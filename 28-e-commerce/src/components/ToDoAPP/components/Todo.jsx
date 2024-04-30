import React, { useEffect } from "react";

const Todo = ({ todo, todos, setTodos }) => {
  useEffect(() => {
    return () => {
      console.log("silindi");
    };
  }, []);

  return (
    <li>
      {todo.todo} -{" "}
      <button
        onClick={() => {
          console.log("asdfsgg");
          //   console.log(todo.id);
          //   console.log(todos);
          let arr = todos.filter((elem) => elem.id != todo.id);
          //   console.log(arr);
          setTodos(arr);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
