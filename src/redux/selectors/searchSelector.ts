import {RootReducerType} from "../store"

export const searchSelector = {
  isProductsShowByList: (store: RootReducerType) => {
    return store.searchReducer.isProductsShowByList
  },
  productsFilter: (store: RootReducerType) => {
    return store.searchReducer.productsFilter
  }
}
