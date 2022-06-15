import {instance} from "./api";
import {ProductType} from "../types/types";

export const baseImagesUrl = 'https://coffee-shop-demo-v1.herokuapp.com/assets/img/'
export const ProductAPI = {
    getProduct: (productId: number) => {
        return instance.get<ProductType>(`/products/${productId}`);
    },
    filterProducts: (categoryCode: string | null,
                     priceFrom = 0,
                     priceTo = Infinity,
                     colorCode: string | null,
                     productName = '',
                     pageNumber = 0,
                     pageSize = 12) => {
        return instance.post("/products/filter", {
            categoryCode,
            colorCode,
            pageNumber,
            pageSize,
            priceFrom,
            priceTo,
            productName,
        });
    },
};
