import style from "./Logo.module.css";
import React from "react";

export const Logo: React.FunctionComponent = () => {
    return (
        <div className={style.logo}>
            <h1>
                <span className={style.logoImage}> </span>
                GO
                <br/>
                coffee
            </h1>
        </div>
    );
};
