import React from "react";
import Todo from "./Todo";

const Footer = ({ getData, todos, setTodos }) => {
  //   let a = 5;
  //   getData(a);
  //   console.log(todos);
  return (
    <ul>
      ToDos
      {todos.map((elem, i) => {
        return <Todo key={i} todo={elem} todos={todos} setTodos={setTodos} />;
      })}
    </ul>
  );
};

export default Footer;

//   <li key={i}>
//     {i + 1} - {elem}
//   </li>
