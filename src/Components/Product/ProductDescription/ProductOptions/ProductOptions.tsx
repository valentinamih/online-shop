import React, { useState } from "react";
import style from "./ProductOptions.module.css";
import { Counter } from "../../../common/Counter/Counter";
import { Button } from "../../../common/Button/Button";
import { CartItem, ProductType } from "../../../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { addItemToCard } from "../../../../redux/cartSlice";

export const ProductOptions: React.FunctionComponent<PropsType> = (props) => {
  let [count, setCount] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const addProduct = () => {
    const product: CartItem = {
      product: props.product,
      count: count,
    };
    dispatch(addItemToCard(product));
  };
  return (
    <div className={style.productOptions}>
      <Counter
        count={count}
        increment={() => setCount(++count)}
        decrement={() => setCount(--count)}
      />
      <Button
        title={"Добавить в корзину"}
        onClickFunction={() => {
          addProduct();
        }}
        type={"button"}
      />
    </div>
  );
};

type PropsType = {
  product: ProductType;
};
