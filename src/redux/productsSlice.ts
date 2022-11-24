import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ProductType} from "../types/types"

type initialStateType = {
    homePageProducts: Array<ProductType>
    product: ProductType
}
const InitialState: initialStateType = {
    homePageProducts: [],
    product: {} as ProductType,
}

const productsSlice = createSlice({
    name: "products",
    initialState: InitialState,
    reducers: {
        setProduct(state, action: PayloadAction<ProductType>) {
            state.product = action.payload
        },
    },
})

export default productsSlice.reducer
export const {setProduct} = productsSlice.actions
