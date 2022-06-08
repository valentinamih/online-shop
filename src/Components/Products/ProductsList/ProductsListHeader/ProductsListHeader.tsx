import React from "react";
import style from "./ProductListHeader.module.css";
import { ShowToggler } from "./ShowToggler/ShowToggler";

export const ProductsListHeader: React.FunctionComponent<PropsType> = (
  props
) => {
  return (
    <div className={style.listHeaderContainer}>
      <div>
        <p>Найдено {props.itemsCount} товаров</p>
        <ShowToggler isListActive={props.isListActive} />
      </div>
      <div>
        <p>sort</p>
        <p>show</p>
      </div>
    </div>
  );
};

type PropsType = {
  itemsCount: number;
  isListActive: boolean;
};
