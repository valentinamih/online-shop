import React from "react";
import style from './Cart.module.css'
import {CartHeader} from "./CartHeader/CartHeader";
import {CartList} from "./CartList/CartList";
import {CartTotal} from "./CartTotal/CartTotal";

export const Cart: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.cartContainer}>
        <h2 className={style.headline}>Корзина</h2>
        <CartHeader />
        <CartList />
        <CartTotal />
    </div>
}

type PropsType = {}