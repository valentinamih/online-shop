import React from "react";
import style from './ProductDescription.module.css'
import {ProductTitle} from "./ProductTitle/ProductTitle";
import {ProductOptions} from "./ProductOptions/ProductOptions";

export const ProductDescription: React.FunctionComponent<PropsType> = props => {
    return <div className={style.productDescriptionContainer}>
        <ProductTitle price={props.price} name={props.name} description={props.description}/>
        <ProductOptions />
    </div>
}

type PropsType = {
    price: number
    name: string
    description: string
}