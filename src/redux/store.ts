import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";


const rootReducer = combineReducers({
  categoriesReducer,
  productsReducer,
  searchReducer,
  cartReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: ['search/requestProducts/fulfilled'],
            },
          }),
    }
);
