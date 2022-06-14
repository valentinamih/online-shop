import React from "react";
import style from "./Counter.module.css";

export const Counter: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={style.countBox}>
      <input className={style.count} type="text" value={props.count} onChange={() => {}}/>
      <div className={style.countArrowsContainer}>
        <div
          className={style.countArrow}
          onClick={() => {
            props.increment();
          }}
        >
          ▲
        </div>
        <div
          className={style.countArrow}
          onClick={() => {
            props.decrement();
          }}
        >
          ▼
        </div>
      </div>
    </div>
  );
};

type PropsType = {
  increment: () => void;
  decrement: () => void;
  count: number;
};
