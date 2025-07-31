import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import car1 from "../assets/car/car1.png";
import car2 from "../assets/car/car2.png";
import car3 from "../assets/car/car3.png";
import SearchBox from "./SearchBox";

const carImages = [car2, car1, car3 ];
const carNames = ["Mercedes Benz - 2.0", "Lamborghini Centenario", "Lamborghini Aventador"];

function HomeBanner({ banner_bg }) {
  const [carIndex, setCarIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCarIndex((prev) => (prev + 1) % carImages.length);
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-auto bg-center bg-cover"
      style={{ backgroundImage: `url(${banner_bg})` }}
    >
      <div className="w-full px-20 lg:px-10 md:px-5 sm:px-3 h-auto py-10 sm:py-2 pb-40 md:pb-6 sm:pb-5 content_body_bg flex md:flex-col sm:flex-col  justify-center relative">
        {/* Text Section */}
        <div className="w-[80%] lg:w-[135%] md:w-full sm:w-full h-auto mt-9 md:mt-5 lg:mt-5  z-10">
          <span className="text-2xl text-[#a1181d] font-bold">
            Export Auto Service ____
          </span>
          <h1 className="text-white lg:flex-nowrap text-6xl mt-5">{carNames[carIndex]}</h1>
          <p className="text-base w-3/4 md:w-full sm:w-full  text-gray-400 font-normal mt-7">
            Distinctively optimize web-enabled materials with functional
            markets. Intellectual capital with applications.
          </p>
          <ul className="md:flex items-center gap-5">
            <li className="flex items-center gap-2 mt-5 md:mt-3 text-white text-base font-normal">
              <Icon icon="gg:check-o" width="20" height="20" style={{ color: "#9ca3af" }} />
              <span className="text-gray-400">Leather Seats</span>
            </li>
            <li className="flex items-center gap-2 mt-3 text-white text-base font-normal">
              <Icon icon="gg:check-o" width="20" height="20" style={{ color: "#9ca3af" }} />
              <span className="text-gray-400">Sunroof / moonroof</span>
            </li>
            <li className="flex items-center gap-2 mt-3 text-white text-base font-normal">
              <Icon icon="gg:check-o" width="20" height="20" style={{ color: "#9ca3af" }} />
              <span className="text-gray-400">Heated Seats</span>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2 cursor-pointer hover:opacity-80 transition duration-300 ease-in-out">
            <Icon icon="mdi:arrow-right-thin-circle-outline" width="35" height="35" style={{ color: "#a1181d" }} />
            <span className="text-lg font-semibold text-gray-200">Explore More</span>
          </div>
        </div>

        {/* Car Image Slide-In */}
        <div className="w-1/2 md:w-full sm:w-full h-96 sm:h-60 flex items-center justify-center md:relative sm:relative ">
          <img
            key={carIndex} 
            src={carImages[carIndex]}
            alt="Car"
            className={`absolute w-2/3 md:w-full sm:w-full h-auto top-44 md:top-5 sm:top-6 lg:top-48 right-4 sm:right-0 transform transition-all duration-700 ease-out 
              ${fade ? "-translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          />
        </div>
       {/* SerchBox  */}
        <SearchBox/>

      </div>
    </div>
  );
}

export default HomeBanner;
