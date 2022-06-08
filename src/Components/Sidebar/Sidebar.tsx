import style from "./Sidebar.module.css";
import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Contacts } from "./Contacts/Contacts";
import SidebarNavigationStyle from "./SidebarNavigation.module.css";
import { Button } from "../common/Button/Button";

type PropsType = {};
export const Sidebar: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={style.sidebar}>
      <Navigation style={SidebarNavigationStyle} />
      <Button type={"button"} title={"%Скидки%"} onClickFunction={() => {}} />
      <Button type={"button"} title={"Новинки"} onClickFunction={() => {}} />
      <Contacts />
    </div>
  );
};
