import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  bg-slate-100 dark:border-gray-700">
      <li>
        <Link
          to="/Components1"
          className="block py-2 px-3 text-black hover:text-green-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/Components2"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Components3"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/Components4"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
