import React, {useEffect} from "react";
import {ProductType} from "../../types/types";
import style from "./Home.module.css";
import {GridItem} from "./GridItem/GridItem";
import Masonry from "react-masonry-css";
import {NavLink} from "react-router-dom";
import {useFilterProductsMutation} from "../../api/apiSlice";
import {Loader} from "../common/Loader/Loader";

export const Home: React.FunctionComponent = () => {
    const [filterProducts, result] = useFilterProductsMutation()
    const getHomePageProducts = async () => {
        try {
            return await filterProducts({
                categoryCode: null,
                priceFrom: 0,
                priceTo: Infinity,
                colorCode: null,
                productName: "",
                pageNumber: 0,
                pageSize: 9
            }).unwrap().then(res => res)
        } catch (err) {
            console.error('Failed to get products: ', err)
        }
    }
    useEffect(  ()  => {
        getHomePageProducts().then(res => res)
    },[])
    const breakpoints = {
        default: 3,
        800: 1,
    };
    let counter = 1;
    return result.isLoading ? <Loader />: (
        <div>
            <Masonry
                breakpointCols={breakpoints}
                className={style.masonryGrid}
                columnClassName={style.masonryGridColumn}>
                {result.data  && result.data.content.map((product: ProductType) => {
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
                            <GridItem product={product} height={height}/>
                        </NavLink>
                    );
                })}
            </Masonry>
        </div>
    )
};
