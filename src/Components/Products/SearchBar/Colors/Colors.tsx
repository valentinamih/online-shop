import React from "react";
import {AppUseSelector} from "../../../../redux/appUseSelector";
import {colorsSelector} from "../../../../redux/selectors/colorsSelector";
import {ColorType} from "../../../../types/types";
import style from './Colors.module.css'

type PropsType = {}

export const Colors: React.FunctionComponent<PropsType> = (props) => {
    const colors = AppUseSelector(colorsSelector.colors)
    return <div className={style.colorsContainer}>
        {colors.map((color: ColorType) => {
            return <div key={color.id} style={{
                backgroundColor: color.code,
                width: '25px',
                height: '25px',
                borderRadius: '50%',
            }} >
            </div>
        })}
    </div>
}
