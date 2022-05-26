import React from 'react';
import style from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Products} from "./Components/Products/Products";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {requestCategories} from "./redux/categoriesSlice";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./redux/store";
import {SubscribeSection} from "./Components/SubscribeSection/SubscribeSection";
import {Footer} from "./Components/Footer/Footer";
import {requestHomePageProducts} from "./redux/productsSlice";
import {Product} from "./Components/Product/Product";
import {AppUseSelector} from "./redux/appUseSelector";
import {productsSelector} from "./redux/selectors/productsSelector";

type PropsType = {}
const App: React.FunctionComponent<PropsType> = (props) => {
    useDispatch<AppDispatch>()(requestCategories())
    useDispatch<AppDispatch>()(requestHomePageProducts())
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Sidebar/>
            <div className={style.appWrapperContent}>
                <Routes>
                    <Route path={'/products'} element={<Products/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/product'} element={<Product />} />
                </Routes>
            </div>
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default App;
