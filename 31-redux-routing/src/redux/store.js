import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import basketReducer from "./slices/basketSlice";
import favReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    fav: favReducer,
  },
});
