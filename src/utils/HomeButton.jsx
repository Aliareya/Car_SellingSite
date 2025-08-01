import React from "react";
import { Icon } from "@iconify/react";

function HomeButton({ icon, title }) {
  return (
    <div className="relative group sm:w-full w-fit px-4 py-2 flex gap-2 rounded-lg overflow-hidden border-b-2 border-[#b91c1c] bg-gray-100">
      <div className="absolute inset-0 bg-[#b91c1c] rounded-b-md transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
      <Icon
        className="z-10"
        icon={icon}
        width="24"
        height="24"
        style={{ color: "#000" }}
      />
      <span className="text-lg font-semibold text-black group-hover:text-white z-10">
        {title}
      </span>
    </div>
  );
}

export default HomeButton;
