import React from "react";
import WorkMan from "../../../assets/images/workman.svg";
import ContactForm from "./ContactForm";

const ServiseCard = () => {
  return (
    <div className="grid xl:grid-cols-2">
      {/* First Column */}
      <div className="w-full md:w-full lg:w-full mb-4 pr-6 flex justify-center items-center">
        <img src={WorkMan} alt="WorkMan" className="w-full lg:w-2/3 sm:w-2/3" />
      </div>

      {/* Second Column */}
      <div className="w-full md:w-full lg:w-full mb-4 pr-6">
        <div className="items-center  md:max-w-full md:flex-row ">
          <div className="items-center justify-start px-2 py-4 gap-2 group-hover:text-white ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiseCard;
