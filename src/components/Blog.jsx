import React from "react";

// images
// import img from "../../public/assets/takhtjamshid-new.jpg";

const Blog = ({ image, title }) => {
  return (
    <div className="flex w-[273px] h-full m-auto">
      <div className="bg-red-200 relative overflow-hidden rounded-3xl ">
        <div className="w-[273px] h-[190px]">
          <img src={image} alt="blog picture" className="w-full h-full"/>
        </div>
        <div className="absolute bottom-0 right-0 left-0 w-full h-16 hover:h-full cursor-pointer bg-slate-600 bg-opacity-50 flex items-center justify-center transition-all duration-500 ">
          <p className="text-center text-white">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
