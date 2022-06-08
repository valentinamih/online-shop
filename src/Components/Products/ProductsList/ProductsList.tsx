import React, { useState } from "react";
import style from "./ProductsList.module.css";
import { AppUseSelector } from "../../../redux/appUseSelector";
import { ProductItem } from "./ProductItem/ProductItem";
import { ProductsListHeader } from "./ProductsListHeader/ProductsListHeader";
import listStyle from "./ProductItem/ProductListItem.module.css";
import tileStyle from "./ProductItem/ProductTileItem.module.css";
import { searchSelector } from "../../../redux/selectors/searchSelector";
const classNames = require("classnames/bind");

let cx = classNames.bind(style);

export const ProductsList: React.FunctionComponent<PropsType> = (props) => {
  let filteredProducts = AppUseSelector(searchSelector.filteredProducts);
  let isProductsShowByList = AppUseSelector(
    searchSelector.isProductsShowByList
  );
  let productListItemStyle = isProductsShowByList ? listStyle : tileStyle;
  return (
    <div className={style.productsListContainer}>
      <ProductsListHeader
        itemsCount={filteredProducts.length}
        isListActive={isProductsShowByList}
      />
      <div
        className={cx({
          productsList: isProductsShowByList,
          productsTile: !isProductsShowByList,
        })}
      >
        {filteredProducts.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              style={productListItemStyle}
              isProductsShowByList={isProductsShowByList}
            />
          );
        })}
      </div>
    </div>
  );
};

type PropsType = {};
