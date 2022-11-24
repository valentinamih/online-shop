import React from "react"
import style from "./Rating.module.css"

export const Rating: React.FunctionComponent = () => {
    return <div className={style.ratingArea}>
            <input type="radio" id="star-5" name="rating" value="5"/>
            <label htmlFor="star-5" title="5">
                {" "}
            </label>
            <input type="radio" id="star-4" name="rating" value="4"/>
            <label htmlFor="star-4" title="4">
                {" "}
            </label>
            <input type="radio" id="star-3" name="rating" value="3"/>
            <label htmlFor="star-3" title="3">
                {" "}
            </label>
            <input type="radio" id="star-2" name="rating" value="2"/>
            <label htmlFor="star-2" title="2">
                {" "}
            </label>
            <input type="radio" id="star-1" name="rating" value="1"/>
            <label htmlFor="star-1" title="1">
                {" "}
            </label>
        </div>
}