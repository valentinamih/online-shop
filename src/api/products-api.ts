import { instance } from "./api";
import { ProductType } from "../types/types";

export const ProductAPI = {
  getProduct: (productId: number) => {
    return instance.get<ProductType>(`/products/${productId}`);
  },
  filterProducts: (
    categoryCode: string | null,
    priceFrom = 0,
    priceTo = Infinity,
    productName?: string | null,
    pageNumber = 0,
    pageSize = 10
  ) => {
    return instance.post("/products/filter", {
      categoryCode,
      pageNumber,
      pageSize,
      priceFrom,
      priceTo,
      productName,
    });
  },
};
