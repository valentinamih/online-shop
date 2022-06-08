import { RootReducerType } from "../store";

export const categoriesSelector = {
  categories: (store: RootReducerType) => {
    return store.categoriesReducer.categories;
  },
};
