import React from "react";
import style from "./ProductListHeader.module.css";
import {ShowToggler} from "./ShowToggler/ShowToggler";
import {SortSelect} from "./SortSelect/SortSelect";
import {PaginationSelect} from "./PaginationSelect/PaginationSelect";

export const ProductsListHeader: React.FunctionComponent<PropsType> = (props) => {
    return (
        <div className={style.listHeaderContainer}>
            <div>
                <p>Найдено {props.itemsCount} товаров</p>
                <ShowToggler isListActive={props.isListActive}/>
            </div>
            <div className={style.selectsContainer}>
                <SortSelect/>
                <PaginationSelect />
            </div>
        </div>
    );
};

type PropsType = {
    itemsCount: number;
    isListActive: boolean;
}
