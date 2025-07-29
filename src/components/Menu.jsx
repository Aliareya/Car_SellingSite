import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Menu({setMobileMenuOpen}) {
  const [isLogin, setIsLogin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const menu = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  }



  return (
    <>
      {menu.map((item, index) => {
        return (
          <>
            {item.name === "Cart" ? (
              <li
                onClick={() => handleMenuClick(item.path)}
                key={index}
                className="relative sm:font-semibold md:font-semibold md:border-b sm:border-b border-gray-400 md:py-1 sm:py-1 text-base font-normal text-gray-200 md:text-black sm:text-black cursor-pointer transition"
              >
                <span className="hidden md:flex sm:flex">{item.name}</span>
                <Icon
                  className="flex md:hidden sm:hidden"
                  icon="mynaui:cart-solid"
                  width="24"
                  height="24"
                  style={{ color: "#d9e6e6" }}
                />
                {cartCount > 0 && (
                  <span className="md:hidden sm:hidden absolute -top-4 left-4 w-5 h-5 flex justify-center items-center font-bold text-[12px] p-0.5 bg-red-700 rounded-full">{cartCount}</span>
                )}
              </li>
            ) : (
              <li
                onClick={() => handleMenuClick(item.path)}
                key={index}
                className="sm:font-semibold md:font-semibold md:border-b sm:border-b border-gray-400 md:py-1 sm:py-1 text-base font-normal text-gray-200 md:text-black sm:text-black cursor-pointer transition"
              >
                {item.name}
              </li>
            )}
          </>
        );
      })}

      {/* new car item for menu */}
      <li
        onClick={() => handleMenuClick("/new")}
        className="flex justify-center md:justify-start sm:justify-start items-center gap-1 sm:font-semibold md:font-semibold md:border-b sm:border-b border-gray-400 md:py-1 sm:py-1 text-base font-normal text-gray-200 md:text-black sm:text-black cursor-pointer transition"
      >
        <span className="w-6 h-6 rounded-full bg-[#cd262c] p-1 flex justify-center items-center">
          <Icon
            icon="ic:outline-notifications"
            width="35"
            height="35"
            style={{ color: "#d9e6e6" }}
          />
        </span>
        New Car
      </li>

      {/* check if user login show profile if not login show login button */}
      {isLogin ? (
        <li className="ml-5 md:hidden sm:hidden">
          <span className="flex items-center w-6 h-7 relative justify-center bg-[#a1181d] rounded-full cursor-pointer transition hover:bg-[#c71b1f]">
            <Icon
              className="absolute"
              icon="fa-solid:user-circle"
              width="35"
              height="35"
              style={{ color: "#d9e6e6" }}
            />
          </span>
        </li>
      ) : (
        <li
          onClick={() => setIsLogin(!isLogin)}
          className="text-base font-normal text-gray-100  bg-[#a1181d] px-4 py-1 rounded-md transition cursor-pointer"
        >
          Login
        </li>
      )}
    </>
  );
}

export default Menu;
