import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {ColorType, Filter, ProductType} from "../types/types";
import {AppStateType, RootReducerType} from "./store";
import { ProductAPI } from "../api/products-api";
import {ColorsAPI} from "../api/colors-api";

type InitialStateType = {
  filteredProducts: Array<ProductType>;
  colors: Array<ColorType>;
  color: string | null;
  categoryCode: string | null;
  priceFrom: number;
  priceTo: number;
  productName: string;
  isFetching: boolean;
  isProductsShowByList: boolean;
};
const initialState: InitialStateType = {
  filteredProducts: [] as Array<ProductType>,
  colors: [] as Array<ColorType>,
  color: null ,
  categoryCode: null,
  priceFrom: 0,
  priceTo: Infinity,
  productName: "",
  isFetching: false,
  isProductsShowByList: false,
};

export const requestProducts = createAsyncThunk(
  "search/requestProducts",
  async function (product, thunkAPI) {
    let state = thunkAPI.getState() as AppStateType;
    let res = await ProductAPI.filterProducts(
      state.searchReducer.categoryCode,
      state.searchReducer.priceFrom,
      state.searchReducer.priceTo,
      state.searchReducer.color
    );
    return res.data;
  }
);

export const requestColors = createAsyncThunk(
    'search/requestColors',
    async function (color, thunkAPI) {
      let state = thunkAPI.getState() as AppStateType
      let res = await ColorsAPI.getColors()
      return res.data
    }
)

export const sortProducts = createAsyncThunk(
    "products/sortProducts",
    async function (filter: Filter, thunkAPI) {
      let state = thunkAPI.getState() as AppStateType
      if (filter.condition === 'reverse') {
        return state.searchReducer.filteredProducts.slice().sort((prev: ProductType, next: ProductType) => {
          if (filter.filter(prev) > filter.filter(next)) return -1;
          return 1
        })
      }
      return state.searchReducer.filteredProducts.slice().sort((prev: ProductType, next: ProductType) => {
        if (filter.filter(prev) < filter.filter(next)) return -1;
        return 1
      })
    }
)

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
    builder.addCase(sortProducts.fulfilled, (state, action) => {
      state.filteredProducts = action.payload
    })
    builder.addCase(requestColors.fulfilled, (state, action) => {
      state.colors = action.payload
    })
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
