import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./components/Child";
import { UserContext } from "./context/usersContext";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Child /> */}
      <Login />
    </>
  );
}

export default App;
