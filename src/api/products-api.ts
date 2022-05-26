import {instance} from "./api";
import {ProductType} from "../types/types";

export const ProductAPI = {
    getProduct: (productId: number) => {return instance.get<ProductType>(`/products/${productId}`)},
    filterProducts: (categoryCode: string | null,
                     productName?: string | null,
                     pageNumber = 1,
                     pageSize = 10,
                     priceFrom = 1,
                     priceTo = Infinity) => {
        return instance.post('/products/filter', {
            categoryCode, pageNumber, pageSize, priceFrom, priceTo, productName
        })
    }
}

