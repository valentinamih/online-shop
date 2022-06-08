import React from "react";
import { Category } from "./Category";
import { AppUseSelector } from "../../../../redux/appUseSelector";
import { categoriesSelector } from "../../../../redux/selectors/categoriesSelector";
import style from "./Categories.module.css";

export const Categories: React.FunctionComponent<PropsType> = (props) => {
  const categories = AppUseSelector(categoriesSelector.categories);
  return (
    <div className={style.categoriesContainer}>
      <b>Категории</b>
      <div>
        {categories.map((category) => {
          return (
            <Category
              code={category.code}
              name={category.name}
              key={category.code}
            />
          );
        })}
      </div>
    </div>
  );
};

type PropsType = {};
