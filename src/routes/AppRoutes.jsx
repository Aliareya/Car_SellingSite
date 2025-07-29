import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// import pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Newcar from "../pages/Newcar";
import Wishlist from "../pages/Wishlist";
import Notfound from "../pages/Notfound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/new" element={<Newcar/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
