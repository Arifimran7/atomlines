import React from "react";

const MenuList = () => {
  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  bg-slate-100 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-black hover:text-green-500">
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 text-black hover:text-green-500 "
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
