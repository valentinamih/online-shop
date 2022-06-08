import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/types";

type InitialStateType = {
  isSubscribed: boolean;
  cart: Array<CartItem>;
};

let initialState: InitialStateType = {
  isSubscribed: false,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setSubscribe(state: InitialStateType) {
      state.isSubscribed = true;
    },
    addItemToCard(state: InitialStateType, action) {
      let isAdded = false;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.id === action.payload.product.id) {
          state.cart[i].count = action.payload.count;
          isAdded = true;
        }
      }
      if (!isAdded) {
        state.cart.push(action.payload);
      }
    },
  },
});

export default cartSlice.reducer;
export const { setSubscribe, addItemToCard } = cartSlice.actions;
