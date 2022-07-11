import React from "react";
import style from './Paginator.module.css'
import classNames from "classnames/bind";

let cx = classNames.bind(style);

export const Paginator: React.FunctionComponent<PropsType> = ({
                                                                  totalProductsCount,
                                                                  productsPerPage,
                                                                  pagination,
                                                                  currentPage
                                                              }) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalProductsCount / productsPerPage); i++) {
        pages.push(i)
    }
    return <div className={style.paginatorContainer}>
        {pages.map((page) => {
            return <div onClick={() => pagination(page)} key={page} className={cx({
                paginatorItem: true,
                active: currentPage + 1 === page
            })}>
                {page}
            </div>
        })}
    </div>
}

interface PropsType {
    currentPage: number
    productsPerPage: number
    pagination: (pageNumber: number) => void
    totalProductsCount: number
}