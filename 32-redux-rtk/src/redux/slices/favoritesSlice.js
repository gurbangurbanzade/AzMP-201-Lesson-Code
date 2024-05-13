import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFav: (state, action) => {
      let elem = [...state.fav].find((elem) => elem.id == action.payload.id);
      if (elem) {
        state.fav = [...state.fav].filter(
          (elem) => elem.id != action.payload.id
        );
      } else {
        state.fav = [...state.fav, action.payload];
      }
    },
    delFav: (state, action) => {
      state.fav = [...state.fav].filter((elem) => elem.id != action.payload);
    },
  },
});

export const { addFav, delFav } = favSlice.actions;

export default favSlice.reducer;
