import React from "react";

import storageImage from "../../assets/images/storageImage.png";

const Components4 = () => {
  return (
    <div className="cloud-honsting-server bg-white">
      <div className="container mx-auto max-w-screen-2xl flex flex-wrap items-center py-10 xl:py-20  ">
        <div className="md:text-left lg:text-left">
          <div className="grid lg:grid-cols-2 mb-12 lg:mb-16  gap-6 items-center px-7">
            <div className="col-span-1 justify-center lg:justify-center">
              <div className="section-title mt-4">
                <img
                  src={storageImage}
                  className="mx-auto w-full sm:w-1/2 md:w-3/4 lg:w-5/6 xl:w-1/2"
                  alt="Your Alt Text"
                />
              </div>
            </div>
            <div class="col-span-1">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components4;
