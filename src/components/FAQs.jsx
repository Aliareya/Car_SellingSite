import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import HomeButton from "../utils/HomeButton";
import FAQCart from "./FAQCart";

function FAQs() {

  const faqQuestions1 = [
    "01 Car inspection time?",
    "02 Can dealer allow mechanic?",
    "03 Mechanic time for used car?",
    "04 Used car inspection time?"
  ];


  const faqQuestions2 = [
    "01 Who is the author?",
    "02 Contact the author?",
    "03 Is author trustworthy?",
    "04 Author's affiliation?"
  ];


  return (
    <div className="w-full h-auto pb-14 sm:pb-10 pt-0 sm:pt-10 ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-red-700 pb-3">FAQs</p>
        <h2 className="text-3xl font-bold sm:text-center mb-4">
          Frequently Ask Question
        </h2>
      </div>

      <div className="w-full flex justify-center sm:justify-center items-center gap-10 sm:gap-y-4  flex-wrap ">
        <HomeButton
          icon={"flowbite:users-group-outline"}
          title={"General Questions"}
        />
        <HomeButton icon={"ix:car"} title={"Car Features"} />
        <HomeButton icon={"icons8:support"} title={"Technical Support"} />
      </div>
      <div className="w-full md:flex-col sm:flex-col sm:mt-5 mt-10 flex gap-5 justify-center items-start md:items-center">
        <div className="w-[45%] lg:w-1/2 md:w-[92%] sm:w-full h-fit ">
          {faqQuestions1.map((question, index) => {
            return (
              <FAQCart key={index} question={question} />
            );
          })}
        </div>
        <div className="w-[45%] lg:w-1/2 md:w-[92%] sm:w-full h-fit">
          {faqQuestions2.map((question, index) => {
            return (
              <FAQCart key={index} question={question} />
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10 sm:mt-5 md:mt-5 ">
        <HomeButton icon={"hugeicons:message-multiple-01"} title={"Make a Question"}/>
      </div>
    </div>
  );
}

export default FAQs;
