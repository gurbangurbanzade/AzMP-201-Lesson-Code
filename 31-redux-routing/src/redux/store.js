import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import basketReducer from "./slices/basketSlice";
import favReducer from "./slices/favoritesSlice";
import basketBfReducer from "./slices/bfBasketSlices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    fav: favReducer,
    basketBf: basketBfReducer,
  },
});
