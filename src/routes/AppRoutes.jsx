import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// import pages
import Home from "../pages/Home";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
