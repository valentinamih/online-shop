import React from "react";
import style from './CartHeader.module.css'

export const CartHeader: React.FunctionComponent = () => {
    return <div className={style.cartHeader}>
        <span> </span>
        <span>Наименование</span>
        <span>Цена</span>
        <span>Количество</span>
    </div>
}
