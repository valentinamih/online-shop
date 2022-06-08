import React from "react";
import { AppUseSelector } from "../../redux/appUseSelector";
import { productsSelector } from "../../redux/selectors/productsSelector";
import { ProductType } from "../../types/types";
import style from "./Home.module.css";
import { GridItem } from "./GridItem/GridItem";
import Masonry from "react-masonry-css";
import { NavLink } from "react-router-dom";

type PropsType = {};
export const Home: React.FunctionComponent<PropsType> = (props) => {
  let homePageProducts = AppUseSelector(productsSelector.homePageProducts);
  const breakpoints = {
    default: 3,
    800: 1,
  };
  let counter = 1;
  return (
    <div>
      <Masonry
        breakpointCols={breakpoints}
        className={style.masonryGrid}
        columnClassName={style.masonryGridColumn}
      >
        {homePageProducts.map((product: ProductType) => {
          let height = "";
          if (counter === 2 || counter === 9) {
            height = "70vh";
            counter++;
          } else if (counter === 1 || counter === 4) {
            height = "60vh";
            counter++;
          } else {
            height = "50vh";
            counter++;
          }
          return (
            <NavLink to={"/online-shop/product"} key={product.id}>
              <GridItem product={product} height={height} />
            </NavLink>
          );
        })}
      </Masonry>
    </div>
  );
};
