import React from "react"
import style from "./ShowToggler.module.css"
import classNames from "classnames/bind"
import {useDispatch} from "react-redux"
import {AppDispatch} from "../../../../../redux/store"
import {toggleShowByList} from "../../../../../redux/searchSlice"

let cx = classNames.bind(style)

export const ShowToggler: React.FunctionComponent<PropsType> = (props) => {
    const dispatch = useDispatch<AppDispatch>()
    return <div className={style.logosContainer}>
        <div
            className={cx({
                logo: true,
                active: !props.isListActive,
                tile: true,
            })}
            onClick={() => dispatch(toggleShowByList(false))}>
        </div>
        <div
            className={cx({
                logo: true,
                active: props.isListActive,
                list: true,
            })}
            onClick={() => dispatch(toggleShowByList(true))}>
        </div>
    </div>
}

interface PropsType {
    isListActive: boolean
}
