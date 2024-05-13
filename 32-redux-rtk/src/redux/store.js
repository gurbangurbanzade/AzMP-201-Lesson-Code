import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import basketReducer from "./slices/basketSlice";
import favReducer from "./slices/favoritesSlice";
import { pokemonApi } from "../services/pokemon";
import { productsApi } from "../services/product";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    fav: favReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      productsApi.middleware
    ),
});

setupListeners(store.dispatch);
