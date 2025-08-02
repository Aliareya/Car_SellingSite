import { u } from "framer-motion/client";
import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function SelectBox({label , opt}) {
  const location = useLocation().pathname;  
  return (
    <>
      <label
        htmlFor="brand"
        className={`${location === "/shop"? "text-base":"text-lg"} sm:text-base md:text-base font-semibold pl-1`}
      >
        {label || undefined}
      </label>
      <select className={`${location === "/shop"? "w-[60%]":"w-full"} capitalize h-10 text-sm font-normal border border-gray-200  rounded-md outline-none `}>
       {opt.map((item , index)=>{
        return(
          <option key={index} value={item}>{item}</option>
        )
       })}
      </select>
    </>
  );
}

export default SelectBox;
