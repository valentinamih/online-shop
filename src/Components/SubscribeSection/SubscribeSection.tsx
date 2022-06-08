import React from "react";
import style from "./SubscribeSection.module.css";
import { SubscribeForm } from "./SubscribeForm/SubscribeForm";

export const SubscribeSection: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div className={style.subscribeSectionContainer}>
      <section className={style.subscribeSection}>
        <div className={style.subscribeMessage}>
          <h2 className={style.subscribeHeader}>
            Подпишитесь и получите <span>скидку 25%</span>
          </h2>
          <span className={style.subscribeDescription}>
            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
            amet mi vulputate consectetur. Donec auctor interdum purus, ac
            finibus massa bibendum nec.
          </span>
        </div>
        <div className={style.subscribeForm}>
          <SubscribeForm />
        </div>
      </section>
    </div>
  );
};

type PropsType = {};
