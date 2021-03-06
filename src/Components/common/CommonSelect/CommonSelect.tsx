import React from "react";
import style from './CommonSelect.module.css'
import Select from 'react-select'

export const CommonSelect: React.FunctionComponent<PropsType> = props => {
    const selectStyles = {
        container: (provided: any, state: any) => ({
            ...provided,
            width: props.width,

        }),
        menu: (provided: any, state: any) => ({
            ...provided,
            width: 'fit-content',
            overflowX: 'hidden',

        }),
        menuList: (provided: any, state: any) => ({
            ...provided,
            overflowX: 'hidden',
            border: state.isFocused ? '1px solid red' : '0',
        }),
        control: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: '#F5F7FAFF',
            borderRadius: '0',
            border: '0'
        }),
    }
    return <div className={style.selectContainer}>
        <p>
            {props.title}
        </p>
        <Select options={props.options}
                isSearchable={false}
                styles={selectStyles}
                placeholder={props.placeholder}
                onChange={(selectedOption: any) => {
                    props.onChange(selectedOption)
                }}/>
    </div>
}

interface PropsType  {
    onChange: (selectedOption: OptionsType) => void
    options: Array<OptionsType>
    title: string
    placeholder: string
    width: string
}
export interface OptionsType  {
    value: string
    label: string
}

