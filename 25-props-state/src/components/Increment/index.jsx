import React from "react";

const Increment = ({ count, setCount }) => {
  return (
    <button
      onClick={() => {
        setCount(++count);
      }}
    >
      INC
    </button>
  );
};

export default Increment;
