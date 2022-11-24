import React from "react"
import {ProductImages} from "./ProductImages/ProductImages"
import {ProductDescription} from "./ProductDescription/ProductDescription"
import style from "./ProductPage.module.css"
import {CategoriesNavigation} from "./CategoriesNavigation/CategoriesNavigation"
import {AppUseSelector} from "../../redux/appUseSelector"
import {productsSelector} from "../../redux/selectors/productsSelector"

export const ProductPage: React.FunctionComponent = () => {
    let currentProduct = AppUseSelector(productsSelector.product)
    return <div>
        {currentProduct ? (
            <div className={style.productContainer}>
                <CategoriesNavigation categoryName={currentProduct.categoryName}
                                      categoryCode={currentProduct.categoryCode}/>
                <ProductImages id={currentProduct.id} product={currentProduct}/>
                <ProductDescription product={currentProduct}/>
            </div>
        ) : null}
    </div>
}

