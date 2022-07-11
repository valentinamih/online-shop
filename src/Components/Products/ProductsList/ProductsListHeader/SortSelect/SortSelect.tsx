import React from "react";
import {CommonSelect, OptionsType} from "../../../../common/CommonSelect/CommonSelect";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../../redux/store";
import {Filter, ProductType} from "../../../../../types/types";
import {sortProducts} from "../../../../../redux/searchSlice";

export const SortSelect: React.FunctionComponent = () => {
    const dispatch = useDispatch<AppDispatch>()
    const sort = (filter: Filter) => {
        dispatch(sortProducts(filter))
    }
    const sortOptions = [
        {value: 'name', label: 'названию'},
        {value: 'price', label: 'цене (по возрастанию)'},
        {value: 'priceDown', label: 'цене (по убыванию)'}
    ]
    const sortOnChange = (selectedOption: OptionsType) => {
        if (selectedOption) {
            if (selectedOption.value === 'priceDown') {
                sort({
                    filter: (product: ProductType) => {
                        return product.price
                    },
                    condition: 'reverse'
                })
            } else if (selectedOption.value === 'price') {
                sort({
                    filter: (product: ProductType) => {
                        return product.price
                    }
                })
            } else {
                sort({
                    filter: (product: ProductType) => {
                        return product.name
                    }
                })
            }
        }
    }
    return <div>
        <CommonSelect options={sortOptions}
                      onChange={sortOnChange}
                      title={'Сортировать по'}
                      placeholder={'выбрать'}
                      width={'200px'}/>
    </div>
}
