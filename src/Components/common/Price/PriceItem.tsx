import React from "react";
import style from "./PriceItem.module.css";

export const PriceItem: React.FunctionComponent<PropsType> = (props) => {
    return (
        <h3
            className={style.price}
            style={{color: props.color, fontSize: `${props.fontSize}px`}}>
            {props.price} руб
        </h3>
    );
};

interface PropsType {
    price: number | null;
    color: string;
    fontSize: number | string;
};
