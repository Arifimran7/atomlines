import React from "react";

const ContactLanding = () => {
  return (
    <div className="contact bg-white">
      <div className="container mx-auto max-w-screen-2xl flex flex-wrap items-center justify-center">
        <div className="text-center py-2 px-3">
          <div className="grid lg:grid-cols-1 mb-12 lg:mb-16 gap-4 items-center">
            <div className="col-span-1 sm:text-center lg:text-center">
              <div className="p-2 lg:p-8">
                <h1 className="text-2xl lg:text-3xl xl:text-5xl pb-5 font-bold lg:font-medium block mt-1 leading-tigh text-sky-950">
                  contacts
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLanding;
