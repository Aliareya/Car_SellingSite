import React from "react";

// import home components
import BrowseTopCar from "./home_parts/BrowseTopCar";

function Home() {
  return (
    <div className="w-full h-auto pb-20 sm:pb-10 pt-32 sm:py-96 px-4 lg:px-0 md:px-0 sm:px-1 ">
      {/* Browse Top Car */}
      <BrowseTopCar/>

    </div>
  );
}

export default Home;
