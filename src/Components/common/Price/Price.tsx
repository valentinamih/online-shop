import React from "react";
import style from './Price.module.css'

export const Price: React.FunctionComponent<PropsType> = props => {
    return <h3 className={style.price} style={{color: props.color, fontSize: `${props.fontSize}px`}}>
        {props.price}
    </h3>
}

type PropsType = {
    price: number | null
    color: string
    fontSize: number | string
}