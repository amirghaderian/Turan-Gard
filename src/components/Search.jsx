import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { DatePicker } from "react-advance-jalaali-datepicker";
// icons
import arrowDown from "../../public/assets/arrow-down.svg";
import calendar from "../../public/assets/calendar.svg";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmall = useMediaQuery({ maxWidth: 320 });
  function fromDatechangeHandler(unix, formatted) {
    console.log(unix); // returns timestamp of the selected value, for example.
    console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
  }
  function DatePickerInput(props) {
    return (
      <div className="bg-mywhite py-2 flex text-end  justify-around rounded-md overflow-hidden border  ">
        <input className="popo px-5" {...props} />
        <img
          src={calendar}
          alt="arrow down"
          className="bg-transparent ml-2 md:ml-4"
          {...props}
        />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center md:px-64   " id="destination">
      <div
        className={`flex md:flex-row flex-col items-center justify-center gap-y-9 gap-x-8  rounded-full md:gap-x-4 lg:flex-1 max-w-1900  bg-mywhite p-6 mb-16 ${
          toggleSearch && " bottom-36"
        } ${isMobile && "min-w-full"}`}
      >
        {/* first section */}
        <div
          className={`flex items-center justify-center gap-x-4 border-gray-600 ${
            isSmall ? "flex-col" : ""
          }`}
        >
          <div className={`bg-mywhite py-2 flex justify-around rounded-md border text-center ${isSmall && "mt-6"}`}>
            <input
              type="text"
              placeholder="مبدا(شهر)"
              className="w-28 py-2 px-4 text-xs bg-mywhite border-none outline-none focus:outline-none  "
            />
            <img
              src={arrowDown}
              alt="arrow down"
              className="bg-transparent ml-2 md:ml-4 border-none outline-none"
            />
          </div>
          <div className={`bg-mywhite py-2 flex justify-around rounded-md border ${isSmall && "mt-6"}`}>
            <input
              type="text"
              placeholder="مقصد(شهر)"
              className="w-28 py-2 px-4 text-xs bg-mywhite border-none focus:outline-none "
            />
            <img
              src={arrowDown}
              alt="arrow down"
              className="bg-transparent ml-2 md:ml-4"
            />
          </div>
        </div>
        {/* second section */}
        <div className={`flex items-center justify-center gap-x-4 border-gray-400 ${isSmall && "flex-col "}`}>
          <DatePicker
            className="w-28 py-2 text-center  text-xs bg-mywhite border-none focus:outline-none"
            inputComponent={DatePickerInput}
            placeholder="رفت"
            format="jYYYY/jMM/jDD"
            onChange={fromDatechangeHandler}
            id="datePicker"
          ></DatePicker>
          <div className="flex items-center justify-center gap-x-4 border-gray-400">
            <DatePicker
              className="w-28 py-2 px-4 text-xs bg-mywhite border-none focus:outline-none"
              inputComponent={DatePickerInput}
              placeholder="برگشت"
              format="jYYYY/jMM/jDD"
              onChange={fromDatechangeHandler}
              id="datePicker"
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
