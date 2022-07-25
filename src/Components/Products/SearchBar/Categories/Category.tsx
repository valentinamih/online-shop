import React from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store";
import {setCategory} from "../../../../redux/searchSlice";
import style from "./Categories.module.css";
import {AppUseSelector} from "../../../../redux/appUseSelector";
import {searchSelector} from "../../../../redux/selectors/searchSelector";

const classNames = require("classnames/bind");

let cx = classNames.bind(style);

export const Category: React.FunctionComponent<PropsType> = (props) => {
  const dispatch = useDispatch<AppDispatch>()
  const currentCategory = AppUseSelector(searchSelector.productsFilter)
  const onCategoryClick = () => {
    dispatch(setCategory(props.code))
  }
  return (
      <p
          onClick={() => {
            onCategoryClick()
          }}
          className={cx({
            categoryItem: true,
            active: currentCategory.categoryCode === props.code,
          })}>
        {props.name}
      </p>
  )
}

type PropsType = {
  code: string;
  name: string;
  pagination: (pageNumber: number) => void
};
