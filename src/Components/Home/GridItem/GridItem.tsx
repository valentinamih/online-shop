import React from "react";
import style from "./GridItem.module.css";
import { ProductType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {setProduct} from "../../../redux/productsSlice";
import { PriceItem } from "../../common/Price/PriceItem";
import {baseImagesUrl} from "../../../api/products-api";

type PropsType = {
  product: ProductType;
  height: string;
};

export const GridItem: React.FunctionComponent<PropsType> = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const onGridItemClick = () => {
    dispatch(setProduct(props.product));
  };
  return (
    <div
      className={style.gridItem}
      onClick={() => {
        onGridItemClick();
      }}
      style={{
        backgroundImage: `url(${props.product.cardImages 
            ? baseImagesUrl + props.product.cardImages[0].name 
            : null})`,
        height: props.height,
      }}
    >
      <div className={style.gridItemDescription}>
        <PriceItem
          price={props.product.price}
          fontSize={"inherit"}
          color={"black"}
        />
        <h2>{props.product.name}</h2>
      </div>
    </div>
  );
};
