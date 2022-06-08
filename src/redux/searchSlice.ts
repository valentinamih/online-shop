import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ColorType, ProductType } from "../types/types";
import { RootReducerType } from "./store";
import { ProductAPI } from "../api/products-api";

type InitialStateType = {
  filteredProducts: Array<ProductType>;
  colors: Array<ColorType>;
  color: string;
  categoryCode: string;
  priceFrom: number;
  priceTo: number;
  productName: string;
  isFetching: boolean;
  isProductsShowByList: boolean;
};
const initialState: InitialStateType = {
  filteredProducts: [] as Array<ProductType>,
  colors: [
    {
      id: 1,
      name: "red",
      code: "#FF0000",
    },
    {
      id: 2,
      name: "blue",
      code: "#000080",
    },
    {
      id: 3,
      name: "white",
      code: "#FFFFFF",
    },
    {
      id: 4,
      name: "beige",
      code: "#F5DEB3",
    },
    {
      id: 5,
      name: "gray",
      code: "#808080",
    },
    {
      id: 6,
      name: "black",
      code: "#000000",
    },
  ],
  color: "",
  categoryCode: "",
  priceFrom: 0,
  priceTo: Infinity,
  productName: "",
  isFetching: false,
  isProductsShowByList: false,
};

export const requestProducts = createAsyncThunk(
  "search/requestProducts",
  async function (product, thunkAPI) {
    let state = thunkAPI.getState() as RootReducerType;
    let res = await ProductAPI.filterProducts(
      state.searchReducer.categoryCode,
      state.searchReducer.priceFrom,
      state.searchReducer.priceTo
    );
    return res.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryCode = action.payload;
    },
    setMinPrice: (state, action) => {
      state.priceFrom = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.priceTo = action.payload;
    },
    toggleShowByList: (state, action) => {
      state.isProductsShowByList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestProducts.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(requestProducts.fulfilled, (state, action) => {
      state.filteredProducts = action.payload.content;
      state.isFetching = false;
    });
  },
});

export default searchSlice.reducer;
export const {
  setColor,
  setMaxPrice,
  setMinPrice,
  setCategory,
  toggleShowByList,
} = searchSlice.actions;
