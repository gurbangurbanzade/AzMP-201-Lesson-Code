import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Header = ({ todos, setTodos }) => {
  let [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          //   console.log(e.target.value);

          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          //   console.log("dsfghg");

          //   todos.push(inputValue);
          let obj = {
            id: uuidv4(),
            todo: inputValue,
          };
          //   console.log(obj);

          setTodos([...todos, obj]);
          //   console.log(todos);

          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
