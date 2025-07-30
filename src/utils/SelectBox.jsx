import React from "react";

function SelectBox({label , opt}) {
  return (
    <>
      <label
        htmlFor="brand"
        className="text-lg sm:text-base md:text-base font-semibold pl-1"
      >
        {label}
      </label>
      <select className="w-full capitalize h-10 text-sm font-normal border border-gray-200  rounded-md outline-none ">
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
