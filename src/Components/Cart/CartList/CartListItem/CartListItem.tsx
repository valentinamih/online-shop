import React from "react";
import style from './CartListItem.module.css'
import {ProductType} from "../../../../types/types";
import {Counter} from "../../../common/Counter/Counter";
import {baseImagesUrl} from "../../../../api/products-api";

export const CartListItem: React.FunctionComponent<PropsType> = props => {
    return <div className={style.cartListItem}>
            <img src={ baseImagesUrl + props.product.listImages[0].name}  className={style.cartListImage}/>
        <span>{props.product.name}</span>
        <span>{props.product.price}</span>
        <Counter increment={() => {}} decrement={() => {}} count={props.count} />
    </div>
}

type PropsType = {
    product: ProductType
    count: number
}