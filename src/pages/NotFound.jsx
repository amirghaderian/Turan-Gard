import React from "react";

import page404 from "../../public/assets/gif/page404.gif";
const Error = () => {
  return (
    <div className="text-center ">
      <img src={page404} width={500} height={250} alt="" className="mx-auto" />
      <h3 className="">متاسفانه صفحه ی مورد نظر یافت نشد</h3>
    </div>
  );
};
export default Error;
