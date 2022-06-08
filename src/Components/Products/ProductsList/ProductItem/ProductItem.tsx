import React from "react";
import { CartItem, ProductType } from "../../../../types/types";
import { PriceItem } from "../../../common/Price/PriceItem";
import { Rating } from "../../../Product/ProductDescription/Rating/Rating";
import cart from "./../../../../assets/cart.png";
import { addItemToCard } from "../../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { NavLink } from "react-router-dom";
import { setProduct } from "../../../../redux/productsSlice";
import ReactTooltip from "react-tooltip";

export const ProductItem: React.FunctionComponent<PropsType> = (props) => {
  let fooRef: any = null
  let count = 1;
  const dispatch = useDispatch<AppDispatch>();
  const onAddClick = () => {
    dispatch(setProduct(props.product));
    const product: CartItem = {
      product: props.product,
      count: count++,
    };
    debugger
    dispatch(addItemToCard(product));
    ReactTooltip.show(fooRef)
    setTimeout(() => {
      ReactTooltip.hide(fooRef)
    }, 4000)
  };
  const onProductNameClick = () => {
    dispatch(setProduct(props.product));
  };
    return (
    <div className={props.style.productItem}>
      <img
        src={props.product.listImages[0].content}
        className={props.style.productItemImage}
      />
      <div>
        <NavLink to={"/online-shop/product"}>
          {props.isProductsShowByList ? (
            <div>
              <span
                onClick={() => {
                  onProductNameClick();
                }}
                className={props.style.name}
              >
                {props.product.name}
              </span>
              <PriceItem
                price={props.product.price}
                color={"black"}
                fontSize={19}
              />
            </div>
          ) : (
            <div>
              <PriceItem
                price={props.product.price}
                color={"orange"}
                fontSize={19}
              />
              <span
                onClick={() => {
                  onProductNameClick();
                }}
              >
                {props.product.name}
              </span>
            </div>
          )}
        </NavLink>
      </div>
      <div className={props.style.itemOptions}>
        <Rating/>
        <div className={props.style.cartIconContainer}>
          <span ref={ref => fooRef = ref} data-tip='Товар добавлен в корзину'> </span>
          <img
              onClick={() => {
                onAddClick()
              }}
              src={cart}
              className={props.style.cartIcon}
              alt={"Add to cart"}
          />
        </div>
        <ReactTooltip eventOff={'click'} type={'success'} place={'left'} />
      </div>
    </div>
    );
};

type PropsType = {
  product: ProductType;
  style: { [key: string]: string };
  isProductsShowByList: boolean;
};
