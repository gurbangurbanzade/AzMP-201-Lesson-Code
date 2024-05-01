import React, { useState, useReducer, useRef } from "react";
import { act } from "react";
import reducer from "../reducers/reducer";

const TodoNew = () => {
  const [state, dispatch] = useReducer(
    reducer,

    {
      value: "",
      data: [],
      count: 0,
      newValue: "",
    }
  );

  console.log(state);

  // const [value, setValue] = useState("");
  // const [data, setData] = useState([]);

  const decInput = useRef();

  return (
    <div>
      <h3>{state.count}</h3>
      <label htmlFor="">Size</label>
      <input type="text" ref={decInput} />
      <button
        onClick={() => {
          console.log(decInput.current.value);
          dispatch({
            type: "SetNewValue",
            newValue: decInput.current.value * 1,
          });
          // decInput.current.value = "";
        }}
      >
        Dec
      </button>
      <button
        onClick={() => {
          console.log(state.count);
          dispatch({
            type: "SetInc",
            count: state.count,
          });
        }}
      >
        Inc
      </button>
      <h1>ToDO</h1>
      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          // let obj = { value: e.target.value };
          dispatch({
            type: "SetValue",
            value: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "SetData",
            data: state.value,
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoNew;
