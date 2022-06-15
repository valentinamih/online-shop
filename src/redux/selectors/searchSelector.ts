import {RootReducerType, store} from "../store";

export const searchSelector = {
  filteredProducts: (store: RootReducerType) => {
    return store.searchReducer.filteredProducts;
  },
  totalProductsCount: (store: RootReducerType) => {
    return store.searchReducer.totalProductsCount
  },
  pageSize: (store: RootReducerType) => {
    return store.searchReducer.pageSize
  },
  currentPage: (store: RootReducerType) => {
    return store.searchReducer.pageNumber
  },
  currentCategory: (store: RootReducerType) => {
    return store.searchReducer.categoryCode;
  },
  isProductsShowByList: (store: RootReducerType) => {
    return store.searchReducer.isProductsShowByList;
  },
};
