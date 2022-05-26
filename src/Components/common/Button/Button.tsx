import React from "react";
import style from './Button.module.css';

export const Button:React.FunctionComponent<PropsType> = props => {
    return <button onClick={() => {props.onClickFunction()}}
                   type={props.type}
                   className={style.button}>{props.title}
    </button>
}

type PropsType = {
    title: string
    onClickFunction: () => void
    type:  'submit' | 'reset' | 'button'
}