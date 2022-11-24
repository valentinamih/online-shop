import React from "react"
import {Categories} from "./Categories/Categories"
import {Price} from "./Price/Price"
import {Colors} from "./Colors/Colors"
import style from "./SearchBar.module.css"
import {Button} from "../../common/Button/Button"

export const SearchBar: React.FunctionComponent<PropsType> = (props) => {
    return (
        <div className={style.searchBar}>
            <Categories pagination={props.pagination}/>
            <Price pagination={props.pagination}/>
            <Colors pagination={props.pagination}/>
            <Button
                title={"Применить"}
                onClickFunction={props.getProducts}
                type={"button"} />
        </div>
    )
}

type PropsType = {
    pagination: (pageNumber: number) => void
    getProducts: () => void
}