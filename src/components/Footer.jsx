import React from "react";

// images
import airplane from "../../public/assets/airplane.svg";
import mail from "../../public/assets/mail.svg";
import phone from "../../public/assets/phone.svg";
import enamad from "../../public/assets/enamad.png";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 px-9 md:px-20 py-6 bg-mylight  rounded-[100px]  max-w-1800 mx-auto">
      {/* header */}
      <header className="flex flex-col gap-y-8 md:w-2/5 md:pt-8 ">
        <div className="flex">
          <a href="#" className="font-extrabold text-lg text-myorange">
            توران گرد
          </a>
          <img src={airplane} alt="airplane" className="w-9 h-8" />
        </div>
        <p className="text-sm">
          این قسمت درج شود این یک متن آزمایشی میباشد که استفاده آن چیزی که
          میخواهد در خصوص متن ها نوشته شود.این قسمت درج شود این یک متن آزمایشی
          میباشد که استفاده آن چیزی که میخواهد در خصوص متن ها نوشته شود.
        </p>
      </header>
      {/* contact us */}
      <section className="mt-8 flex md:flex-1 md:justify-start items-center gap-x-4 ">
        <nav>
          <ul className="flex flex-col gap-y-4 list-outside">
            <li>
              <a className=" px-6 cursor-pointer py-2 border-b-2 border-mywhite text-xl">
                میانبر
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  cursor-pointer py-2 hover:border-b-2 hover:border-mywhite transition-all duration-300"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="#pakage"
                className="  cursor-pointer py-2 hover:border-b-2 hover:border-mywhite transition-all duration-300"
              >
                لیست تور ها
              </a>
            </li>
            <li>
              <a
                href="#destination"
                className="  cursor-pointer py-2 hover:border-b-2 hover:border-mywhite transition-all duration-300"
              >
                مقصد ها
              </a>
            </li>
            <li>
              <a
                href="#bestTrip"
                className="  cursor-pointer py-2 hover:border-b-2 hover:border-mywhite transition-all duration-300"
              >
                اقامت
              </a>
            </li>
            <li>
              <a
                href="#weblog"
                className="  cursor-pointer py-2 hover:border-b-2 hover:border-mywhite transition-all duration-300"
              >
                وبلاگ
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row md:gap-x-8 md:mr-8 md:items-start md:-mt-[108px] gap-y-11">
          {/* information */}
          <div className="flex flex-col gap-y-6">
            <span className="border-b-2 border-mywhite  py-2 text-xl">
              اطلاعات تماس
            </span>
            <div className="flex items-start gap-x-4">
              <img src={phone} alt="phone" />
              <span className="text-sm">۰۲۱-۱۲۳۴۵۶۷۸۹</span>
            </div>
            <div className="flex items-start gap-x-4">
              <img src={mail} alt="mail" />
              <span className="text-sm">turangard@gmail.com</span>
            </div>
          </div>
          {/* enamad */}
          <div className="flex items-center  gap-x-6">
            <img
              src={enamad}
              alt="enamad"
              className="w-16 h-16 md:w-auto md:h-auto"
            />
            <img
              src={logo}
              alt="logo"
              className="w-20 h-16 md:w-auto md:h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
