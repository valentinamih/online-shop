import React from "react";
import { ImagesType } from "../../../types/types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./ProductImages.module.css";

export const ProductImages: React.FunctionComponent<PropsType> = (props) => {
  return (
    <Carousel
      className={style.cardImagesContainer}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
      showIndicators={false}
    >
      <div>
        <img
          src="https://d2j6dbq0eux0bg.cloudfront.net/images/14574065/1396315945.jpg"
          className={style.cardImage}
        />
      </div>
      <div>
        <img
          src="https://www.arsenal-bt.ru/upload/iblock/2ab/2ab0cf3769ba0059c145180d35c2089d.jpg"
          className={style.cardImage}
        />
      </div>
      <div>
        <img
          src="https://first-bt.ru/images/detailed/9/1_j2hy-sx.jpg"
          className={style.cardImage}
        />
      </div>
    </Carousel>
  );
};

type PropsType = {
  images: Array<ImagesType> | null;
};
