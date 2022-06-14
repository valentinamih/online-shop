import {RootReducerType} from "../store";

export const cartSelector = {
    cartItems: (store: RootReducerType) => {
        return store.cartReducer.cart
    }
}