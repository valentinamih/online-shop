import style from "./Header.module.css";
import React from "react";
import { Logo } from "../common/Logo/Logo";

type PropsType = {};
export const Header: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
};
