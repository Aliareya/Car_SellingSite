import React, { useState } from "react";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import { Icon } from "@iconify/react";
import Menu from "./Menu";

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [mobailMenuOpen, setMobileMenuOpen] = useState(false);
  const SocialInfo = [
    { icon: "gg:facebook" },
    { icon: "line-md:instagram" },
    { icon: "fa-brands:linkedin-in" },
    { icon: "ri:twitter-fill" },
    { icon: "lucide:youtube" },
  ];
  return (
    <div className="w-full h-20 px-20 sm:px-3 md:px-5 lg:px-10 flex justify-between items-center ">
      <div className="w-/[55%">
        <img src={logo} className="w-40 h-10" alt="" />
      </div>
      {/* Navigation Menu for disktop */}
      <ul className="md:hidden sm:hidden flex justify-end gap-7 items-center text-sm font-[600]">
        <Menu setMobileMenuOpen={setMobileMenuOpen}/>
      </ul>

      {/* Mobile Menu (optional placeholder) */}
      <div className="hidden md:flex sm:flex items-center gap-5">
        {/* {user icon for profile} */}
        {isLogin && (
          <li className="ml-5 hidden md:flex sm:flex">
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
        )}

        {/* hamberger icom for mobail topbar */}
        <Icon
          onClick={() => setMobileMenuOpen(!mobailMenuOpen)}
          icon="iconamoon:menu-burger-horizontal-bold"
          width="24"
          height="24"
          style={{ color: " #d9e6e6" }}
        />
      </div>

      {/** menu for mobail */}
      <div
        className={`
          fixed top-0 left-0 h-screen z-50 bg-gray-200 overflow-y-auto
          px-3 py-5 sm:w-[65%] md:w-[40%]
          transition-transform duration-300 ease-in-out
          ${mobailMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* close icon for mobail menu */}
        <div className="flex justify-end mb-3">
          <Icon
            onClick={() => setMobileMenuOpen(false)}
            icon="qlementine-icons:close-12"
            width="30"
            height="30"
            style={{ color: "#000" }}
          />
        </div>


        {/* logo for mobail menu */}
        <div className="w-full px-5 rounded-lg flex p-5 justify-between items-center bg-black">
          <img src={logo} className="h-16" alt="Logo" />
        </div>

        {/* mobail menu item */}
        <ul className="flex flex-col gap-4 py-5">
          <Menu setMobileMenuOpen={setMobileMenuOpen}/>
        </ul>

        {/* contact info for mobail menu */}
        <div className="w-full flex flex-col ">
          <h1 className="text-2xl font-bold text-center pb-4">Contact Info</h1>
          <p className="text-sm font-medium pt-2">
            Chicago 12, Melborne City, USA
          </p>
          <p className="text-sm font-medium pt-2">+8801682648101</p>
          <p className="text-sm font-medium pt-2">info@example.com</p>
        </div>

        {/* Socilas icons for mobil menu */}
        <div className="w-full flex justify-between items-center mt-7 gap-1">
          {SocialInfo.map((item, index) => {
            return (
              <span
                key={index}
                className="w-9 h-9 flex justify-center items-center rounded-full border border-gray-500"
              >
                <Icon
                  icon={item.icon}
                  width="22"
                  height="22"
                  style={{ color: "#b91c1c" }}
                />
              </span>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Header;
