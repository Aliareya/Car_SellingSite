import React, { useState } from "react";
import Search from "../../utils/Search";
import FilterCart from "./parts/FilterCart";
import { useShopData } from "../../context/ShopData";
import Product from "./parts/Product";
import { useStaticData } from "../../context/StaticData";
import SelectBox from "../../utils/SelectBox";
import { Icon } from "@iconify/react";
import Topbar from "./parts/Topbar";
import Sidebar from "./parts/Sidebar";

function Shop() {
  const { carData } = useStaticData();
  const [selectStyle, setselectStyle] = useState("grid");
  const [productFilter, setproductFilter] = useState([]);
  console.log(productFilter);

  return (
    <div className="w-full md:flex-col sm:flex-col h-auto px-4 lg:px-0 sm:px-0 md:px-0 pb-10 bg-slate-100 pt-10 flex justify-center items-start gap-4">
      <Sidebar
        setproductFilter={setproductFilter}
        productFilter={productFilter}
      />
      <div className="w-3/4 md:w-full sm:w-full h-auto flex justify-between flex-wrap">
        <Topbar style={selectStyle} setstyle={setselectStyle} />

        {carData.map((car, index) => (
          <div
            key={car.name + index}
            className={`${
              selectStyle === "grid" ? "w-[48%] sm:w-full" : "w-full"
            } fade-in mb-4`}
          >
            <Product car={car} sty={selectStyle}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
