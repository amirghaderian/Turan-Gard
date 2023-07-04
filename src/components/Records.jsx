import React from "react";

//image
import bubalus from "../../public/assets/bubalus.png";
import elefont from "../../public/assets/elefont.png";
import follow from "../../public/assets/follow.png";
import talkingDog from "../../public/assets/talkingDog.png";

const Records = () => {
  return (
    <div className="px-8 mb-10  max-w-1900 mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        <span className="text-myorange">همکاری </span>با شرکت های بزرگ
      </h2>
      <p className="text-xs text-mygray text-center mt-8">
        شرکت های بزرگ که به ما اعتماد کرده اند
      </p>
      <div className="flex gap-x-4 items-center justify-between md:justify-evenly md:gap-x-8 mt-8 md:px-52">
        <img
          src={follow}
          alt="follow"
          className="w-[83px] h-[68px] hidden md:block md:w-auto md:h-auto
        "
        />
        <img
          src={talkingDog}
          alt="talkingDog"
          className="w-[83px] h-[68px] md:w-auto md:h-auto
        "
        />
        <img
          src={elefont}
          alt="elefont"
          className="w-[83px] h-[68px] md:w-auto md:h-auto
        "
        />
        <img
          src={bubalus}
          alt="bubalus"
          className="w-[83px] h-[68px] md:w-auto md:h-auto
        "
        />
      </div>
    </div>
  );
};

export default Records;
