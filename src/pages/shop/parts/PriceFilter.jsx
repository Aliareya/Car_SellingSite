import React, { useState, useEffect, useRef } from 'react';

const PriceFilter = () => {
  const [min, setMin] = useState(2800);
  const [max, setMax] = useState(8500);
  const rangeTrackRef = useRef(null);

  const minLimit = 0;
  const maxLimit = 10000;

  useEffect(() => {
    const percent1 = ((min - minLimit) / (maxLimit - minLimit)) * 100;
    const percent2 = ((max - minLimit) / (maxLimit - minLimit)) * 100;

    if (rangeTrackRef.current) {
      rangeTrackRef.current.style.left = `${percent1}%`;
      rangeTrackRef.current.style.width = `${percent2 - percent1}%`;
    }
  }, [min, max]);

  return (
    <div className="w-full max-w-md px-4 py-8">
      <div className="relative mb-4 h-6">
        {/* Dual Range Inputs */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 100))}
          className="absolute w-full z-20 appearance-none bg-transparent pointer-events-none"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 100))}
          className="absolute w-full z-20 appearance-none bg-transparent pointer-events-none"
        />

        {/* Base Track */}
        <div className="absolute top-[10px] left-0 right-0 h-1 bg-gray-300 rounded z-0" />
        {/* Red Range Track */}
        <div
          ref={rangeTrackRef}
          className="absolute top-[10px] h-1 bg-red-500 z-10 rounded"
        />
      </div>

      {/* Price Inputs */}
      <div className="flex justify-between items-center gap-2">
        <input
          type="number"
          value={min}
          min={minLimit}
          max={max}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 100))}
          className="w-1/2 border rounded-md p-2 text-center"
        />
        <span className="text-xl text-gray-500">-</span>
        <input
          type="number"
          value={max}
          min={min}
          max={maxLimit}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 100))}
          className="w-1/2 border rounded-md p-2 text-center"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
