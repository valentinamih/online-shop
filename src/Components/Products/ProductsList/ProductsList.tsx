import React, {useState} from "react";
import style from "./ProductsList.module.css";
import {AppUseSelector} from "../../../redux/appUseSelector";
import {ProductItem} from "./ProductItem/ProductItem";
import {ProductsListHeader} from "./ProductsListHeader/ProductsListHeader";
import listStyle from "./ProductItem/ProductListItem.module.css";
import tileStyle from "./ProductItem/ProductTileItem.module.css";
import {searchSelector} from "../../../redux/selectors/searchSelector";
import {Paginator} from "../../common/Paginator/Paginator";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store";
import {requestProducts, setCategory} from "../../../redux/searchSlice";

const classNames = require("classnames/bind");

let cx = classNames.bind(style);

export const ProductsList: React.FunctionComponent<PropsType> = (props) => {
    let currentPage = AppUseSelector(searchSelector.currentPage)
    let filteredProducts = AppUseSelector(searchSelector.filteredProducts);
    let totalProductsCount = AppUseSelector(searchSelector.totalProductsCount)
    let isProductsShowByList = AppUseSelector(searchSelector.isProductsShowByList);
    let pageSize = AppUseSelector(searchSelector.pageSize)
    let productListItemStyle = isProductsShowByList ? listStyle : tileStyle;
    return <div className={style.productsListContainer}>
        <ProductsListHeader
            itemsCount={totalProductsCount}
            isListActive={isProductsShowByList}
        />
        <div className={cx({
                productsList: isProductsShowByList,
                productsTile: !isProductsShowByList,
            })}>
            {!filteredProducts.length ? <p className={style.message}>
                Выберите категорию
            </p>
            : null}
            {filteredProducts.map((product) => {
                return (
                    <ProductItem
                        product={product}
                        key={product.id}
                        style={productListItemStyle}
                        isProductsShowByList={isProductsShowByList}/>
                );
            })}
        </div>
        <Paginator currentPage={currentPage}
                   productsPerPage={pageSize}
                   pagination={props.pagination}
                   totalProductsCount={totalProductsCount} />
    </div>
}

type PropsType = {
    pagination: (pageNumber: number) => void
};
