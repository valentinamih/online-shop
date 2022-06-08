import { RootReducerType } from "../store";

export const productsSelector = {
  homePageProducts: (store: RootReducerType) => {
    return store.productsReducer.homePageProducts;
  },
  product: (store: RootReducerType) => {
    return store.productsReducer.product;
  },
};
