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
    let filteredProducts = AppUseSelector(searchSelector.filteredProducts);
    let isProductsShowByList = AppUseSelector(searchSelector.isProductsShowByList);

    let [productsPerPage, setProductsPerPage] = useState(4)
    let lastProductIndex = props.currentPage * productsPerPage
    let firstProductIndex = lastProductIndex - productsPerPage
    let currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex)


    let productListItemStyle = isProductsShowByList ? listStyle : tileStyle;
    return <div className={style.productsListContainer}>
        <ProductsListHeader
            onPaginatorChange={setProductsPerPage}
            productsPerPage={productsPerPage}
            itemsCount={filteredProducts.length}
            isListActive={isProductsShowByList}
        />
        <div className={cx({
                productsList: isProductsShowByList,
                productsTile: !isProductsShowByList,
            })}>
            {!currentProducts.length ? <p className={style.message}>
                Выберите категорию
            </p>
            : null}
            {currentProducts.map((product) => {
                return (
                    <ProductItem
                        product={product}
                        key={product.id}
                        style={productListItemStyle}
                        isProductsShowByList={isProductsShowByList}/>
                );
            })}
        </div>
        <Paginator currentPage={props.currentPage}
                   productsPerPage={productsPerPage}
                   pagination={props.pagination}
                   totalProductsCount={filteredProducts.length} />
    </div>
}

type PropsType = {
    currentPage: number
    pagination: (pageNumber: number) => void
};
