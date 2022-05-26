import {RootReducerType} from "../store";

export const colorsSelector = {
    colors: (store: RootReducerType) => {
        return store.searchReducer.colors
    }
}