import React from "react";
import Search from "../../../utils/Search";
import FilterCart from "./FilterCart";
import { useShopData } from "../../../context/ShopData";
import { useState } from "react";


function Sidebar({setproductFilter ,productFilter}) {
  const { year, category, color, brands, price } = useShopData();;
  
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectPrice, setSelectPrice] = useState([]);
  
  const handleMakeChange = (selected) => setSelectedMakes(selected);
  const handleColorChange = (selected) => setSelectedColors(selected);
  const handleYearChange = (selected) => setSelectedYears(selected);
  const handleCategoryChange = (selected) => setSelectedCategories(selected);
  const handlePriceChange = (selected) => setSelectPrice(selected);
  
  const handleSearchChange = (event) => {
    console.log("Search:", event.target.value);
  };
 
  const FiletrProducts = () => {
    setproductFilter({
      "make" : selectedMakes ,
      "colors:": selectedColors,
      "years:" : selectedYears ,
      "categories:": selectedCategories,
      "price": selectPrice
    });
  };

  return (
    <div className="w-1/4 md:w-full sm:w-full h-auto bg-white rounded-lg shadow-md p-5">
      <div className="w-full h-fit">
        <h1 className="text-base font-bold">What Are You Looking For</h1>
        <div className="w-full flex h-9 bg-slate-100 rounded-lg items-center justify-between px-2 mt-4">
          <Search search={handleSearchChange} />
        </div>

        <div className="w-full h-auto pb-5 flex flex-col gap-1 mt-5">
          <FilterCart
            filtername={"Make"}
            options={brands}
            selectedOptions={selectedMakes}
            onSelectionChange={handleMakeChange}
          />
          <FilterCart
            filtername={"Price"}
            options={price}
            selectedOptions={selectPrice}
            onSelectionChange={handlePriceChange}
          />
          <FilterCart
            filtername={"Color"}
            options={color}
            selectedOptions={selectedColors}
            onSelectionChange={handleColorChange}
          />
          <FilterCart
            filtername={"Year"}
            options={year}
            selectedOptions={selectedYears}
            onSelectionChange={handleYearChange}
          />
          <FilterCart
            filtername={"Category"}
            options={category}
            selectedOptions={selectedCategories}
            onSelectionChange={handleCategoryChange}
          />
          <div className="w-full h-10 flex items-center justify-center mt-5">
            <button
              onClick={FiletrProducts}
              className="hover:bg-red-700  w-full h-full text-white bg-black rounded-lg"
            >
              Filter Resulte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
