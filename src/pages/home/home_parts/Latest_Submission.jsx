import React, { useState, useEffect } from "react";
import ProductCart from "../../../components/product/ProductCart";
import HomeButton from "../../../utils/HomeButton";
import { useStaticData } from "../../../context/StaticData";
import { useNavigate } from "react-router-dom";

function Latest_Submission() {
  const navigate = useNavigate();
  const { carData  , cars} = useStaticData();
  const [activeFilter, setActiveFilter] = useState("latest");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleCarFilter = (type) => {
    const filtered = carData.filter((car) => car.type === type);
    setFilteredCars(filtered);
    setActiveFilter(type);
  };

  useEffect(() => {
    handleCarFilter(activeFilter);
  }, []);

  return (
    <div className="w-full h-auto pb-14 sm:pb-5 pt-14 sm:pt-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-red-700 pb-3">Latest Submission</p>
        <h2 className="text-3xl font-bold sm:text-center mb-4">
          Find the Best Deals For You
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="w-full flex justify-center items-center gap-10 sm:gap-y-4 flex-wrap">
        <HomeButton
          title={"Latest Car"}
          Icon={""}
          onClick={() => handleCarFilter("latest")}
          active={activeFilter === "latest"}
        />
        <HomeButton
          title={"Featured"}
          Icon={""}
          onClick={() => handleCarFilter("featured")}
          active={activeFilter === "featured"}
        />
        <HomeButton
          title={"Popular"}
          Icon={""}
          onClick={() => handleCarFilter("popular")}
          active={activeFilter === "popular"}
        />
      </div>

      {/* Filtered Cars with fade-in animation */}
      <div className="w-full h-auto mt-10 flex md:flex-col sm:flex-col justify-between items-center gap-4">
        {filteredCars?.length > 0 ? (
          filteredCars.map((car, index) => (
            // <div key={car.name + index} className="fade-in w-full">
              <ProductCart key={index} car={car} />
            // </div>
          ))
        ) : (
          <p className="fade-in text-gray-500 text-center w-full">
            No cars found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Latest_Submission;
