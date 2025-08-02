import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, Routes, useLocation } from "react-router-dom";
import Banner from "../components/Banner";

function MainLayout() {
  const location = useLocation().pathname;
  const isHomePage = location === "/" || location === "/home";
  return (
    <div className="w-full bg-center" >
      <div className="w-full  h-20 bg-[#171717] border-b border-[#2e3032] sticky top-0 z-50">
        <Header />
      </div>
      <div className="">
        <Banner/>
      </div>
      <div className={`${isHomePage ? "" :"bg-slate-100"} w-full px-16 sm:px-2 md:px-5 lg:px-10`}>
        <Outlet />
      </div>
      <div className="w-full px-20 sm:px-3 md:px-5 lg:px-10 py-5 bg-zinc-900">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
