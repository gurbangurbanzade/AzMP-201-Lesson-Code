import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "gurban",
  surname: "gurbanzada",
  arr: [],
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
