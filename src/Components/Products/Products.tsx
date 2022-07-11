import style from "./Products.module.css";
import React from "react";
import {SearchBar} from "./SearchBar/SearchBar";
import {ProductsList} from "./ProductsList/ProductsList";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {requestProducts, setPageNumber} from "../../redux/searchSlice";

export const Products: React.FunctionComponent = () => {
    const dispatch = useDispatch<AppDispatch>()
    const pagination = (pageNumber: number) => {
        dispatch(setPageNumber(pageNumber - 1))
        dispatch(requestProducts())
    }
    return <div className={style.products}>
        <SearchBar pagination={pagination}/>
        <ProductsList pagination={pagination}/>
    </div>

};
