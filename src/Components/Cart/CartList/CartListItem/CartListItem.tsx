import React, {useState} from "react";
import style from './CartListItem.module.css'
import {CartItem, ProductType} from "../../../../types/types";
import {Counter} from "../../../common/Counter/Counter";
import {baseImagesUrl} from "../../../../api/products-api";
import {addItemToCard} from "../../../../redux/cartSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";

export const CartListItem: React.FunctionComponent<PropsType> = props => {
    let [count, setCount] = useState(props.count);
    const dispatch = useDispatch<AppDispatch>();
    const addProduct = () => {
        const product: CartItem = {
            product: props.product,
            count: count,
        };
        dispatch(addItemToCard(product));
    }
    return <div className={style.cartListItem}>
        <img src={baseImagesUrl + props.product.listImages[0].name} className={style.cartListImage}/>
        <span>{props.product.name}</span>
        <span>{props.product.price}</span>
        <Counter increment={() => {
            setCount(++count);
            addProduct()
        }}
                 decrement={() => {
                     setCount(--count);
                     addProduct()
                 }}
                 count={count}/>
    </div>
}

interface PropsType {
    product: ProductType
    count: number
}