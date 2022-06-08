import React from "react";
import { AppUseSelector } from "../../../../redux/appUseSelector";
import { colorsSelector } from "../../../../redux/selectors/colorsSelector";
import { ColorType } from "../../../../types/types";
import style from "./Colors.module.css";

type PropsType = {};

export const Colors: React.FunctionComponent<PropsType> = (props) => {
  const colors = AppUseSelector(colorsSelector.colors);
  return (
    <div className={style.colorsContainer}>
      <b>Цвет</b>
      <div className={style.colors}>
        {colors.map((color: ColorType) => {
          return (
            <div
              key={color.id}
              className={style.color}
              style={{
                backgroundColor: color.code,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
