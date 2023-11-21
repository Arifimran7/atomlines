import React from "react";
import WorkMan from "../../assets/images/workman.svg";
import { Button } from "@material-tailwind/react";

const Components1 = () => {
  return (
    <div className="main-profile">
      <div className="container mx-auto max-w-screen-2xl flex flex-wrap items-center">
        <section className="py-5 bg-neutral-light-grayish-blue lg:py-5 sm:py-20">
          <div className="text-center md:text-left lg:text-left py-2 px-3">
            <div className="grid lg:grid-cols-2 mb-12 lg:mb-16 gap-4 items-center">
              <div className="col-span-1 text-center lg:text-left">
                <div class="p-2 lg:p-8">
                  <h1 class="text-2xl lg:text-3xl xl:text-5xl pb-5 font-bold lg:font-medium block mt-1 leading-tigh text-sky-950">
                    Secure IT Solutions for a more secure environment
                  </h1>
                  <p class="mt-2 text-slate-500">
                    Looking to take your team away on a retreat to enjoy awesome
                    food and take in some sunshine? We have a list of places to
                    do just that.
                  </p>
                </div>
              </div>
              <div className="col-span-1 flex justify-center lg:justify-center">
                <img src={WorkMan} alt="WorkMan" className="w-full lg:w-2/3" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Components1;
