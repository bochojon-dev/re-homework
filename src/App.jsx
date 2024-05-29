import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./router/home/Home";
import Cart from "./router/cart/Cart";
import Wishlist from "./router/wishlist/Wishlist";
import "./sass/style.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
};

export default App;
