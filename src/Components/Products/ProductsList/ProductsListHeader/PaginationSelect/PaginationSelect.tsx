import React from "react";
import {CommonSelect, OptionsType} from "../../../../common/CommonSelect/CommonSelect";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../../redux/store";
import {requestProducts, setPageSize} from "../../../../../redux/searchSlice";
import {AppUseSelector} from "../../../../../redux/appUseSelector";
import {searchSelector} from "../../../../../redux/selectors/searchSelector";

export const PaginationSelect: React.FunctionComponent = () => {
    let pageSize = AppUseSelector(searchSelector.pageSize)
    const dispatch = useDispatch<AppDispatch>();
    const options: Array<OptionsType> = [
        {value: '6', label: '6'},
        {value: '12', label: '12'}
    ]
    const changeProductsPerPage = (selectedOption: OptionsType) => {
        dispatch(setPageSize(Number(selectedOption.value)))
        dispatch(requestProducts())
    }
    return <div>
        <CommonSelect onChange={changeProductsPerPage}
                      options={options}
                      title={'Показать'}
                      placeholder={String(pageSize)}
                      width={'fit-content'}/>
    </div>
}
