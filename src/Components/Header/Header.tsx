import style from "./Header.module.css";
import React from "react";
import {Logo} from "../common/Logo/Logo";

export const Header: React.FunctionComponent = () => {
    return (
        <div className={style.header}>
            <Logo/>
        </div>
    );
};
