import React from "react";
import style from './CartList.module.css'
import {AppUseSelector} from "../../../redux/appUseSelector";
import {cartSelector} from "../../../redux/selectors/cartSelector";
import {CartItem} from "../../../types/types";
import {CartListItem} from "./CartListItem/CartListItem";

export const CartList: React.FunctionComponent = () => {
    let cartItems = AppUseSelector(cartSelector.cartItems)
    return <div className={style.cartList}>
        {cartItems.map((item: CartItem) => {
            return <CartListItem key={item.product.id} product={item.product} count={item.count}/>
        })}
    </div>
}
