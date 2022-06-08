import { instance } from "./api";
import { CategoryType } from "../types/types";

export const CategoryAPI = {
  getCategories: () => {
    return instance.get<Array<CategoryType>>("categories");
  },
};
