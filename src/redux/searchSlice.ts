import {createSlice} from "@reduxjs/toolkit";
import {ColorType} from "../types/types";

type initialStateType = {
    colors: Array<ColorType>
}
const InitialState: initialStateType = {
    colors: [
        {
             id: 1,
            name: 'red',
            code: '#FF0000'
        },
        {
            id: 2,
            name: 'blue',
            code: '#000080'
        },
        {
            id: 3,
            name: 'white',
            code: '#FFFFFF'
        },
        {
            id: 4,
            name: 'beige',
            code: '#F5DEB3'
        },
        {
            id: 5,
            name: 'gray',
            code: '#808080'
        },
        {
            id: 6,
            name: 'black',
            code: '#000000'
        },
    ]
}

const searchSlice = createSlice({
    name: 'search',
    initialState: InitialState,
    reducers: { }
})

export default searchSlice.reducer