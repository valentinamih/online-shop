import React, {useState} from "react"
import {Range, getTrackBackground} from "react-range"
import {setMaxPrice, setMinPrice} from "../../../../redux/searchSlice"
import {useDispatch} from "react-redux"
import {AppDispatch} from "../../../../redux/store"
import style from "./Price.module.css"

export const Price: React.FunctionComponent<PropsType> = (props) => {
    const min = 0
    const max = 100000
    const [values, setValues] = useState([0, 100000])
    const dispatch = useDispatch<AppDispatch>()
    const onPriceSubmit = () => {
        dispatch(setMinPrice(values[0]))
        dispatch(setMaxPrice(values[1]))
    }
    return (
        <div className={style.priceContainer}>
            <b>Цена:</b>
            <Range
                values={values}
                step={500}
                min={min}
                max={max}
                onChange={(values) => {
                    setValues(values)
                }}
                onFinalChange={onPriceSubmit}
                renderTrack={({props, children}) => (
                    <div
                        className={style.rangeContainer}>
                        <div
                            ref={props.ref}
                            className={style.track}
                            style={{
                                background: getTrackBackground({
                                    values,
                                    colors: ["#ccc", "orange", "#ccc"],
                                    min: min,
                                    max: max,
                                }),
                            }}>
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({props, isDragged}) => (
                    <div {...props} className={style.dots}>

                    </div>
                )}/>
            <output className={style.output}>
                {values[0].toFixed(0)} руб. - {values[1].toFixed(0)} руб.
            </output>
        </div>
    )
}

type PropsType = {
    pagination: (pageNumber: number) => void
}
