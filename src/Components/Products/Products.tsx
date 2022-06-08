import style from "./Products.module.css";
import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ProductsList } from "./ProductsList/ProductsList";

type PropsType = {};

export const Products: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={style.products}>
      <SearchBar />
      <ProductsList />
    </div>
  );
};
