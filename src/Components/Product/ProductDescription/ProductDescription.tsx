import React from "react"
import style from "./ProductDescription.module.css"
import {ProductTitle} from "./ProductTitle/ProductTitle"
import {ProductOptions} from "./ProductOptions/ProductOptions"
import {ProductType} from "../../../types/types"

export const ProductDescription: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.productDescriptionContainer}>
            <ProductTitle
                price={props.product.price}
                name={props.product.name}
                description={props.product.description}
            />
            <ProductOptions product={props.product}/>
        </div>
}

interface PropsType {
    product: ProductType
}
