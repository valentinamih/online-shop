import React from "react";
import {CommonSelect, OptionsType} from "../../../../common/CommonSelect/CommonSelect";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../../redux/store";
import {setPageSize} from "../../../../../redux/searchSlice";
import {AppUseSelector} from "../../../../../redux/appUseSelector";
import {searchSelector} from "../../../../../redux/selectors/searchSelector";

export const PaginationSelect: React.FunctionComponent<PropsType> = (props) => {
    let pageSize = AppUseSelector(searchSelector.productsFilter).pageSize
    const dispatch = useDispatch<AppDispatch>();
    const options: Array<OptionsType> = [
        {value: '6', label: '6'},
        {value: '12', label: '12'}
    ]
    const onSetPageSize = (selectedOption: OptionsType) => new Promise((resolve: any) => {
        dispatch(setPageSize(Number(selectedOption.value)))
        resolve()
    })
    const changeProductsPerPage = (selectedOption: OptionsType) => {
        onSetPageSize(selectedOption).then(() => props.getProducts())
    }
    return <div>
        <CommonSelect onChange={changeProductsPerPage}
                      options={options}
                      title={'Показать'}
                      placeholder={String(pageSize)}
                      width={'fit-content'}/>
    </div>
}

interface PropsType {
    getProducts: () => void
}
