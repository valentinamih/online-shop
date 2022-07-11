import React from "react";
import style from "./Footer.module.css";
import {Logo} from "../common/Logo/Logo";
import {Navigation} from "../Navigation/Navigation";
import footerNavigationStyle from "./FooterNavigation.module.css";

export const Footer: React.FunctionComponent = () => {
    return (
        <div className={style.footerContainer}>
            <footer className={style.footer}>
                <div className={style.footerLogo}>
                    <Logo/>
                    <span>
            You can visit my{" "}<a href={"https://github.com/valentinamih"}>github</a> account for code
          </span>
                </div>
                <div className={style.footerNavigation}>
                    <Navigation style={footerNavigationStyle}/>
                </div>
            </footer>
        </div>
    );
};

