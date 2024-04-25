import React from "react";

const Decrement = ({ count, setCount }) => {
  return (
    <button
      onClick={() => {
        setCount(--count);
      }}
    >
      DEC
    </button>
  );
};

export default Decrement;
