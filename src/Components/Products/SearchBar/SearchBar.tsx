import React from "react";
import {Categories} from "./Categories/Categories";
import {Price} from "./Price/Price";
import {Colors} from "./Colors/Colors";

type PropsType = {}

export const SearchBar: React.FunctionComponent<PropsType> = (props) => {

    return <div>
        <Categories />
        <Price />
        <Colors />
    </div>
}