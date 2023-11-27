import React from "react";

import SectionTitile from "./SectionTitle";
import ServiseCard from "./ServiceCard";
import JuiceiMan from "../../../assets/images/juicy-man.gif";

const Components4 = () => {
  return (
    <div className="cloud-honsting-server bg-white">
      <div className="container mx-auto max-w-screen-2xl items-center py-10 xl:py-20">
        <div className="md:text-left lg:text-left">
          <div className="flex flex-col md:flex-row  md:space-x-6 lg:space-x-12 mb-12 lg:mb-16 px-7">
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="mt-4 text-center">
                <img
                  src={JuiceiMan}
                  className="mx-auto w-full "
                  alt="juiceiman"
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="section-title">
                <SectionTitile />
                <ServiseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components4;
