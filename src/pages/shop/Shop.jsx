import React, { useState } from "react";
import Product from "./parts/Product";
import { useStaticData } from "../../context/StaticData";
import Topbar from "./parts/Topbar";
import Sidebar from "./parts/Sidebar";

function Shop() {
  const { cars } = useStaticData();
  const [selectStyle, setselectStyle] = useState("grid");
  const [productFilter, setproductFilter] = useState(cars);
  const [sort, setSort] = useState("Default");

  const parsePrice = (price) => {
    if (typeof price === "string") {
      return Number(price.replace(/[$,]/g, ""));
    }
    return typeof price === "number" ? price : 0;
  };

  const filterCars = (filters = {}) => {
    return cars.filter((car) => {
      const carPrice = parsePrice(car.price);

      const matchesBrand =
        !Array.isArray(filters.make) ||
        filters.make.length === 0 ||
        filters.make.includes(car.brand);

      const matchesColor =
        !Array.isArray(filters.colors) ||
        filters.colors.length === 0 ||
        filters.colors.includes(car.color);

      const matchesYear =
        !Array.isArray(filters.years) ||
        filters.years.length === 0 ||
        filters.years.includes(String(car.year));

      const matchesCategory =
        !Array.isArray(filters.categories) ||
        filters.categories.length === 0 ||
        filters.categories.includes(car.category);

      const matchesPrice =
        !Array.isArray(filters.price) ||
        filters.price.length === 0 ||
        filters.price.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return carPrice >= min && carPrice <= max;
        });

      const matchesSearch =
        !filters.search ||
        car.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.brand.toLowerCase().includes(filters.search.toLowerCase());

      return (
        matchesBrand &&
        matchesColor &&
        matchesYear &&
        matchesCategory &&
        matchesPrice &&
        matchesSearch
      );
    });
  };

  const sortCars = (carsArray, type) => {
    const sorted = [...carsArray];
    if (type === "Low to High") {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (type === "High to Low") {
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    return sorted;
  };

  const handleFilterProducts = (filters) => {
    const filtered = filterCars(filters);
    const sorted = sortCars(filtered, sort);
    setproductFilter(sorted);
  };

  const handleSort = (e) => {
    const selected = e.target.value;
    setSort(selected);
    const sorted = sortCars(productFilter, selected);
    setproductFilter(sorted);
  };

  return (
    <div className="w-full md:flex-col sm:flex-col h-auto px-4 lg:px-0 sm:px-0 md:px-0 pb-10 bg-slate-100 pt-10 flex justify-center items-start gap-4">
      <Sidebar FiletrProducts={handleFilterProducts} />
      <div className="w-3/4 md:w-full sm:w-full h-auto flex justify-between flex-wrap">
        <Topbar
          style={selectStyle}
          setstyle={setselectStyle}
          handlesort={handleSort}
          sort={sort}
        />
        {productFilter.length === 0 ? (
          <div className="text-center w-full py-10 text-gray-500">
            No cars match the selected filters.
          </div>
        ) : (
          productFilter.map((car, index) => (
            <div
              key={car.name + index}
              className={`${
                selectStyle === "grid" ? "w-[48%] sm:w-full" : "w-full"
              } fade-in mb-4`}
            >
              <Product car={car} sty={selectStyle} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;
