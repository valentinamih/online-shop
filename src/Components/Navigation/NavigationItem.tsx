import React from "react";
import {NavLink} from "react-router-dom";
import {useScrollTo} from "react-use-window-scroll";


export const NavigationItem: React.FunctionComponent<PropsType> = (props) => {
    const scrollTo = useScrollTo();
    return  <li className={props.style.navigationItem}>
        <NavLink to={props.link} onClick={() => {scrollTo({ top: 0, left: 0, behavior: "smooth" })}} className={({ isActive }) => isActive ? props.style.active : ''}>
            {props.title}
        </NavLink>
    </li>
}

type PropsType = {
    link: string
    title: string
    style: any
}