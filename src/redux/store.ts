import {combineReducers, configureStore} from "@reduxjs/toolkit"
import productsReducer from "./productsSlice"
import searchReducer from "./searchSlice"
import cartReducer from "./cartSlice"
import {apiSlice} from "../api/apiSlice"

const rootReducer = combineReducers({
    productsReducer,
    searchReducer,
    cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['search/requestProducts/fulfilled'],
                },
            }).concat(apiSlice.middleware)
    }
)
