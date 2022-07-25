import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CategoryType, ColorType, filterProductsRequestType, PageableResponse, ProductType} from "../types/types";
import {BaseQueryMeta, BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://coffee-shop-demo-v1.herokuapp.com'}),
    endpoints: builder => ({
        getCategories: builder.query<Array<CategoryType>, void>({
            query: () => '/categories'
        }),
        getColors: builder.query<Array<ColorType>, void>({
            query: () => '/colors'
        }),
        filterProducts: builder.mutation<PageableResponse, filterProductsRequestType>({
            query: ({
                        categoryCode,
                        priceFrom,
                        priceTo,
                        colorCode,
                        productName,
                        pageNumber,
                        pageSize
                    }) => ({
                url: '/products/filter',
                method: 'POST',
                body: {
                    categoryCode,
                    priceFrom,
                    priceTo,
                    colorCode,
                    productName,
                    pageNumber,
                    pageSize
                }
            }),
        })
    })
})


export const {useGetCategoriesQuery, useGetColorsQuery, useFilterProductsMutation} = apiSlice