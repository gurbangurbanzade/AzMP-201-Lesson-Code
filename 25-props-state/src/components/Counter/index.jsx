import React from "react";
import "./style.css";
import Increment from "../Increment";
import Decrement from "../Decrement";
import Count from "../Count";

const Counter = ({ name, surname, count, setCount }) => {
  //   const { name } = props;
  // console.log("name", name);
  // console.log("counter render olundu");
  //   console.log(name);

  return (
    <div>
      <Decrement count={count} setCount={setCount} />
      <Count count={count} />
      <Increment count={count} setCount={setCount} />
    </div>
  );
};

export default Counter;
