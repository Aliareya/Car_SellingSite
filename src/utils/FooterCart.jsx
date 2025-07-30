import React from "react";

function FooterCart({ list, lable }) {
  return (
      <div className={`${lable ==="Quick links" ?"sm:hidden":""} w-[32%] sm:w-[170px] h-72 `}>
        <h1 className="text-xl font-bold text-white">{lable}</h1>
        <ul className="mt-3 flex flex-col gap-2">
          {list.map((item, index) => {
            return (
              <li
                key={index}
                className="hover:pl-1 hover:text-red-700 transition-all duration-300 cursor-pointer ease-in-out list-none text-gray-500 text-sm"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export default FooterCart;
