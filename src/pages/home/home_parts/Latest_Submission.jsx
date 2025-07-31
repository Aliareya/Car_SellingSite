import React from "react";
import { Icon } from "@iconify/react";
import ProductCart from "../../../components/product/ProductCart";
import car3 from "../../../assets/product/car1.jpg";
import car2 from "../../../assets/product/car2.jpg";
import car1 from "../../../assets/product/car3.jpg";


// cars data
const carListings = [
  {
    name: "Mercedes-Benz",
    listedBy: "Car House",
    engine: "120cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2018,
    type: "car",
    price: "$174,900",
    image: car1
  },
  {
    name: "Mazda MX Miata",
    listedBy: "Car House",
    engine: "120cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2012,
    type: "car",
    price: "$140,900",
    image: car2
  },
  {
    name: "Camz Ferrari Portofino",
    listedBy: "Car House",
    engine: "120cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2010,
    type: "car",
    price: "$450,900",
    image: car3
  },
];


function Latest_Submission() {
  return (
    <div className="w-full h-auto pb-20 sm:pb-5 pt-16 sm:pt-10 ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-red-700 pb-3">Latest Submission</p>
        <h2 className="text-3xl font-bold sm:text-center  mb-4">
          Find the Best Deals For You
        </h2>
      </div>

      <div className="w-full flex justify-center sm:justify-center items-center gap-10 sm:gap-y-4  flex-wrap ">
        <div className="relative group w-fit px-4 py-2 flex gap-2 rounded-lg overflow-hidden border-y-2 border-[#b91c1c] bg-gray-100">
          <div className="absolute inset-0 bg-[#b91c1c] rounded-b-md transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          <span className="text-lg font-semibold text-black group-hover:text-white z-10">
            Latest Car
          </span>
        </div>
        <div className="relative group w-fit px-4 py-2 flex gap-2 rounded-lg overflow-hidden border-y-2 border-[#b91c1c] bg-gray-100">
          <div className="absolute inset-0 bg-[#b91c1c] rounded-b-md transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          <span className="text-lg font-semibold text-black group-hover:text-white z-10">
            Featured
          </span>
        </div>
        <div className="relative group w-fit px-4 py-2 flex gap-2 rounded-lg overflow-hidden border-y-2 border-[#b91c1c] bg-gray-100">
          <div className="absolute inset-0 bg-[#b91c1c] rounded-b-md transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
          <span className="text-lg font-semibold text-black group-hover:text-white z-10">
            Popular
          </span>
        </div>
      </div>

      <div className="w-full h-auto mt-10 flex md:flex-col sm:flex-col justify-between items-center gap-4">
        {carListings.map((car, index) => {
          return <ProductCart key={index} car={car} />;
        })}
      </div>
    </div>
  );
}

export default Latest_Submission;
