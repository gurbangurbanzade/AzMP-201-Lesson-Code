import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      console.log(action.payload);
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
