import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  categoriesReducer,
  productsReducer,
  searchReducer,
  cartReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppStateType = ReturnType<typeof setupStore>;
export type AppDispatch = AppStateType["dispatch"];

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
