import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Check from "../../../utils/inputs/Check";

function FilterCart({ filtername, options, selectedOptions, onSelectionChange }) {
  const [openFAQ, setOpenFAQ] = useState(false);

  const handleOpenFQS = () => {
    setOpenFAQ(!openFAQ);
  };

  const handleCheckboxChange = (option) => {
    let newSelected;
    if (selectedOptions.includes(option)) {
      newSelected = selectedOptions.filter((item) => item !== option);
    } else {
      newSelected = [...selectedOptions, option];
    }
    onSelectionChange(newSelected);
  };

  return (
    <div
      className={`transition-all duration-500 ease-in-out w-full border-t border-gray-200 flex flex-col justify-between items-center overflow-hidden ${
        openFAQ ? "max-h-44 py-3" : "max-h-11 pt-3"
      }`}
    >
      {/* Title */}
      <div className="min-h-11 w-full flex justify-between items-center">
        <p className="text-base font-semibold">{filtername}</p>
        <Icon
          onClick={handleOpenFQS}
          icon="icon-park-outline:down-c"
          width="20"
          height="20"
          style={{
            color: "#000",
            transition: "transform 0.3s",
            transform: openFAQ ? "rotate(180deg)" : "rotate(0deg)",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Options */}
      <div className="w-full pt-2">
        <div className="min-h-20 max-h-32 overflow-y-scroll">
          {options &&
            options.map((option, index) => (
              <Check
                key={index}
                option={option}
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FilterCart;
