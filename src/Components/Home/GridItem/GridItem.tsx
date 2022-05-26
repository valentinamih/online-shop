import React from "react";
import style from './GridItem.module.css'
import {ProductType} from "../../../types/types";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store";
import {setProduct} from "../../../redux/productsSlice";
import {Price} from "../../common/Price/Price";

type PropsType =  {
    product: ProductType
    height: string
}

export const GridItem: React.FunctionComponent<PropsType> = (props) => {
    const dispatch: AppDispatch = useDispatch()
    const onGridItemClick = () => {
        dispatch(setProduct(props.product))
    }
    return <div className={style.gridItem}
                onClick={() => {onGridItemClick()}
                }
                style={{backgroundImage: `url(${props.product.cardImages[0].content})`, height: props.height}}>
        <div className={style.gridItemDescription}>
            <Price price={props.product.price} fontSize={'inherit'} color={'black'}/>
            <h2>
                {props.product.name}
            </h2>
        </div>
        </div>
}
