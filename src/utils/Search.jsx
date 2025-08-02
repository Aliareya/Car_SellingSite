import React from "react";
import { Icon } from "@iconify/react";

function Search({ search }) {
  return (
    <>
      <input
        onChange={(e) => search(e.target.value)}
        placeholder="Search for products"
        type="text"
        className="placeholder-gray-400 text-sm w-11/12 h-8 bg-slate-100 outline-none border-none"
      />
      <Icon
        icon="fluent:search-12-filled"
        width="24"
        height="24"
        style={{ color: "#000" }}
      />
    </>
  );
}

export default Search;
