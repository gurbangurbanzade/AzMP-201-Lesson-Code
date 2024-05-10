// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   bskt: [],
//   name: "qurban",
// };

// export const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addBasket: (state, action) => {
//       // state.value.push(action.payload);
//       // console.log(state.value);
//       // console.log(state.bskt);
//       state.bskt.push(action.payload);
//       console.log(state.bskt);
//     },
//   },
// });

// export const { addBasket } = basketSlice.actions;

// export default basketSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bskt: [],
  count: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let elem = [...state.bskt].find((elem) => elem.id == action.payload.id);

      if (elem) {
        // elem.count++

        state.bskt.find((elem) => elem.id == action.payload.id).count += 1;
      } else {
        state.bskt = [...state.bskt, { ...action.payload, count: 1 }];
      }
    },
    getCount: (state, action) => {
      let sum = 0;
      [...state.bskt].forEach((elem) => {
        sum += elem.count;
      });
      state.count = sum;
    },
  },
});

export const { addBasket, getCount } = basketSlice.actions;

export default basketSlice.reducer;
