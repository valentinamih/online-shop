import React from "react";
import { Category } from "./Category";
import { AppUseSelector } from "../../../../redux/appUseSelector";
import { categoriesSelector } from "../../../../redux/selectors/categoriesSelector";
import style from "./Categories.module.css";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {requestProducts, setCategory} from "../../../../redux/searchSlice";

export const Categories: React.FunctionComponent<PropsType> = (props) => {
  const categories = AppUseSelector(categoriesSelector.categories);
  const dispatch = useDispatch<AppDispatch>();
  const showAllCategories = () => {
      dispatch(setCategory(null));
      dispatch(requestProducts());
  }
  return (
    <div className={style.categoriesContainer}>
      <b>Категории</b>
      <div>
        {categories.map((category) => {
          return (
            <Category
              pagination={props.pagination}
              code={category.code}
              name={category.name}
              key={category.code}
            />
          );
        })}
      </div>
        <span className={style.showAll} onClick={() => {
            showAllCategories()
        }}>Все категории</span>
    </div>
  );
};

type PropsType = {
    pagination: (pageNumber: number) => void
};
