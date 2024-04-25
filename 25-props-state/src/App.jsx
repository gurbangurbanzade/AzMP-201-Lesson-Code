import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import ToDoAPP from "./components/ToDoAPP";

function App() {
  let [count, setCount] = useState(0);

  // const name = "Qurban";
  // const surname = "Qurbanzada";

  console.log("app render olundu");

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <ToDoAPP />
    </>
  );
}

export default App;
