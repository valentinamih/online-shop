import React from "react"
import style from "./App.module.css"
import {Header} from "./components/Header/Header"
import {Products} from "./components/Products/Products"
import {Sidebar} from "./components/Sidebar/Sidebar"
import {Route, Routes} from "react-router-dom"
import {Home} from "./components/Home/Home"
import {SubscribeSection} from "./components/SubscribeSection/SubscribeSection"
import {Footer} from "./components/Footer/Footer"
import {ProductPage} from "./components/Product/ProductPage"
import {Cart} from "./components/Cart/Cart"

const App: React.FunctionComponent = () => {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Sidebar/>
            <div className={style.appWrapperContent}>
                <Routes>
                    <Route path={"/online-shop/products"} element={<Products/>}/>
                    <Route path={"/online-shop/"} element={<Home/>}/>
                    <Route path={"/online-shop/product"} element={<ProductPage/>}/>
                    <Route path={"/online-shop/checkout"} element={<div>checkout</div>}/>
                    <Route path={"/online-shop/cart"} element={<Cart/>}/>
                </Routes>
            </div>
            <SubscribeSection/>
            <Footer/>
        </div>
    )
}

export default App
