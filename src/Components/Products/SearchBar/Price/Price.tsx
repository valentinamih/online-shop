import React, {useState} from "react";

type PropsType = {}

export const Price: React.FunctionComponent<PropsType> = (props) => {
    const [isPricesShow, toggleShowPrices] = useState(false)
    return <div>
        <p onClick={() => toggleShowPrices(!isPricesShow)}>Цена:</p>
        {isPricesShow ? <p>prices</p> : null}
    </div>
}