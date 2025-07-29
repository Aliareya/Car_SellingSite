import React from "react";

function HomeBanner({banner_bg}) {
  return (
    <div
      className="w-full h-auto bg-center bg-cover"
      style={{ backgroundImage: `url(${banner_bg})` }}
    >
      <div className="w-full h-[500px] content_body_bg text-4xl text-white font-bold">
        Home
      </div>
    </div>
  );
}

export default HomeBanner;
