import React from "react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import style from "./ProductImages.module.css"
import {ImageType, ProductType} from "../../../types/types"
import {baseImagesUrl} from "../../../api/products-api"

export const ProductImages: React.FunctionComponent<PropsType> = (props) => {
    return <Carousel
        className={style.cardImagesContainer}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
        showIndicators={false}>
        {props.product.cardImages.map((image: ImageType) => {
            return <img
                key={image.name}
                src={baseImagesUrl + image.name}
                className={style.cardImage}/>
        })}
    </Carousel>
}

interface PropsType {
    product: ProductType
    id: number
}
