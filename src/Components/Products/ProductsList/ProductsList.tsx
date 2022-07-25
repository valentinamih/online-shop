import React from "react";
import style from "./ProductsList.module.css";
import {AppUseSelector} from "../../../redux/appUseSelector";
import {ProductItem} from "./ProductItem/ProductItem";
import {ProductsListHeader} from "./ProductsListHeader/ProductsListHeader";
import listStyle from "./ProductItem/ProductListItem.module.css";
import tileStyle from "./ProductItem/ProductTileItem.module.css";
import {searchSelector} from "../../../redux/selectors/searchSelector";
import {Paginator} from "../../common/Paginator/Paginator";
import {ProductType} from "../../../types/types";

const classNames = require("classnames/bind");
let cx = classNames.bind(style);

export const ProductsList: React.FunctionComponent<PropsType> = (props) => {
    let currentPage = AppUseSelector(searchSelector.productsFilter).pageNumber
    let isProductsShowByList = AppUseSelector(searchSelector.isProductsShowByList);
    let pageSize = AppUseSelector(searchSelector.productsFilter).pageSize
    let productListItemStyle = isProductsShowByList ? listStyle : tileStyle;
    return <div className={style.productsListContainer}>
        <ProductsListHeader
            itemsCount={props.totalCount}
            isListActive={isProductsShowByList}
            getProducts={props.getProducts}
        />
        <div className={cx({
            productsList: isProductsShowByList,
            productsTile: !isProductsShowByList,
        })}>
            {props.products && !props.products.length ? <p className={style.message}>
                    Выберите категорию
                </p>
                : null}
            {props.products && props.products.map((product) => {
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
                   totalProductsCount={props.totalCount}/>
    </div>
}

interface PropsType {
    pagination: (pageNumber: number) => void
    products: ProductType[] | null
    totalCount: number
    getProducts: () => void
};
