import React from "react";
type PropsType = {
    code: string
    name: string
}

export const Category: React.FunctionComponent<PropsType> = (props) => {
    return <div>
        <p>
            <input type={'checkbox'} name={'category'} value={props.code}/>
            {props.name}
        </p>
    </div>
}