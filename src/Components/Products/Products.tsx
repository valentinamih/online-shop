import style from "./Products.module.css";
import React, {useState} from "react";
import {SearchBar} from "./SearchBar/SearchBar";
import {ProductsList} from "./ProductsList/ProductsList";
import {AppUseSelector} from "../../redux/appUseSelector";
import {searchSelector} from "../../redux/selectors/searchSelector";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {requestProducts, setPageNumber} from "../../redux/searchSlice";

type PropsType = {};

export const Products: React.FunctionComponent<PropsType> = (props) => {

  const dispatch = useDispatch<AppDispatch>()
  const pagination = (pageNumber: number) => {
    dispatch(setPageNumber(pageNumber - 1))
    dispatch(requestProducts())
  }
  return (
    <div className={style.products}>
      <SearchBar pagination={pagination}/>
      <ProductsList pagination={pagination}/>
    </div>
  );
};
