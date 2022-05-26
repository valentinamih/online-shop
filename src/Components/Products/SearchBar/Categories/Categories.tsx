import React, {useState} from "react";
import {categoriesSelector} from "../../../../redux/selectors/categoriesSelector";
import {Category} from "./Category";
import {AppUseSelector} from "../../../../redux/appUseSelector";

type PropsType = {}

export const Categories: React.FunctionComponent<PropsType> = (props) => {
    const categories = AppUseSelector(categoriesSelector.categories)
    const [isCategoriesShow, toggleShowCategories] = useState(false)
    return <div>
        <p onClick={() => toggleShowCategories(!isCategoriesShow)}>Категории</p>
        {isCategoriesShow ? <div>
            {categories.map(category => {
                return <Category code={category.code} name={category.name} key={category.code}/>
            })}
            <p>
                Сбросить
            </p>
        </div> : null}
    </div>
}