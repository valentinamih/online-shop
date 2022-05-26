import React from "react";
import {ProductImages} from "./ProductImages/ProductImages";
import {ProductDescription} from "./ProductDescription/ProductDescription";
import style from './Product.module.css'
import {CategoriesNavigation} from "./CategoriesNavigation/CategoriesNavigation";
import {AppUseSelector} from "../../redux/appUseSelector";
import {productsSelector} from "../../redux/selectors/productsSelector";

export const Product: React.FunctionComponent<PropsType> = (props) => {
    let currentProduct = AppUseSelector(productsSelector.product)
    return <div>
        {currentProduct ? <div className={style.productContainer}>
            {<CategoriesNavigation categoryName={currentProduct.categoryName} categoryCode={currentProduct.categoryCode} />}
            {<ProductImages images={currentProduct.cardImages}/>}
            {<ProductDescription description={currentProduct.description} price={currentProduct.price} name={currentProduct.name} />}
        </div>
        : null}

    </div>

}

type PropsType = {

}
