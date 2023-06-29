import React, { useState } from "react";

// icons
import arrowDown from "../../public/assets/arrow-down.svg";
import calendar from "../../public/assets/calendar.svg";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="flex items-center justify-center md:px-20" id="destination">
      <div className={`flex md:flex-row flex-col items-center justify-center gap-y-9 gap-x-8 rounded-3xl md:rounded-xl md:gap-x-4 lg:flex-1 bg-mywhite p-6 mb-16 ${toggleSearch ? ' bottom-36' : ''}`}>
        {/* first section */}
        <div className="flex items-center justify-center gap-x-4 border-gray-600">
          <div className="bg-mywhite py-2 flex justify-around rounded-md border">
            <input
              type="text"
              placeholder="مبدا(شهر)"
              className="w-28 py-2 px-4 text-xs bg-mywhite border-none outline-none focus:outline-none"
            />
            <img
              src={arrowDown}
              alt="arrow down"
              className="bg-transparent ml-2 md:ml-4 border-none outline-none"
            />
          </div>
          <div className="bg-mywhite py-2 flex justify-around rounded-md border">
            <input
              type="text"
              placeholder="مقصد(شهر)"
              className="w-28 py-2 px-4 text-xs bg-mywhite border-none focus:outline-none"
            />
            <img
              src={arrowDown}
              alt="arrow down"
              className="bg-transparent ml-2 md:ml-4"
            />
          </div>
        </div>
        {/* second section */}
        <div className="flex items-center justify-center gap-x-4 border-gray-400">
          <div className="bg-mywhite py-2 flex justify-around rounded-md overflow-hidden border">
            <input
              type="text"
              placeholder="تاریخ رفت"
              className="w-28 py-2 px-4 text-xs bg-mywhite border-none focus:outline-none"
            />
            <img
              src={calendar}
              alt="arrow down"
              className="bg-transparent ml-2 md:ml-4"
            />
          </div>
          <div className="bg-mywhite py-2 flex justify-around rounded-md overflow-hidden border">
            <input
              type="text"
              placeholder="تاریخ برگشت"
              className="w-28 py-2 px-4 text-xs bg-mywhite   focus:outline-none"
            />
            <img
              src={calendar}
              alt="arrow down"
              className="bg-transparent ml-2 md:ml-4"
            />
          </div>
        </div>
        {/* third section */}
        <div className="flex items-center justify-center">
          <button className="bg-myorange text-white py-2 md:py-3 px-12 rounded-md">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
