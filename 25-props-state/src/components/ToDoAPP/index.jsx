import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
const ToDoAPP = () => {
  function getData(data) {
    console.log(data);
  }
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div>
      ToDoAPP
      <Header todos={todos} setTodos={setTodos} />
      <Footer getData={getData} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDoAPP;
