import React from "react";
import { Icon } from "@iconify/react";

function HomeButton({ icon, title, onClick, active }) {
  return (
    <div
      onClick={onClick ? onClick : undefined}
      className={`cursor-pointer relative group sm:w-full w-fit px-4 py-2 flex gap-2 rounded-lg overflow-hidden border-b-2  border-[#b91c1c] transition-colors duration-300 ease-in-out ${
        active ? " bg-[#b91c1c]" : " bg-gray-100"
      }`}
    >
      <Icon
        className="z-10"
        icon={icon || undefined}
        width="24"
        height="24"
        style={{ color: active ? "#fff" : "#000" }}
      />
      <span
        className={`text-lg font-semibold z-10 ${
          active ? "text-white" : "text-black "
        }`}
      >
        {title}
      </span>
    </div>
  );
}

export default HomeButton;
