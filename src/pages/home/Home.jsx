import React from "react";

// import home components
import BrowseTopCar from "./home_parts/BrowseTopCar";
import Latest_Submission from "./home_parts/Latest_Submission";
import ChooseUs from "./home_parts/ChooseUs";
import DownloadAppSuggestio from "../../components/DownloadAppSuggestio";
import FAQs from "../../components/FAQs";


function Home() {
  return (
    <div className="w-full h-auto pb-20 md:pb-14 sm:pb-10 pt-32 sm:py-96 px-4 lg:px-0 md:px-0 sm:px-1 ">
      {/* Browse Top Car */}
      <BrowseTopCar/>

      {/* Latest Offer */}  
      <Latest_Submission/>

      {/* Chose Us */}
      <ChooseUs/>

      {/* FAQs */}
      <FAQs/>

      {/* Download app suggestion  */}
      <DownloadAppSuggestio/>



    </div>
  );
}

export default Home;
