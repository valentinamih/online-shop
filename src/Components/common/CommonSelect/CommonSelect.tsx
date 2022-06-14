import React from "react";
import style from './CommonSelect.module.css'
import Select from 'react-select'

export const CommonSelect: React.FunctionComponent<PropsType> = props => {
    const selectStyles = {
        option: (provided: any, state: any ) => ({
            backgroundColor: state.isFocused? '#cecdcd' : '#F5F7FAFF',
            cursor: 'pointer',
            color: state.isSelected ? 'orange' : 'black',
            width: 'fill-content',
            padding: '5px 10px',
        }),
        container: (provided: any, state: any ) => ({
            ...provided,
            width: props.width,

        }),
        menu: (provided: any, state: any ) => ({
            ...provided,
            width: 'fit-content',
            overflowX: 'hidden',

        }),
        menuList: (provided: any, state: any ) => ({
            ...provided,
            overflowX: 'hidden',
            border: state.isFocused  ? '1px solid red' : '0',
        }),
        control: (provided: any, state: any ) => ({
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
                onChange={(selectedOption: any) => {props.onChange(selectedOption)}} />
    </div>
}


type PropsType = {
    onChange: (selectedOption: OptionsType) => void
    options: Array<OptionsType>
    title: string
    placeholder: string
    width: string
}
export type OptionsType = {
    value: string
    label: string
}

