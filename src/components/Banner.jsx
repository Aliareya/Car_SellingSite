import React from "react";
import bg from "../assets/images/texture-bg.png";
import pagebg from "../assets/images/page-bg.png";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation().pathname;
  const isHomePage = location === "/";
  const banner_bg = bg;
  return (
    <div className="w-full">
      {/* Banner for Home Page */}
      {isHomePage && (
        <div
          className="w-full h-auto bg-center bg-cover"
          style={{ backgroundImage: `url(${banner_bg})` }}
        >
          <div className="w-full h-[500px] content_body_bg"></div>
        </div>
      )}

      {/* {Banner for another oage} */}
      {!isHomePage && (
        <div
          className="w-full h-auto bg-center bg-cover"
          style={{ backgroundImage: `url(${banner_bg})` }}
        >
          <div className="w-full h-[280px] content_banner_bg bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">
              Welcome to Our Website
            </h1>
          </div>
        </div>
      )}


    </div>
  );
}

export default Banner;
