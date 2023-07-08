import React from "react";

import page404 from "../../public/assets/gif/page404.gif";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Error = () => {
  return (<>
    <Navbar/>
    <div className="text-center bg-white ">
      <img src={page404} width={500} height={250} alt="" className="mx-auto" />
      <h3 className="pb-7 font-sans font-medium text-3xl">متاسفانه صفحه ی مورد نظر یافت نشد</h3>
    </div>
    <Footer/></>
  );
};
export default Error;
