import style from "./Navigation.module.css";
import React from "react";
import {NavigationItem} from "./NavigationItem";

export const Navigation: React.FunctionComponent<PropsType> = (props) => {
    return (
        <nav className={style.navigation}>
            <ul>
                <NavigationItem
                    link={"/online-shop/"}
                    title={"Главная"}
                    style={props.style}/>
                <NavigationItem
                    link={"/online-shop/products"}
                    title={"Продукты"}
                    style={props.style}/>
                <NavigationItem
                    link={"/online-shop/cart"}
                    title={"Корзина"}
                    style={props.style}/>
                <NavigationItem
                    link={"/online-shop/checkout"}
                    title={"Оплата"}
                    style={props.style}/>
            </ul>
        </nav>
    );
};

interface PropsType {
    style: { [key: string]: string };
};
