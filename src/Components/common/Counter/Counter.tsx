import React from "react";
import style from "./Counter.module.css";

export const Counter: React.FunctionComponent<PropsType> = props => {
    return <div className={style.countBox}>
        <input className={style.count} type="text" value="1"/>
        <div className={style.countArrowsContainer}>
            <div className={style.countArrow}>▲</div>
            <div className={style.countArrow}>▼</div>
        </div>
    </div>
}

type PropsType = {}