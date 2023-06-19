import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products/Products";
import Checkout from "./Pages/Products/Checkout";
import ProductDetails from "./Pages/Products/ProductDetails";

function PageContent() {
    return (
        <div className="body-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
export default PageContent;