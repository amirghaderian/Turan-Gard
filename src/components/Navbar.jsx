import React, { useState } from "react";

// icons
import ticket from "../../public/assets/ticket.svg";
import airplane from "../../public/assets/airplane.svg";
import hamburgerMenu from "../../public/assets/sort.svg";
import login from "../../public/assets/login.svg";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      {/* mobile navbar */}
      <div className="flex md:hidden items-center justify-center py-4 bg-mylight mb-7">
        <span className="font-extrabold text-2xl text-myorange">توران گرد</span>
        <img src={airplane} alt="airplane" />
      </div>

      {/* desktop navbar */}

      <div className="hidden md:flex items-center gap-x-12 py-6 px-20 mb-4">
        <div className="flex items-center">
          <span className="font-extrabold md:text-xs xl:text-lg text-2xl text-myorange">
            توران گرد
          </span>
          <img src={airplane} alt="airplane" />
        </div>
        <nav className="flex-1">
          <ul className="flex items-center gap-x-4">
            <li>
              <a
                className="block md:text-xs xl:text-lg hover:border-b-2 text-myorange border-b-2 border-myorange hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange  hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                href="#"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                href="#pakage"
              >
                لیست تور ها
              </a>
            </li>
            <li>
              <a
                className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                href="#destination"
              >
                مقصد ها
              </a>
            </li>
            <li>
              <a
                className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                href="#bestTrip"
              >
                اقامت
              </a>
            </li>
            <li>
              <a
                className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                href="#weblog"
              >
                وبلاگ
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-4">
          <span>
            <img src={ticket} alt="ticket" />
          </span>
          <span className="md:text-xs xl:text-lg">پیگیری خرید</span>
          <button className="bg-myorange py-2 md:text-xs xl:text-lg px-4 rounded-lg text-mywhite">
            ثبت نام
          </button>
          <button className="bg-mywhite py-2 md:text-xs xl:text-lg px-7 rounded-lg border border-gray-300">
            ورود
          </button>
        </div>
      </div>

      {/* hamburger menu */}

      <div className={`px-6 md:hidden flex items-center justify-between `}>
        <img src={hamburgerMenu} alt="hamburgerMenu" onClick={showHandler} />
        <div className="flex items-center justify-center gap-x-1">
          <img src={login} alt="login" />
          <span className="-mt-2">ورود</span>
        </div>
      </div>
      {showMenu && (
        <div className="px-12 md:hidden z-10 absolute top-32 w-48   transition-all duration-700">
          <nav className="bg-mylight rounded-2xl absolute left-24">
            <ul className="flex flex-col items-center gap-x-4">
              <li>
                <a
                  className="block md:text-xs xl:text-lg hover:border-b-2 text-myorange border-b-2 border-myorange hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange  hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                  href="#"
                >
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a
                  className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                  href="#pakage"
                >
                   تور ها
                </a>
              </li>
              <li>
                <a
                  className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                  href="#destination"
                >
                  مقصد ها
                </a>
              </li>
              <li>
                <a
                  className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                  href="#bestTrip"
                >
                  اقامت
                </a>
              </li>
              <li>
                <a
                  className="block md:text-xs hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
                  href="#weblog"
                >
                  وبلاگ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
