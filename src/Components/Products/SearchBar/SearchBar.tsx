import React from "react";
import { Categories } from "./Categories/Categories";
import { Price } from "./Price/Price";
import { Colors } from "./Colors/Colors";
import style from "./SearchBar.module.css";

type PropsType = {};

export const SearchBar: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={style.searchBar}>
      <Categories />
      <Price />
      <Colors />
    </div>
  );
};
