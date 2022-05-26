import style from './Products.module.css'
import React from "react";
import {SearchBar} from "./SearchBar/SearchBar";

type PropsType = {}

export const Products: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.products}>
        <SearchBar />
    </div>
}