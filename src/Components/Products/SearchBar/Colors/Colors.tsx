import React from "react";
import {AppUseSelector} from "../../../../redux/appUseSelector";
import {colorsSelector} from "../../../../redux/selectors/colorsSelector";
import {ColorType} from "../../../../types/types";
import style from "./Colors.module.css";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {requestProducts, setColor} from "../../../../redux/searchSlice";
import classNames from "classnames/bind";

let cx = classNames.bind(style);

export const Colors: React.FunctionComponent<PropsType> = (props) => {
    const colors = AppUseSelector(colorsSelector.colors);
    const dispatch = useDispatch<AppDispatch>();
    const onColorClick = (colorCode: string | null) => {
        dispatch(setColor(colorCode))
        dispatch(requestProducts())
    }
    return (
        <div className={style.colorsContainer}>
            <b>Цвет</b>
            <div className={style.colors}>
                {colors.map((color: ColorType) => {
                    return (
                        <div
                            key={color.code}
                            className={style.color}
                            onClick={() => {onColorClick(color.code)}}
                            style={{
                                backgroundColor: color.code,
                            }}
                        > </div>
                    );
                })}
            </div>
            <div
                className={cx({
                    color: true,
                    allColors: true
                })}
                onClick={() => {onColorClick(null)}}
            > </div>
        </div>
    );
};

type PropsType = {
    pagination: (pageNumber: number) => void
};