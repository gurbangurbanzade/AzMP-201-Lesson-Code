import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const Child = () => {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  console.log(name);
  const dispatch = useDispatch();
  //   console.log(count);

  return (
    <div>
      Child
      <div>count-{count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch(decrement(3));
        }}
      >
        Dec-3
      </button>
    </div>
  );
};

export default Child;
