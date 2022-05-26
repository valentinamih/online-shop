import React from "react";
import style from './ProductOptions.module.css'
import {Counter} from "../../../common/Counter/Counter";

export const ProductOptions: React.FunctionComponent<PropsType> = props => {
    return <div>
        <Counter />
    </div>
}

type PropsType = {}