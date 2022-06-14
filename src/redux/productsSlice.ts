import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAPI } from "../api/products-api";
import { ProductType } from "../types/types";

type initialStateType = {
  homePageProducts: Array<ProductType>;
  product: ProductType;
};
const InitialState: initialStateType = {
  homePageProducts: [],
  product: {} as ProductType,
};

export const requestHomePageProducts = createAsyncThunk(
  "products/requestHomePageProducts",
  async function () {
    let res = await ProductAPI.filterProducts(null, 0, Infinity, "", 0, 9);
    return res.data.content as Array<ProductType>;
  }
);

const productsSlice = createSlice({
    name: "products",
    initialState: InitialState,
    reducers: {
        setProduct(state, action: PayloadAction<ProductType>) {
            state.product = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(requestHomePageProducts.fulfilled, (state, action) => {
            state.homePageProducts = action.payload;
        });
    },
});

export default productsSlice.reducer;
export const { setProduct } = productsSlice.actions;
