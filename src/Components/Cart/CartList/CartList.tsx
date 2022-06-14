import React from "react";
import style from './CartList.module.css'
import {AppUseSelector} from "../../../redux/appUseSelector";
import {cartSelector} from "../../../redux/selectors/cartSelector";
import {CartListItem} from "./CartListItem/CartListItem";
import {CartItem, ProductType} from "../../../types/types";

export const CartList: React.FunctionComponent<PropsType> = props => {
    let cartItems = AppUseSelector(cartSelector.cartItems)
    return <div className={style.cartList}>
        {cartItems.map((item: CartItem) => {
            return <CartListItem product={item.product} count={item.count}/>
        })}
    </div>
}

type PropsType = {}