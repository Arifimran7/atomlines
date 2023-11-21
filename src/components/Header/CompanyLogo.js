import React from "react";
import myImage from "../../assets/images/atomlines-logo.png";

const CompanyLogo = () => {
  return (
    <a
      href="https://atomlines.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src={myImage} className="w-26 h-16" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"></span>
    </a>
  );
};

export default CompanyLogo;
