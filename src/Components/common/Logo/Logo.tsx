import style from "./Logo.module.css";
import React from "react";

export const Logo: React.FunctionComponent<PropsType> = (props) => {
    return <div className={style.logo}>
        <h1>
            <span className={style.logoImage}>
            </span>
            GO<br/>
            coffe
        </h1>
    </div>

}

type PropsType = {}
