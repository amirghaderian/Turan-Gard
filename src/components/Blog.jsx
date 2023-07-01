import React from "react";
import { useMediaQuery } from "react-responsive";
// images
// import img from "../../public/assets/takhtjamshid-new.jpg";

const Blog = ({ image, title }) => {
  const isMobile = useMediaQuery({ maxWidth: 860 });

  return (
    <div className={`flex h-full m-auto ${isMobile ?"w-[473px]":" w-[273px]"}`}>
      <div className={`bg-red-200 relative overflow-hidden rounded-3xl `}>
        <div className={`w-[373px] h-[190px] ${isMobile ?"w-[473px]":" w-[273px]"}`}>
          <img src={image} alt="blog picture" className="w-full h-full object-cover " />
        </div>
        <div className="absolute bottom-0 right-0 left-0 w-full h-16 hover:h-full cursor-pointer bg-slate-600 bg-opacity-50 flex items-center justify-center transition-all duration-500 ">
          <p className="text-center text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
