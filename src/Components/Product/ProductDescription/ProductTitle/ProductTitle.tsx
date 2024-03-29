import React from "react"
import {PriceItem} from "../../../common/Price/PriceItem"
import style from "./ProductTitle.module.css"
import {Rating} from "../Rating/Rating"

export const ProductTitle: React.FunctionComponent<PropsType> = (props) => {
    return <>
            <PriceItem price={props.price} color={"#ffc107"} fontSize={24}/>
            <h2 className={style.name}>{props.name}</h2>
            <Rating/>
            <p>В наличии</p>
            <p className={style.description}>{props.description}</p>
        </>
}

interface PropsType {
    price: number | null
    name: string
    description: string
};
