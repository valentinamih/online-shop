import style from "./Products.module.css";
import React, {useState} from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ProductsList } from "./ProductsList/ProductsList";

type PropsType = {};

export const Products: React.FunctionComponent<PropsType> = (props) => {
    let [currentPage, setCurrentPage] = useState(1)
    const pagination = (pageNumber: number) => setCurrentPage(pageNumber)
  return (
    <div className={style.products}>
      <SearchBar pagination={pagination}/>
      <ProductsList currentPage={currentPage} pagination={pagination}/>
    </div>
  );
};
