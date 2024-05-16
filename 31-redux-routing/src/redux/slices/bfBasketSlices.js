import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  name: "qurban",
  surname: "zada",
  basketCount: 0,
};

export const basketBfSlice = createSlice({
  name: "basketBf",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addBasketBf: (state, action) => {
      //   console.log(action.payload);
      const findElem = state.basket.find(
        (elem) => elem.id == action.payload.id
      );
      //

      if (findElem) {
        findElem.count += 1;
      } else {
        state.basket.push({ count: 1, ...action.payload });
      }
    },
    addBasketCount: (state) => {
      state.basketCount += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, addBasketCount, addBasketBf } =
  basketBfSlice.actions;

export default basketBfSlice.reducer;
