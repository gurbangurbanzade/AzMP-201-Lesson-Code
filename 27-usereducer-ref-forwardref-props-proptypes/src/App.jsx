import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifeCycle from "./components/LifeCycle";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import Referance from "./components/Referance";
import Parent from "./components/Parent";
import Chil from "./components/Chil";

import TodoNew from "./components/TodoNew";

function App() {
  let [count, setCount] = useState(0);

  // console.log("app render olundu");
  let inp = useRef();
  let name = "qurban";
  let age = 20;

  return (
    <>
      <TodoNew />

      {/* <Parent>
        <Chil name={name} age={age} /> */}
      {/* <Chil />
        <Chil />
        <Chil />
        <Chil /> */}
      {/* </Parent> */}
      {/* <LifeCycle /> */}
      {/* <input type="text" ref={inp} /> */}
      {/* <Referance name="gurban" ref={inp} /> */}
      {/* <button
        onClick={() => {
          console.log(inp.current.value);
        }}
      >
        Click me
      </button> */}
      {/* <Table /> */}
    </>
  );
}

export default App;
