import { RootReducerType } from "../store";

export const searchSelector = {
  filteredProducts: (store: RootReducerType) => {
    return store.searchReducer.filteredProducts;
  },
  currentCategory: (store: RootReducerType) => {
    return store.searchReducer.categoryCode;
  },
  isProductsShowByList: (store: RootReducerType) => {
    return store.searchReducer.isProductsShowByList;
  },
};
