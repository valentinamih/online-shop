import React from "react"
import {Category} from "./Category"
import style from "./Categories.module.css"
import {useDispatch} from "react-redux"
import {AppDispatch} from "../../../../redux/store"
import {setCategory} from "../../../../redux/searchSlice"
import {useGetCategoriesQuery} from "../../../../api/apiSlice"
import {CategoryType} from "../../../../types/types"


export const Categories: React.FunctionComponent<PropsType> = (props) => {
    const {data} = useGetCategoriesQuery()
    const dispatch = useDispatch<AppDispatch>()
    const showAllCategories = () => {
        dispatch(setCategory(null))
    }
    let categories
    if (data) {
        categories = data.map((item: CategoryType) => <Category
            pagination={props.pagination}
            code={item.code}
            name={item.name}
            key={item.code}/>)
    }
    return (
        <div className={style.categoriesContainer}>
            <b>Категории</b>
            <div>
                {categories}
            </div>
            <span className={style.showAll} onClick={() => {
                showAllCategories()
            }}>Все категории</span>
        </div>
    )
}

type PropsType = {
    pagination: (pageNumber: number) => void
}
