import style from "./Products.module.css";
import React, {useEffect} from "react";
import {SearchBar} from "./SearchBar/SearchBar";
import {ProductsList} from "./ProductsList/ProductsList";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {setPageNumber} from "../../redux/searchSlice";
import {useFilterProductsMutation} from "../../api/apiSlice";
import {searchSelector} from "../../redux/selectors/searchSelector";
import {Loader} from "../common/Loader/Loader";

export const Products: React.FunctionComponent = () => {
    const dispatch = useDispatch<AppDispatch>()
    const pagination = (pageNumber: number) => {
        dispatch(setPageNumber(pageNumber - 1))
        getProducts()
        //fix pagination
    }
    let [filterProducts, result] = useFilterProductsMutation()
    let productsFilter = useSelector(searchSelector.productsFilter)
    let products: any = {}
    const getProducts = async () => {
        try {
            await filterProducts(productsFilter).then(res => res)
        } catch (err) {
            console.error('Failed to get products: ', err)
        }
        return await result
    }

    useEffect( () => {
         getProducts().then(res => products = res)
    }, [productsFilter])
    return <div className={style.products}>
        <SearchBar pagination={pagination} getProducts={getProducts}/>
        {result.isLoading ? <Loader /> :
            result.data && <ProductsList pagination={pagination}
                                         products={result.data.content}
                                         totalCount={result.data.totalElements}
                                         getProducts={getProducts}/>}
    </div>
}
