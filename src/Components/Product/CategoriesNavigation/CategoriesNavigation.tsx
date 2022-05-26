import React from "react";
import style from './CategoriesNavigation.module.css'
import {NavLink} from "react-router-dom";

export  const CategoriesNavigation: React.FunctionComponent<PropsType> = props => {
    return <div className={style.categoriesNavigation}>
        <NavLink to={'/products'} ><span>Категории {'>'} </span></NavLink>
        <span>{props.categoryName}</span>
    </div>
}

type PropsType = {
    categoryName: string
    categoryCode: string
}