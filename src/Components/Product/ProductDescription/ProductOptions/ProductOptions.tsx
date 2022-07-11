import React, {useState} from "react";
import style from "./ProductOptions.module.css";
import {Counter} from "../../../common/Counter/Counter";
import {Button} from "../../../common/Button/Button";
import {CartItem, ProductType} from "../../../../types/types";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {addItemToCard} from "../../../../redux/cartSlice";
import ReactTooltip from "react-tooltip";

export const ProductOptions: React.FunctionComponent<PropsType> = (props) => {
    let [count, setCount] = useState(1);
    let fooRef: any = null
    const dispatch = useDispatch<AppDispatch>();
    const addProduct = () => {
        const product: CartItem = {
            product: props.product,
            count: count,
        };
        dispatch(addItemToCard(product));
        ReactTooltip.show(fooRef)
        setTimeout(() => {
            ReactTooltip.hide(fooRef)
        }, 4000)
    };
    return (
        <div className={style.productOptions}>
            <Counter
                count={count}
                increment={() => setCount(++count)}
                decrement={() => setCount(--count)}/>
            <span ref={ref => fooRef = ref} data-tip='Товар добавлен в корзину'> </span>
            <Button
                title={"Добавить в корзину"}
                onClickFunction={() => {
                    addProduct();
                }}
                type={"button"}/>
            <ReactTooltip eventOff={'click'} type={'success'} place={'top'}/>
        </div>
    );
};

interface PropsType {
    product: ProductType;
};
