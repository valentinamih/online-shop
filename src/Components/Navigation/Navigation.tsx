import style from "./Navigation.module.css";
import React from "react";
import {NavigationItem} from "./NavigationItem";

export const Navigation:React.FunctionComponent<PropsType> = (props) => {
    return <nav className={style.navigation}>
        <ul>
            <NavigationItem link={'/'} title={'Главная'} style={props.style}/>
            <NavigationItem link={'/products'} title={'Продукты'} style={props.style}/>
            <NavigationItem link={'/cart'} title={'Корзина'} style={props.style}/>
            <NavigationItem link={'/checkout'} title={'Оплата'} style={props.style}/>
        </ul>
    </nav>
}

type PropsType = {
    style: any
}
