import React from "react";
import style from './CartHeader.module.css'

export const CartHeader: React.FunctionComponent<PropsType> = props => {
    return <div className={style.cartHeader}>
        <span>Наименование</span>
        <span>Цена</span>
        <span>Количество</span>
    </div>
}

type PropsType = {}