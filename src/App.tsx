import React from "react";
import style from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { Products } from "./Components/Products/Products";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { requestCategories } from "./redux/categoriesSlice";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { SubscribeSection } from "./Components/SubscribeSection/SubscribeSection";
import { Footer } from "./Components/Footer/Footer";
import { requestHomePageProducts } from "./redux/productsSlice";
import { ProductPage } from "./Components/Product/ProductPage";
import { requestProducts } from "./redux/searchSlice";
import {Cart} from "./Components/Cart/Cart";



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
