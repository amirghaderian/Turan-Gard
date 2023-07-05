import React, { useState } from "react";

// icons
import ticket from "../../public/assets/ticket.svg";
import airplane from "../../public/assets/airplane.svg";
import hamburgerMenu from "../../public/assets/sort.svg";
import login from "../../public/assets/login.svg";
import { useParams } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState({ right: false });
  const [isActive, setActive] = useState(true);
  const { id } = useParams();
  console.log(id);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "صفحه اصلی", href: "#", iconName: "" },
          { text: "لیست تور ها", href: "#pakage", iconName: "" },
          { text: "مقصد ها", href: "#destination", iconName: "" },
          { text: "اقامت", href: "#bestTrip", iconName: "" },
          { text: "بلاگ ها", href: "#weblog", iconName: "" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemText className="text-center" />
              <a href={item.href}>{item.text}</a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
 
  );

  return (
    <div className="relative max-w-1900  mx-auto ">
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
              <Link
                to="/ "
                className={`block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3 ${
                  id === "/" ? "bg-yellow-900" : ""
                }`}
              >
                صفحه اصلی
              </Link>
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
            <li>
              <Link
                to="/about "
                className="block md:text-xs xl:text-lg hover:border-b-2 hover:border-myorange transition-all duration-200 focus:text-myorange focus:border-b-2 focus:border-myorange hover:text-myorange rounded-lg lg:text-base px-2 py-3"
              >
                درباره ی ما
              </Link>
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

      <div>
        <SwipeableDrawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </div>

      <div className={`px-6 md:hidden flex items-center justify-between `}>
        <img
          src={hamburgerMenu}
          onClick={toggleDrawer("right", true)}
          alt="hamburgerMenu"
        />

        <div className="flex items-center justify-center gap-x-1">
          <img src={login} alt="login" />
          <span className="-mt-2">ورود</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
