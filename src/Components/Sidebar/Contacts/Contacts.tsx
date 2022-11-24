import React from "react"
import phone from "./../../../assets/phone.png"
import instagram from "./../../../assets/instagram.png"
import global from "./../../../assets/global.png"
import style from "./Contacts.module.css"
import {NavLink} from "react-router-dom"

export const Contacts: React.FunctionComponent = () => {
    return <div className={style.contacts}>
        <img src={phone} alt={"call us"} className={style.contact}/>
        <img src={instagram} alt={"instagram"} className={style.contact}/>
        <NavLink to={"/"}>
            <img src={global} alt={"global"} className={style.contact}/>
        </NavLink>
    </div>
}
