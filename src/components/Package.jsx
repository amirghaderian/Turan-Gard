import React from "react";

const Package = ({ title, description, oldPrice, newPrice, picture }) => {
  return (
    <div>
      {/* section 1 */}
      <div className="flex flex-col w-full gap-y-6 m-auto bg-mywhite shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 md:w-80  border-2 border-gray-200	">
        {/* #1 */}
        <div className="w-auto h-[190px] rounded-bl-2xl overflow-hidden">
          <img src={picture} alt="package" className="w-full h-full" />
        </div>
        {/* #2 */}
        <div className="flex  items-center justify-between gap-x-1 px-4">
          <div className="flex gap-y-1 flex-col">
            <span className="font-bold text-sm md:text-base">{title}</span>
            <span className="text-xs text-mygray">{description}</span>
          </div>
          <div className="flex flex-col gap-y-1 items-end ">
            <span className="text-xs text-red-600">{newPrice}</span>
            <span className="text-xs text-mygray line-through">{oldPrice}</span>
          </div>
        </div>
        {/* #3 */}
        <div className="flex items-center justify-between px-4 pb-4">
          <button className="bg-myorange py-2 md:py-3 px-8 rounded-md text-mywhite ">
            جستجو
          </button>
          <span className="text-lg text-mygray py-2 md:py-3 cursor-pointer">
            جزییات
          </span>
        </div>
      </div>
    </div>
  );
};

export default Package;
