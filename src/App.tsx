import React from "react";
import style from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { requestCategories } from "./redux/categoriesSlice";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { SubscribeSection } from "./components/SubscribeSection/SubscribeSection";
import { Footer } from "./components/Footer/Footer";
import { requestHomePageProducts } from "./redux/productsSlice";
import { ProductPage } from "./components/Product/ProductPage";
import { requestProducts } from "./redux/searchSlice";
import {Cart} from "./components/Cart/Cart";



type PropsType = {};
const App: React.FunctionComponent<PropsType> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(requestCategories());
  dispatch(requestHomePageProducts());
  dispatch(requestProducts());
  return (
    <div className={style.appWrapper}>
      <Header />
      <Sidebar />
      <div className={style.appWrapperContent}>
        <Routes>
          <Route path={"/online-shop/products"} element={<Products />} />
          <Route path={"/online-shop/"} element={<Home />} />
          <Route path={"/online-shop/product"} element={<ProductPage />} />
          <Route path={"/online-shop/checkout"} element={<div>checkout</div>} />
            <Route path={"/online-shop/cart"} element={<Cart />} />
        </Routes>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default App;
