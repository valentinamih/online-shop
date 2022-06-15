import React from "react";
import { Categories } from "./Categories/Categories";
import { Price } from "./Price/Price";
import { Colors } from "./Colors/Colors";
import style from "./SearchBar.module.css";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store";
import {requestColors} from "../../../redux/searchSlice";

export const SearchBar: React.FunctionComponent<PropsType> = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    dispatch(requestColors())
  return (
    <div className={style.searchBar}>
      <Categories pagination={props.pagination}/>
      <Price pagination={props.pagination}/>
      <Colors pagination={props.pagination}/>
    </div>
  );
};

type PropsType = {
    pagination: (pageNumber: number) => void
};