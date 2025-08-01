import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";

function FAQCart({question}) {

  const [openFAQ, setOpenFAQ] = useState(false);
  const handleOpenFQS = (id) => {
    setOpenFAQ(!openFAQ);
  };
  return (
    <div
      onClick={() => handleOpenFQS(1)}
      className={`bg-slate-50 transition-all duration-500 ease-in-out w-full border-y border-gray-200 flex flex-col justify-between items-center px-3 overflow-hidden ${
        openFAQ ? "max-h-60 py-4" : "max-h-14 pt-4"
      }`}
    >
      {/* Title row */}
      <div className="min-h-12 w-full flex justify-between items-center">
        <p className="text-base font-semibold">
          {question}
        </p>
        <Icon
          icon="icon-park-outline:down-c"
          width="20"
          height="20"
          style={{
            color: "#000",
            transition: "transform 0.3s",
            transform: openFAQ ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      {/* Answer text */}
      <div className="w-full pt-4">
        <p className="text-base text-gray-600">
          Dynamically reintermediate virtual functionalities for bandwidth.
          Uniquely expedite cooperative strategic theme areas and sticky
          e-markets.
        </p>
      </div>
    </div>
  );
}

export default FAQCart;
