import React, { useEffect, useState } from "react";
import HomeButton from "../utils/HomeButton";
import FAQCart from "./FAQCart";
import { useStaticData } from "../context/StaticData";

function FAQs() {
  const { questionsData } = useStaticData();
  const [activeFilter, setActiveFilter] = useState("General Questions");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const initialFiltered = questionsData.filter(
      (item) => item.type === activeFilter
    );
    setFilteredQuestions(initialFiltered);
  }, [questionsData, activeFilter]);

  const handleFilter = (type) => {
    setActiveFilter(type);
  };

  return (
    <div className="w-full h-auto pb-14 sm:pb-10 pt-0 sm:pt-10 ">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-red-700 pb-3">FAQs</p>
        <h2 className="text-3xl font-bold sm:text-center mb-4">
          Frequently Ask Question
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="w-full flex justify-center items-center gap-10 sm:gap-5 flex-wrap">
        <HomeButton
          active={activeFilter === "General Questions"}
          onClick={() => handleFilter("General Questions")}
          icon="flowbite:users-group-outline"
          title="General Questions"
        />
        <HomeButton
          active={activeFilter === "Car Features"}
          onClick={() => handleFilter("Car Features")}
          icon="ix:car"
          title="Car Features"
        />
        <HomeButton
          active={activeFilter === "Technical Support"}
          onClick={() => handleFilter("Technical Support")}
          icon="icons8:support"
          title="Technical Support"
        />
      </div>

      {/* Display Filtered Questions */}
      <div className="w-full md:flex-col sm:flex-col sm:mt-5 mt-10 flex gap-5 justify-center items-start md:items-center">
        {filteredQuestions.length > 0 ? (
          <>
            <div className="w-[45%] lg:w-1/2 md:w-[92%] sm:w-full h-fit">
              {filteredQuestions
                .slice(0, Math.ceil(filteredQuestions.length / 2))
                .map((item, index) => (
                  <FAQCart key={index} question={item.question} />
                ))}
            </div>
            <div className="w-[45%] lg:w-1/2 md:w-[92%] sm:w-full h-fit">
              {filteredQuestions
                .slice(Math.ceil(filteredQuestions.length / 2))
                .map((item, index) => (
                  <FAQCart key={index + 100} question={item.question} />
                ))}
            </div>
          </>
        ) : (
          <p className="text-center w-full text-gray-500 mt-10">
            Please Select A category to view questions.
          </p>
        )}
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-center items-center mt-10 sm:mt-5 md:mt-5">
        <HomeButton
          icon="hugeicons:message-multiple-01"
          title="Make a Question"
        />
      </div>
    </div>
  );
}

export default FAQs;
