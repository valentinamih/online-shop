import React from "react";
import {CommonSelect, OptionsType} from "../../../../common/CommonSelect/CommonSelect";

export const SortSelect: React.FunctionComponent<PropsType> = (props) => {
    const sortOptions = [
        {value: 'name', label: 'названию'},
        {value: 'price', label: 'цене (по возрастанию)'},
        {value: 'priceDown', label: 'цене (по убыванию)'}
    ]
    const sortOnChange = (selectedOption: OptionsType) => {
        return
    }
    return <div>
        <CommonSelect options={sortOptions}
                      onChange={sortOnChange}
                      title={'Сортировать по'}
                      placeholder={'выбрать'}
                      width={'200px'}/>
    </div>
}

interface PropsType {
    getProducts: () => void
}