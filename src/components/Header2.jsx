import React, { useState } from "react";
import bestPrice from "../../public/assets/bestPrice.svg";
import reserve from "../../public/assets/reserve.svg";
import liked from "../../public/assets/liked.svg";
import worldMove from "../../public/assets/world.mp4";
import mobilescreen from "../../public/assets/mobilescreen.jpg";

const Header2 = () => {
  const [isHoveredCard1, setIsHoveredCard1] = useState(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);
  const [isHoveredCard3, setIsHoveredCard3] = useState(false);

  const handleHoverCard1 = () => {
    setIsHoveredCard1(true);
  };

  const handleHoverCard2 = () => {
    setIsHoveredCard2(true);
  };

  const handleHoverCard3 = () => {
    setIsHoveredCard3(true);
  };

  const handleMouseLeaveCard1 = () => {
    setIsHoveredCard1(false);
  };

  const handleMouseLeaveCard2 = () => {
    setIsHoveredCard2(false);
  };

  const handleMouseLeaveCard3 = () => {
    setIsHoveredCard3(false);
  };

  return (
    <section className="mb-16">
      <img className="md:hidden" src={mobilescreen} />
      <div className="hidden md:flex items-center justify-center">
        <div className="h-200 min-w-full bg-red-50">
          <video
            src={worldMove}
            autoPlay
            loop
            className="object-cover h-full w-full"
          />
          <div className="absolute	top-1/2 text-white right-40">
            <h2 className="text-3xl"> توران گرد</h2>
            <p className="pt-3  text-lg ">
              این یک متن آزمایشی میباشد که استفاده آن چیزی که میخواهد در خصوص
              متن ها نوشته شود.
            </p>
          </div>
        </div>
      </div>

      <div className="px-40 hidden md:flex items-center justify-center -mt-16 ">
        <div className="w-full bg-red-50 py-14 px-4 flex items-center justify-center gap-x-10 cards rounded-full">
          {/* first */}
          <div
            className={`flex flex-col card rounded-3xl	 h-52 p-5 bg-mycard ${
              isHoveredCard2 || isHoveredCard3 ? "blur-sm	scale-90 	" : ""
            } hover: border-4 cursor-pointer transition hover: duration-700 hover:scale-110	 	`}
            onMouseEnter={handleHoverCard1}
            onMouseLeave={handleMouseLeaveCard1}
          >
            <div className="flex flex-col items-center gap-x-1">
              <img
                src={bestPrice}
                alt="bestPrice"
                className="w-10 h-10 mx-auto"
              />
              <pre />
              <span className="text-2xl font-medium pt-1">بهترین قیمت</span>
            </div>

            <span className="text-sm text-center ">کمترین قیمت </span>
            <span className="text-sm text-center"> و با کیفیت ترین خدمات</span>
          </div>
          {/* second */}
          <div
            className={`flex flex-col card rounded-3xl	 h-52 p-5 bg-mycard  ${
              isHoveredCard1 || isHoveredCard3 ? "blur-sm	scale-90	" : ""
            } hover: border-4 cursor-pointer hover:scale-110 hover: duration-700		`}
            onMouseEnter={handleHoverCard2}
            onMouseLeave={handleMouseLeaveCard2}
          >
            <img src={reserve} alt="reserve" className="w-10 h-10 mx-auto " />
            <span className="flex text-2xl font-medium justify-center pt-1 ">
              رزرو سریع
            </span>
            <span className="text-sm text-center">بهترین هتل ها و بهترین</span>
            <span className="text-sm text-center">پرواز ها در اختیار شما</span>
          </div>
          {/* third */}
          <div
            className={`flex flex-col card rounded-3xl	 h-52 p-5 bg-mycard ${
              isHoveredCard1 || isHoveredCard2 ? "blur-sm scale-90		" : ""
            } hover: border-4 cursor-pointer hover:scale-110 hover: duration-700`}
            onMouseEnter={handleHoverCard3}
            onMouseLeave={handleMouseLeaveCard3}
          >
            <img src={liked} alt="liked" className="w-10 h-10 mx-auto" />
            <span className="flex justify-center text-2xl font-medium text pt-1">
              رضایت مشتری
            </span>

            <span className="text-sm text-center">آسایش و رضایت مشتریان</span>
            <span className="text-sm text-center">بهترین رسالت ماست</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header2;
