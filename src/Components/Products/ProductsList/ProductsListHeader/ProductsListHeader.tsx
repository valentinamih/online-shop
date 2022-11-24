import React from "react"
import style from "./ProductListHeader.module.css"
import {ShowToggler} from "./ShowToggler/ShowToggler"
import {SortSelect} from "./SortSelect/SortSelect"
import {PaginationSelect} from "./PaginationSelect/PaginationSelect"

export const ProductsListHeader: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.listHeaderContainer}>
        <div>
            <p>Найдено {props.itemsCount || '0'} товаров</p>
            <ShowToggler isListActive={props.isListActive}/>
        </div>
        <div className={style.selectsContainer}>
            <SortSelect getProducts={props.getProducts}/>
            <PaginationSelect getProducts={props.getProducts}/>
        </div>
    </div>
};

interface PropsType {
    itemsCount: number | null
    isListActive: boolean
    getProducts: () => void
}
