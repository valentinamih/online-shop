import {createSlice} from "@reduxjs/toolkit";
import {ColorType} from "../types/types";
import {filterProductsRequestType} from "../types/types";

type InitialStateType = {
    productsFilter: filterProductsRequestType
    colors: Array<ColorType>;
    isProductsShowByList: boolean;
};
const initialState: InitialStateType = {
    productsFilter: {
        categoryCode: null,
        priceFrom: 0,
        priceTo: 100000,
        colorCode: null,
        productName: '',
        pageNumber: 0,
        pageSize: 12
    },
    colors: [] as Array<ColorType>,
    isProductsShowByList: false,
};

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setColor: (state, action) => {
            state.productsFilter.colorCode = action.payload;
        },
        setCategory: (state, action) => {
            state.productsFilter.categoryCode = action.payload;
        },
        setMinPrice: (state, action) => {
            state.productsFilter.priceFrom = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.productsFilter.priceTo = action.payload;
        },
        toggleShowByList: (state, action) => {
            state.isProductsShowByList = action.payload;
        },
        setPageNumber: (state, action) => {
            state.productsFilter.pageNumber = action.payload
        },
        setPageSize: (state, action) => {
            state.productsFilter.pageSize = action.payload
        }
    },
});

export default searchSlice.reducer;
export const {
    setColor,
    setMaxPrice,
    setMinPrice,
    setCategory,
    toggleShowByList,
    setPageSize,
    setPageNumber
} = searchSlice.actions;
