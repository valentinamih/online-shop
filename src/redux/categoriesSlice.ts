import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategoryType} from "../types/types";
import {CategoryAPI} from "../api/category-api";

type InitialStateType = {
    categories: Array<CategoryType>
}
let initialState: InitialStateType = {
    categories: []
}

export const requestCategories = createAsyncThunk('categories/requestCategories',
    async function () {
        let res = await CategoryAPI.getCategories()
        return res.data
    })

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(requestCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        }
    )
})

export default categoriesSlice.reducer
export const {} = categoriesSlice.actions