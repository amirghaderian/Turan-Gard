import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

// icons
import takhteJamshid from "../../public/assets/takhtjamshid-new.jpg";
import turkiye from "../../public/assets/turkiye.jpg";
import brazil from "../../public/assets/brazil.jpg";
import france from "../../public/assets/france.jpg";
import londan from "../../public/assets/londan.jpg";
import canada from "../../public/assets/canada.webp";
// components
import Package from "./Package";

const packs = [
  {
    title: "تور تخت جمشید",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۱٬۲۰۰٬۰۰۰ تومان",
    newPrice: " ۹۸۰٬۰۰۰تومان",
    picture: takhteJamshid,
    id: 1,
  },
  {
    title: "تور ترکیه",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۸٬۷۰۰٬۰۰۰ تومان",
    newPrice: "۷٬۴۰۰٬۰۰۰ تومان",
    picture: turkiye,
    id: 2,
  },
  {
    title: "تور برزیل",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۸٬۷۰۰٬۰۰۰ تومان",
    newPrice: "۸٬۳۰۰٬۰۰۰ تومان",
    picture: brazil,
    id: 3,
  },
  {
    title: "تور فرانسه",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۹٬۱۰۰٬۰۰۰ تومان",
    newPrice: "۸٬۳۰۰٬۰۰۰ تومان",
    picture: france,
    id: 4,
  },
  {
    title: "تور لندن",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۱۴٬۷۰۰٬۰۰۰ تومان",
    newPrice: "۱۳٬۳۰۰٬۰۰۰ تومان",
    picture: londan,
    id: 5,
  },
  {
    title: "تور کانادا",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۱۱٬۱۰۰٬۰۰۰ تومان",
    newPrice: "۸٬۳۰۰٬۰۰۰ تومان",
    picture: canada,
    id: 6,
  },
];

const Packages = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  return (
    <div id="pakage">
      <div className="mb-16">
        <h2 className="text-center md:text-2xl font-bold mb-5">
          <span className="text-myorange">محبوب ترین</span> پکیج های تور
        </h2>
        <p className="text-center text-xs md:text-lg text-mygray">
          با این تور ها میتوانید به مکان های بی نظیر سفر کنید
        </p>
      </div>

      <div className="flex items-center px-4 md:px-20 justify-between gap-x-4 overflow-auto mb-8 pb-8 md:w-[400] ">
        <Swiper spaceBetween={isSmallScreen ? 100 :16} slidesPerView={isSmallScreen ? 1 : 4}>
          {packs.map((pack) => (
            <SwiperSlide key={pack.id}>
              <Package
                title={pack.title}
                description={pack.description}
                oldPrice={pack.oldPrice}
                newPrice={pack.newPrice}
                picture={pack.picture}
                key={pack.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Packages;
