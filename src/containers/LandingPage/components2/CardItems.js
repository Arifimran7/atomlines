import React from "react";
import { FaCode } from "react-icons/fa6";

const Card = ({ heading, paragraph, bgcolor, textColor }) => {
  return (
    <div className="group max-w-full bg-salt-200 rounded-lg shadow-xl dark:border-gray-700 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-500 hover:via-teal-400 hover:to-green-300 hover:text-white text-left px-2 ease-in-out duration-300">
      <div className="p-5">
        <div
          className={`flex items-center ${bgcolor} justify-center w-14 h-14 rounded-full transition duration-500 group-hover:text-black group-hover:bg-white`}
        >
          <FaCode
            style={{
              color: `${textColor}`,
            }}
          />
        </div>

        <a href="#" className="text-left ">
          <h5 className="mb-2 mt-4 text-xl font-bold tracking-tight text-sky-950 group-hover:text-white">
            {heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-left text-gray-600 group-hover:text-white">
          {paragraph}
        </p>

        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out text-left"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
