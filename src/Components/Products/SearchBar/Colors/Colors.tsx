import React from "react"
import {ColorType} from "../../../../types/types"
import style from "./Colors.module.css"
import {useDispatch} from "react-redux"
import {AppDispatch} from "../../../../redux/store"
import {setColor} from "../../../../redux/searchSlice"
import classNames from "classnames/bind"
import {useGetColorsQuery} from "../../../../api/apiSlice"

let cx = classNames.bind(style);

export const Colors: React.FunctionComponent<PropsType> = (props) => {
    const {data} = useGetColorsQuery()
    const dispatch = useDispatch<AppDispatch>()
    const onColorClick = (colorCode: string | null) => {
        dispatch(setColor(colorCode))
    }
    let colors
    if (data) {
        colors = data.map((color: ColorType) => <div
            key={color.code}
            className={style.color}
            onClick={() => {
                onColorClick(color.code)
            }}
            style={{
                backgroundColor: color.code,
            }}>
        </div>)
    }
    return (
        <div className={style.colorsContainer}>
            <b>Цвет</b>
            <div className={style.colors}>
                {colors}
            </div>
            <div
                className={cx({
                    color: true,
                    allColors: true
                })}
                onClick={() => {
                    onColorClick(null)
                }}>
            </div>
        </div>
    )
}

type PropsType = {
    pagination: (pageNumber: number) => void
}