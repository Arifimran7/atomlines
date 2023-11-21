import React, { useState } from "react";
import MenuList from "./MenuList";
import CompanyLogo from "./CompanyLogo";
import MenubarIcon from "./MenubarIcon";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navBar-Header lg:px-20">
      <nav className="bg-white border-gray-200 bg-slate-100	">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <CompanyLogo />

          {/* started button div*/}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
          {/*  Show in Mobile & Tab view* menubaricon div */}
          <MenubarIcon
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <MenuList />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
