import React from "react";
import SectionTitile from "./SectionTitle";
import Carousel from "./Carousel";

export const Components6 = () => {
  return (
    <div className="Our_Features bg-white ">
      <div className="container mx-auto max-w-screen-2xl items-center py-10 xl:py-20">
        <div className=" text-center lg:text-left">
          <div className="flex flex-col   md:space-x-6 lg:space-x-12 mb-12 lg:mb-16 px-7">
            <div className="md:w-full flex justify-center items-center">
              <SectionTitile />
            </div>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Components6;
