import React from "react";
import {CommonSelect, OptionsType} from "../../../../common/CommonSelect/CommonSelect";


export const PaginationSelect: React.FunctionComponent<PropsType> = props => {
    const options: Array<OptionsType> = [
        {value: '2', label: '2'},
        {value: '4', label: '4'}
    ]
    const changeProductsPerPage = (selectedOption: OptionsType) => {
        props.onPaginatorChange(Number(selectedOption.value))
    }
    return <div>
        <CommonSelect onChange={changeProductsPerPage}
                      options={options}
                      title={'Показать'}
                      placeholder={String(props.productsPerPage)}
                      width={'fit-content'}
        />
    </div>
}

type PropsType = {
    productsPerPage: number
    onPaginatorChange: React.Dispatch<React.SetStateAction<number>>
}